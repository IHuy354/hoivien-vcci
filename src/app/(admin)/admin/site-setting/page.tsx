'use client';

import { useState, useMemo } from 'react';
import { toast } from 'sonner';

import {
  useGetApiV10SiteSetting,
  usePutApiV10SiteSetting,
} from '@/api/endpoints/site-setting';
import type { SiteSetting } from '@/api/models/siteSetting';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import {
  Settings,
  Save,
  RefreshCw,
  Globe,
  Phone,
  Share2,
  BarChart3,
  Calendar,
  Search as SearchIcon,
} from 'lucide-react';

import { ImageSettingField } from './_components/image-setting-field';
import { DateTimeSettingField } from './_components/datetime-setting-field';

// ─── Types ─────────────────────────────────────────────────────────────────────

type GroupName = 'general' | 'contact' | 'social' | 'counter' | 'event' | 'seo';

interface SettingGroup {
  name: GroupName;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

// ─── Constants ─────────────────────────────────────────────────────────────────

const SETTING_GROUPS: SettingGroup[] = [
  {
    name: 'general',
    label: 'Tổng Quan',
    icon: Globe,
    description: 'Cấu hình chung của website',
  },
  {
    name: 'contact',
    label: 'Liên Hệ',
    icon: Phone,
    description: 'Thông tin liên hệ và hỗ trợ',
  },
  {
    name: 'social',
    label: 'Mạng Xã Hội',
    icon: Share2,
    description: 'Liên kết các kênh truyền thông',
  },
  {
    name: 'counter',
    label: 'Thống Kê',
    icon: BarChart3,
    description: 'Số liệu hiển thị trên trang chủ',
  },
  {
    name: 'event',
    label: 'Sự Kiện',
    icon: Calendar,
    description: 'Thông tin khóa học và đăng ký',
  },
  {
    name: 'seo',
    label: 'SEO',
    icon: SearchIcon,
    description: 'Tối ưu hóa công cụ tìm kiếm',
  },
];

// ─── Helper Functions ──────────────────────────────────────────────────────────

/**
 * Check if a setting field is a file/image field that needs upload component
 */
const isImageField = (setting: SiteSetting): boolean => {
  const key = setting.key || '';
  const dataType = setting.data_type || '';
  
  // Check by data_type first
  if (dataType.toLowerCase() === 'image' || dataType.toLowerCase() === 'file') {
    return true;
  }
  
  // Fallback: check by key pattern
  const imageKeys = ['logo_id', 'image_id', 'banner_id', 'qr_id', 'avatar_id'];
  return imageKeys.some((pattern) => key.includes(pattern));
};

/**
 * Check if a setting field needs a textarea (for long text)
 */
const isTextareaField = (key: string): boolean => {
  const textareaKeys = ['description', 'keywords', 'address'];
  return textareaKeys.some((pattern) => key.includes(pattern));
};

/**
 * Check if a setting field is a date/datetime field
 */
const isDateTimeField = (setting: SiteSetting): boolean => {
  const key = setting.key || '';
  const dataType = setting.data_type || '';
  
  // Check by data_type first
  if (dataType.toLowerCase() === 'datetime' || dataType.toLowerCase() === 'date') {
    return true;
  }
  
  // Check by key pattern
  const dateKeys = ['_date', 'date_', 'ngay_', '_ngay'];
  return dateKeys.some((pattern) => key.toLowerCase().includes(pattern));
};

export default function SiteSettingPage() {
  // ── State ──
  const [activeTab, setActiveTab] = useState<GroupName>('general');
  const [editedValues, setEditedValues] = useState<Record<string, string>>({});
  const [hasChanges, setHasChanges] = useState(false);

  // ── API Queries ──
  const { data: response, isLoading, refetch } = useGetApiV10SiteSetting();

  const settings: SiteSetting[] = useMemo(() => {
    return (response as { responseData?: SiteSetting[] })?.responseData ?? [];
  }, [response]);

  // ── Mutations ──
  const updateMutation = usePutApiV10SiteSetting({
    mutation: {
      onSuccess: () => {
        toast.success('Cập nhật cấu hình thành công!');
        setEditedValues({});
        setHasChanges(false);
        refetch();
      },
      onError: (error: unknown) => {
        const message = (error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Có lỗi xảy ra khi cập nhật';
        toast.error(message);
      },
    },
  });

  // ── Group Settings By Group Name ──
  const groupedSettings = useMemo(() => {
    const grouped: Record<GroupName, SiteSetting[]> = {
      general: [],
      contact: [],
      social: [],
      counter: [],
      event: [],
      seo: [],
    };

    settings.forEach((setting) => {
      const group = setting.group_name as GroupName;
      if (grouped[group]) {
        grouped[group].push(setting);
      }
    });

    return grouped;
  }, [settings]);

  // ── Handlers ──
  const handleValueChange = (key: string, value: string) => {
    setEditedValues((prev) => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const getCurrentValue = (setting: SiteSetting): string => {
    return editedValues[setting.key || ''] ?? setting.value ?? '';
  };

  const handleSaveAll = () => {
    const changes = Object.entries(editedValues).map(([key, value]) => ({
      key,
      value,
    }));

    if (changes.length === 0) {
      toast.info('Không có thay đổi nào để lưu');
      return;
    }

    updateMutation.mutate({
      data: { settings: changes },
    });
  };

  const handleSaveGroup = (group: GroupName) => {
    const groupSettings = groupedSettings[group];
    const changes = groupSettings
      .filter((s) => s.key && editedValues[s.key] !== undefined)
      .map((s) => ({
        key: s.key!,
        value: editedValues[s.key!],
      }));

    if (changes.length === 0) {
      toast.info('Không có thay đổi nào trong nhóm này');
      return;
    }

    updateMutation.mutate({
      data: { settings: changes },
    });
  };

  const handleReset = () => {
    setEditedValues({});
    setHasChanges(false);
    toast.info('Đã hủy các thay đổi');
  };

  // ── Render Empty State ──
  if (isLoading) {
    return (
      <div className="container mx-auto p-6 space-y-6">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <Settings className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Cấu Hình Website</h1>
          </div>
          <p className="text-muted-foreground">
            Quản lý các thông tin cấu hình hiển thị trên website
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => refetch()}
            disabled={updateMutation.isPending}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Làm mới
          </Button>
          {hasChanges && (
            <>
              <Button variant="outline" onClick={handleReset}>
                Hủy
              </Button>
              <Button
                onClick={handleSaveAll}
                disabled={updateMutation.isPending}
              >
                <Save className="h-4 w-4 mr-2" />
                Lưu tất cả
              </Button>
            </>
          )}
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Tổng số cấu hình</CardDescription>
            <CardTitle className="text-3xl">{settings.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Số nhóm cấu hình</CardDescription>
            <CardTitle className="text-3xl">{SETTING_GROUPS.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Đã chỉnh sửa</CardDescription>
            <CardTitle className="text-3xl">
              {Object.keys(editedValues).length}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* ── Tabs ── */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as GroupName)}>
        <TabsList className="grid w-full grid-cols-6">
          {SETTING_GROUPS.map((group) => {
            const Icon = group.icon;
            const count = groupedSettings[group.name]?.length || 0;
            return (
              <TabsTrigger key={group.name} value={group.name} className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{group.label}</span>
                <Badge variant="secondary" className="ml-auto">
                  {count}
                </Badge>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {SETTING_GROUPS.map((group) => (
          <TabsContent key={group.name} value={group.name} className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2">
                      <group.icon className="h-5 w-5" />
                      {group.label}
                    </CardTitle>
                    <CardDescription>{group.description}</CardDescription>
                  </div>
                  {hasChanges && (
                    <Button
                      size="sm"
                      onClick={() => handleSaveGroup(group.name)}
                      disabled={updateMutation.isPending}
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Lưu nhóm này
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {groupedSettings[group.name]?.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    Chưa có cấu hình nào trong nhóm này
                  </p>
                ) : (
                  groupedSettings[group.name]?.map((setting) => {
                    const isDateTime = isDateTimeField(setting);
                    const isImage = isImageField(setting);
                    const isTextarea = isTextareaField(setting.key || '');

                    return (
                      <div key={setting.id}>
                        {isDateTime ? (
                          // Render DateTime Picker Field
                          <DateTimeSettingField
                            label={setting.description || setting.key || ''}
                            description={
                              setting.data_type
                                ? `Kiểu dữ liệu: ${setting.data_type}${
                                    setting.updated_at
                                      ? ` • Cập nhật: ${new Date(
                                          setting.updated_at
                                        ).toLocaleString('vi-VN')}`
                                      : ''
                                  }`
                                : undefined
                            }
                            keyName={setting.key || ''}
                            value={getCurrentValue(setting)}
                            onChange={(value) =>
                              handleValueChange(setting.key || '', value)
                            }
                          />
                        ) : isImage ? (
                          // Render Image Upload Field
                          <ImageSettingField
                            label={setting.description || setting.key || ''}
                            description={
                              setting.data_type
                                ? `Kiểu dữ liệu: ${setting.data_type}${
                                    setting.updated_at
                                      ? ` • Cập nhật: ${new Date(
                                          setting.updated_at
                                        ).toLocaleString('vi-VN')}`
                                      : ''
                                  }`
                                : undefined
                            }
                            keyName={setting.key || ''}
                            filePath={getCurrentValue(setting)}
                            onFilePathChange={(filePath) =>
                              handleValueChange(setting.key || '', filePath)
                            }
                          />
                        ) : (
                          // Render Text Input or Textarea Field
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor={setting.key} className="text-base font-medium">
                                {setting.description || setting.key}
                              </Label>
                              <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                {setting.key}
                              </code>
                            </div>
                            {isTextarea ? (
                              <Textarea
                                id={setting.key}
                                value={getCurrentValue(setting)}
                                onChange={(e) =>
                                  handleValueChange(setting.key || '', e.target.value)
                                }
                                placeholder={`Nhập ${
                                  setting.description?.toLowerCase() || setting.key
                                }`}
                                rows={4}
                                className={
                                  editedValues[setting.key || ''] !== undefined
                                    ? 'border-primary'
                                    : ''
                                }
                              />
                            ) : (
                              <Input
                                id={setting.key}
                                value={getCurrentValue(setting)}
                                onChange={(e) =>
                                  handleValueChange(setting.key || '', e.target.value)
                                }
                                placeholder={`Nhập ${
                                  setting.description?.toLowerCase() || setting.key
                                }`}
                                className={
                                  editedValues[setting.key || ''] !== undefined
                                    ? 'border-primary'
                                    : ''
                                }
                              />
                            )}
                            {setting.data_type && (
                              <p className="text-xs text-muted-foreground">
                                Kiểu dữ liệu: {setting.data_type}
                                {setting.updated_at && (
                                  <>
                                    {' '}
                                    • Cập nhật:{' '}
                                    {new Date(setting.updated_at).toLocaleString('vi-VN')}
                                  </>
                                )}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* ── Loading Overlay ── */}
      {updateMutation.isPending && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="w-64">
            <CardContent className="pt-6 flex flex-col items-center gap-4">
              <RefreshCw className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm font-medium">Đang cập nhật...</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
