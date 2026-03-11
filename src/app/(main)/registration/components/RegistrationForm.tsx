"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { usePostApiV10PublicRegistration } from "@/api/endpoints/public";
import type { 
  PostApiV10PublicRegistrationBody,
  PostApiV10PublicRegistrationBodyAlumniStatus,
  PostApiV10PublicRegistrationBodyEnglishLevel,
  PostApiV10PublicRegistrationBodyGoalsItem,
  PostApiV10PublicRegistrationBodyFocusSkillsItem,
  PostApiV10PublicRegistrationBodyScholarshipReasonItem,
  PostApiV10PublicRegistrationBodyCommitteeParticipationItem,
} from "@/api/models";

const formSchema = z.object({
  companyName: z.string().min(1, "Vui lòng nhập tên công ty").max(200),
  companyAddress: z.string().min(1, "Vui lòng nhập địa chỉ").max(500),
  taxCode: z.string().min(1, "Vui lòng nhập MST").max(50),
  industry: z.string().min(1, "Vui lòng nhập ngành nghề").max(200),
  isVcciMember: z.string().min(1, "Vui lòng chọn"),
  memberCode: z.string().max(100).optional(),
  referralSource: z.string().max(500).optional(),
  fullName: z.string().min(1, "Vui lòng nhập họ tên").max(100),
  position: z.string().min(1, "Vui lòng nhập chức vụ").max(100),
  jobDescription: z.string().min(1, "Vui lòng nhập mô tả công việc").max(1000),
  previousStudent: z.string().min(1, "Vui lòng chọn"),
  successFailure: z.string().min(1, "Vui lòng nhập").max(2000),
  birthDate: z.string().min(1, "Vui lòng nhập ngày sinh"),
  mobile: z.string().min(1, "Vui lòng nhập số điện thoại").max(20),
  email: z.string().email("Email không hợp lệ").max(255),
  englishLevel: z.string().optional(),
  improveEnglish: z.string().optional(),
  commitAttendance: z.boolean().refine(val => val === true, "Bạn cần đồng ý cam kết này"),
  goals: z.array(z.string()).min(1, "Vui lòng chọn ít nhất 1"),
  skillsFocus: z.array(z.string()).min(1, "Vui lòng chọn ít nhất 1"),
  scholarshipReason: z.array(z.string()).min(1, "Vui lòng chọn ít nhất 1"),
  boardParticipation: z.array(z.string()).min(1, "Vui lòng chọn ít nhất 1"),
  commitRules: z.boolean().refine(val => val === true, "Bạn cần đồng ý"),
  commitCooperate: z.boolean().refine(val => val === true, "Bạn cần đồng ý"),
  commitShare: z.boolean().refine(val => val === true, "Bạn cần đồng ý"),
  commitGiveBack: z.boolean().refine(val => val === true, "Bạn cần đồng ý"),
  message: z.string().max(2000).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const previousStudentOptions = [
  "Tôi chưa tham gia chính thức lớp nào",
  "Tôi là học viên lớp CEO VCCI 2022",
  "Tôi là học viên lớp CEO VCCI 2023",
  "Tôi là học viên lớp CEO VCCI 2024 - K1",
  "Tôi là học viên lớp CEO VCCI 2024 - K2",
];

const goalOptions = [
  "Mục tiêu phát triển doanh nghiệp lên tầm cao mới với doanh thu, nhân sự, vận hành đột phá",
  "Muốn hệ thống hóa lại kiến thức, công ty càng phát triển thì càng thấy thiếu kiến thức",
  "Mong muốn được kết nối cộng đồng, học hỏi thêm từ các Giảng Viên, các học viên khác",
];

const skillOptions = [
  "Tư duy lãnh đạo",
  "Chiến lược, Kinh doanh",
  "Kinh doanh",
  "Nhân sự",
  "Tài chính",
];

const scholarshipReasonOptions = [
  "Mong muốn có cơ hội học tập để phát triển tập đoàn, công ty lớn mạnh và đầu tư ngược lại cho các bạn trẻ Khởi Nghiệp",
  "Tôi cầu thị muốn học hỏi bài bản vì tôi chỉ có kinh nghiệm thực tế",
  "Tôi muốn đóng góp vào sự phát triển chung của Cộng Đồng Doanh Nghiệp Việt Nam",
];

const boardOptions = [
  "Tham gia Ban Điều Hành",
  "Hậu cần",
  "Truyền thông, thiết kế",
  "MC, Văn nghệ",
  "Tài trợ",
  "Liên hệ, kết nối với các giảng viên",
];

// Mapping functions để convert form values sang API format
const mapPreviousStudentToAlumniStatus = (value: string): PostApiV10PublicRegistrationBodyAlumniStatus => {
  const mapping: Record<string, PostApiV10PublicRegistrationBodyAlumniStatus> = {
    "Tôi chưa tham gia chính thức lớp nào": "none",
    "Tôi là học viên lớp CEO VCCI 2022": "ceo_vcci_2022",
    "Tôi là học viên lớp CEO VCCI 2023": "ceo_vcci_2023",
    "Tôi là học viên lớp CEO VCCI 2024 - K1": "ceo_vcci_2024_k1",
    "Tôi là học viên lớp CEO VCCI 2024 - K2": "ceo_vcci_2024_k2",
  };
  return mapping[value] || "none";
};

const mapEnglishLevel = (value?: string): PostApiV10PublicRegistrationBodyEnglishLevel | undefined => {
  if (!value) return undefined;
  const mapping: Record<string, PostApiV10PublicRegistrationBodyEnglishLevel> = {
    "Tốt": "good",
    "Trung bình": "average",
    "Hạn chế": "limited",
  };
  return mapping[value];
};

const mapGoals = (values: string[]): PostApiV10PublicRegistrationBodyGoalsItem[] => {
  const mapping: Record<string, PostApiV10PublicRegistrationBodyGoalsItem> = {
    "Mục tiêu phát triển doanh nghiệp lên tầm cao mới với doanh thu, nhân sự, vận hành đột phá": "business_growth",
    "Muốn hệ thống hóa lại kiến thức, công ty càng phát triển thì càng thấy thiếu kiến thức": "knowledge_systematize",
    "Mong muốn được kết nối cộng đồng, học hỏi thêm từ các Giảng Viên, các học viên khác": "community_networking",
  };
  return values.map(v => mapping[v] || "other");
};

const mapSkills = (values: string[]): PostApiV10PublicRegistrationBodyFocusSkillsItem[] => {
  const mapping: Record<string, PostApiV10PublicRegistrationBodyFocusSkillsItem> = {
    "Tư duy lãnh đạo": "leadership",
    "Chiến lược, Kinh doanh": "strategy_business",
    "Kinh doanh": "business",
    "Nhân sự": "hr",
    "Tài chính": "finance",
  };
  return values.map(v => mapping[v] || "other");
};

const mapScholarshipReason = (values: string[]): PostApiV10PublicRegistrationBodyScholarshipReasonItem[] => {
  const mapping: Record<string, PostApiV10PublicRegistrationBodyScholarshipReasonItem> = {
    "Mong muốn có cơ hội học tập để phát triển tập đoàn, công ty lớn mạnh và đầu tư ngược lại cho các bạn trẻ Khởi Nghiệp": "invest_youth",
    "Tôi cầu thị muốn học hỏi bài bản vì tôi chỉ có kinh nghiệm thực tế": "practical_learning",
    "Tôi muốn đóng góp vào sự phát triển chung của Cộng Đồng Doanh Nghiệp Việt Nam": "community_contribution",
  };
  return values.map(v => mapping[v] || "other");
};

const mapBoardParticipation = (values: string[]): PostApiV10PublicRegistrationBodyCommitteeParticipationItem[] => {
  const mapping: Record<string, PostApiV10PublicRegistrationBodyCommitteeParticipationItem> = {
    "Tham gia Ban Điều Hành": "executive_board",
    "Hậu cần": "logistics",
    "Truyền thông, thiết kế": "communication_design",
    "MC, Văn nghệ": "mc_entertainment",
    "Tài trợ": "sponsorship",
    "Liên hệ, kết nối với các giảng viên": "lecturer_networking",
  };
  return values.map(v => mapping[v] || "other");
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3 mb-6 mt-10 first:mt-0">
    {children}
  </h4>
);

const CheckboxGroup = ({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string[];
  onChange: (val: string[]) => void;
}) => (
  <div className="space-y-4">
    {options.map((option) => (
      <label key={option} className="flex items-start gap-4 cursor-pointer group p-2 -ml-2 rounded-xl hover:bg-gray-50 transition-colors">
        <Checkbox
          checked={value.includes(option)}
          onCheckedChange={(checked) => {
            onChange(
              checked ? [...value, option] : value.filter((v) => v !== option)
            );
          }}
          className="mt-0.5 w-5 h-5 rounded-md"
        />
        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors leading-relaxed pt-0.5">
          {option}
        </span>
      </label>
    ))}
  </div>
);

export const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const { mutateAsync: submitRegistration, isPending: isSubmitting } = usePostApiV10PublicRegistration();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      companyAddress: "",
      taxCode: "",
      industry: "",
      isVcciMember: "",
      memberCode: "",
      referralSource: "",
      fullName: "",
      position: "",
      jobDescription: "",
      previousStudent: "",
      successFailure: "",
      birthDate: "",
      mobile: "",
      email: "",
      englishLevel: "",
      improveEnglish: "",
      commitAttendance: false,
      goals: [],
      skillsFocus: [],
      scholarshipReason: [],
      boardParticipation: [],
      commitRules: false,
      commitCooperate: false,
      commitShare: false,
      commitGiveBack: false,
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // Map form data to API format
      const apiData: PostApiV10PublicRegistrationBody = {
        company_name: data.companyName,
        company_address: data.companyAddress,
        tax_code: data.taxCode,
        industry: data.industry,
        vcci_membership: data.isVcciMember === "yes" ? "member" : "non_member",
        vcci_member_code: data.memberCode || undefined,
        referral_source: data.referralSource || undefined,
        full_name: data.fullName,
        current_position: data.position,
        job_description: data.jobDescription,
        alumni_status: mapPreviousStudentToAlumniStatus(data.previousStudent),
        achievements: data.successFailure,
        date_of_birth: data.birthDate,
        mobile: data.mobile,
        email: data.email,
        english_level: mapEnglishLevel(data.englishLevel),
        want_english_improvement: data.improveEnglish === "Có" ? true : data.improveEnglish === "Không" ? false : null,
        attendance_commitment: data.commitAttendance,
        goals: mapGoals(data.goals),
        focus_skills: mapSkills(data.skillsFocus),
        scholarship_reason: mapScholarshipReason(data.scholarshipReason),
        committee_participation: mapBoardParticipation(data.boardParticipation),
        commitment_rules: data.commitRules,
        commitment_cooperation: data.commitCooperate,
        commitment_sharing: data.commitShare,
        commitment_contribution: data.commitGiveBack,
        message_to_organizers: data.message || undefined,
        year: 2025,
      };

      await submitRegistration({ data: apiData });
      
      setSubmitted(true);
      toast({
        title: "Đăng ký thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Đăng ký thất bại",
        description: "Có lỗi xảy ra, vui lòng thử lại sau.",
        variant: "destructive",
      });
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-full"
      >
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={48} className="text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Đăng Ký Thành Công!</h3>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto">
          Cảm ơn bạn đã đăng ký chương trình CEO 4.0 - 2025.
          <br />
          Chúng tôi sẽ xem xét hồ sơ và liên hệ trong vòng 5 ngày làm việc.
        </p>
        <div className="flex items-center justify-center gap-4">
            <Button onClick={() => { setSubmitted(false); form.reset(); }} variant="outline" className="rounded-2xl px-6 py-6 font-semibold">
            Đăng ký thêm
            </Button>
            <Link href="/">
                <Button className="rounded-2xl px-6 py-6 font-semibold bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                Về trang chủ
                </Button>
            </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-6 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
        >
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Company Info */}
                <SectionTitle>Thông Tin Doanh Nghiệp</SectionTitle>

                <div className="grid md:grid-cols-2 gap-6">
                <FormField control={form.control} name="companyName" render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Tên công ty *</FormLabel>
                    <FormControl><Input className="h-12 rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500" placeholder="Nhập tên công ty" {...field} /></FormControl>
                    <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="taxCode" render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Mã số thuế (MST) *</FormLabel>
                    <FormControl><Input className="h-12 rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500" placeholder="Nhập MST" {...field} /></FormControl>
                    <FormMessage />
                    </FormItem>
                )} />
                </div>

                <FormField control={form.control} name="companyAddress" render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Địa chỉ công ty *</FormLabel>
                    <FormControl><Input className="h-12 rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500" placeholder="Nhập địa chỉ trụ sở chính" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )} />

                <FormField control={form.control} name="industry" render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Ngành nghề *</FormLabel>
                    <FormControl><Input className="h-12 rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500" placeholder="Nhập ngành nghề hoạt động" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )} />

                <FormField control={form.control} name="isVcciMember" render={({ field }) => (
                <FormItem className="space-y-4">
                    <FormLabel className="text-gray-900 font-semibold">Công ty bạn đã là Hội viên VCCI chưa? *</FormLabel>
                    <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-8">
                        <label className="flex items-center gap-3 cursor-pointer">
                        <RadioGroupItem value="yes" className="w-5 h-5" />
                        <span className="text-sm font-medium">Hội viên VCCI</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                        <RadioGroupItem value="no" className="w-5 h-5"/>
                        <span className="text-sm font-medium">Chưa gia nhập</span>
                        </label>
                    </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )} />

                {form.watch("isVcciMember") === "yes" && (
                <FormField control={form.control} name="memberCode" render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Mã số Hội Viên</FormLabel>
                    <FormControl><Input className="h-12 rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500" placeholder="Nhập mã số hội viên VCCI" {...field} /></FormControl>
                    <FormMessage />
                    </FormItem>
                )} />
                )}

                <FormField control={form.control} name="referralSource" render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Nguồn giới thiệu</FormLabel>
                    <FormControl><Input className="h-12 rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500" placeholder="Nguồn / Người / Hiệp hội giới thiệu (Nếu có)" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )} />

                {/* Personal Info */}
                <SectionTitle>Thông Tin Cá Nhân</SectionTitle>

                <div className="grid md:grid-cols-2 gap-6">
                <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Họ tên người đăng ký *</FormLabel>
                    <FormControl><Input className="h-12 rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500" placeholder="Nhập họ và tên đầy đủ" {...field} /></FormControl>
                    <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="position" render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Chức vụ hiện tại *</FormLabel>
                    <FormControl><Input className="h-12 rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500" placeholder="Tổng Giám Đốc, Giám Đốc..." {...field} /></FormControl>
                    <FormMessage />
                    </FormItem>
                )} />
                </div>

                <FormField control={form.control} name="jobDescription" render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Mô tả công việc *</FormLabel>
                    <FormControl><Textarea className="rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500 resize-none p-4" placeholder="Mở rộng công việc chính bạn đang đảm nhận" rows={4} {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )} />

                <FormField control={form.control} name="previousStudent" render={({ field }) => (
                <FormItem className="space-y-4">
                    <FormLabel className="text-gray-900 font-semibold">Bạn là cựu học viên các lớp CEO VCCI trước đây? *</FormLabel>
                    <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="space-y-4 mt-2">
                        {previousStudentOptions.map((opt) => (
                        <label key={opt} className="flex items-center gap-4 cursor-pointer p-2 -ml-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <RadioGroupItem value={opt} className="w-5 h-5"/>
                            <span className="text-sm font-medium">{opt}</span>
                        </label>
                        ))}
                    </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )} />

                <FormField control={form.control} name="successFailure" render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Thành công và thất bại lớn nhất của bạn *</FormLabel>
                    <FormControl><Textarea className="rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500 resize-none p-4" placeholder="Hãy chia sẻ ngắn gọn về những trải nghiệm đáng nhớ nhất trên con đường kinh doanh của bạn." rows={4} {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )} />

                <div className="grid md:grid-cols-3 gap-6">
                <FormField control={form.control} name="birthDate" render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Ngày sinh *</FormLabel>
                    <FormControl><Input className="h-12 rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500" type="date" {...field} /></FormControl>
                    <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="mobile" render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Số điện thoại *</FormLabel>
                    <FormControl><Input className="h-12 rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500" placeholder="0xxx xxx xxx" {...field} /></FormControl>
                    <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Email *</FormLabel>
                    <FormControl><Input className="h-12 rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500" type="email" placeholder="email@example.com" {...field} /></FormControl>
                    <FormMessage />
                    </FormItem>
                )} />
                </div>

                {/* English */}
                <SectionTitle>Trình Độ Anh Ngữ</SectionTitle>

                <div className="grid md:grid-cols-2 gap-8">
                <FormField control={form.control} name="englishLevel" render={({ field }) => (
                    <FormItem className="space-y-4">
                    <FormLabel className="text-gray-900 font-semibold">Trình độ Anh ngữ hiện tại</FormLabel>
                    <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-6">
                        {["Tốt", "Trung bình", "Hạn chế"].map((opt) => (
                            <label key={opt} className="flex items-center gap-3 cursor-pointer">
                            <RadioGroupItem value={opt} className="w-5 h-5"/>
                            <span className="text-sm font-medium">{opt}</span>
                            </label>
                        ))}
                        </RadioGroup>
                    </FormControl>
                    </FormItem>
                )} />
                <FormField control={form.control} name="improveEnglish" render={({ field }) => (
                    <FormItem className="space-y-4">
                    <FormLabel className="text-gray-900 font-semibold">Muốn cải thiện tiếng Anh?</FormLabel>
                    <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-6">
                        {["Có", "Không"].map((opt) => (
                            <label key={opt} className="flex items-center gap-3 cursor-pointer">
                            <RadioGroupItem value={opt} className="w-5 h-5"/>
                            <span className="text-sm font-medium">{opt}</span>
                            </label>
                        ))}
                        </RadioGroup>
                    </FormControl>
                    </FormItem>
                )} />
                </div>

                {/* Commitments & Goals */}
                <SectionTitle>Mục Tiêu & Cam Kết</SectionTitle>

                <FormField control={form.control} name="commitAttendance" render={({ field }) => (
                <FormItem>
                    <label className="flex items-start gap-4 cursor-pointer p-6 rounded-2xl bg-yellow-50/50 border border-yellow-100 hover:bg-yellow-50 transition-colors">
                    <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-1 w-5 h-5" />
                    </FormControl>
                    <span className="text-sm text-gray-700 leading-relaxed pt-0.5">
                        <strong>Cam kết học đầy đủ 70% khóa học</strong> và đóng sinh hoạt phí 3 triệu để trang trải chi phí chung: hội trường, teabreak, tài liệu, văn phòng phẩm, bồi dưỡng giảng viên… *
                    </span>
                    </label>
                    <FormMessage />
                </FormItem>
                )} />

                <FormField control={form.control} name="goals" render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-gray-900 font-semibold mb-3 block">Mục tiêu khi tham gia khóa học *</FormLabel>
                    <FormControl>
                    <CheckboxGroup options={goalOptions} value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )} />

                <FormField control={form.control} name="skillsFocus" render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-gray-900 font-semibold mb-3 block">Bạn muốn tập trung nâng cao kỹ năng/kiến thức nào? *</FormLabel>
                    <FormControl>
                    <CheckboxGroup options={skillOptions} value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )} />

                <FormField control={form.control} name="scholarshipReason" render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-gray-900 font-semibold mb-3 block">Lý do để chúng tôi chọn bạn cấp học bổng *</FormLabel>
                    <FormControl>
                    <CheckboxGroup options={scholarshipReasonOptions} value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )} />

                <FormField control={form.control} name="boardParticipation" render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-gray-900 font-semibold mb-3 block">Bạn sẵn sàng tham gia hỗ trợ hoạt động nào? *</FormLabel>
                    <FormControl>
                    <CheckboxGroup options={boardOptions} value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )} />

                {/* Final commitments */}
                <SectionTitle>Cam Kết Cuối Cùng</SectionTitle>

                <div className="space-y-4">
                {[
                    { name: "commitRules" as const, text: "Tôi cam kết đồng ý và tuân thủ các quy định của Lớp và Cộng Đồng CEO VCCI-HCM (Tôn trọng, hòa đồng, không gây chia rẽ, lôi kéo, đa cấp…)" },
                    { name: "commitCooperate" as const, text: "Tôi cam kết hợp tác và đồng hành cùng với các hoạt động (Tuân thủ theo các quy định, điều phối của Ban Điều Hành, hỗ trợ giúp đỡ các thành viên…)" },
                    { name: "commitShare" as const, text: "Tôi cam kết sẵn sàng chia sẻ và đồng hành với Cộng Đồng (Hiểu biết, kiến thức, workshop, kinh nghiệm thành công hoặc thất bại...)" },
                    { name: "commitGiveBack" as const, text: "Tôi sẵn sàng đáp đền tiếp nối cho Lớp và Cộng Đồng CEO VCCI-HCM (Tham gia Ban Điều Hành, kết nối giao thương, chia sẻ hoặc hỗ trợ talkshow, workshop…)" },
                ].map((item) => (
                    <FormField key={item.name} control={form.control} name={item.name} render={({ field }) => (
                    <FormItem>
                        <label className="flex items-start gap-4 cursor-pointer p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors">
                        <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-1 w-5 h-5 rounded" />
                        </FormControl>
                        <span className="text-sm text-gray-700 leading-relaxed font-medium pt-0.5">{item.text} *</span>
                        </label>
                        <FormMessage />
                    </FormItem>
                    )} />
                ))}
                </div>

                <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-gray-900 font-semibold">Nhắn nhủ với BTC</FormLabel>
                    <FormControl><Textarea className="rounded-xl bg-gray-50 border-transparent focus-visible:ring-yellow-500 resize-none p-4" placeholder="Bạn có muốn chia sẻ hoặc có câu hỏi gì thêm cho ban tổ chức không?" rows={4} {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )} />

                <div className="pt-6 border-t border-gray-100">
                    <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-2xl bg-yellow-500 text-gray-900 font-bold text-lg hover:bg-yellow-400 transition-all shadow-[0_8px_30px_rgb(234,179,8,0.2)] hover:shadow-[0_8px_30px_rgb(234,179,8,0.3)] flex items-center gap-3"
                    >
                    {isSubmitting ? (
                        <><Loader2 size={24} className="animate-spin" /> Đang xử lý hồ sơ...</>
                    ) : (
                        <><Send size={22} /> Gửi đăng ký</>
                    )}
                    </Button>
                    <p className="text-center text-xs text-gray-500 mt-4">Bằng việc nhấn Nộp Hồ Sơ, bạn xác nhận mọi thông tin trên là chính xác.</p>
                </div>
            </form>
            </Form>
        </motion.div>
    </div>
  );
};
