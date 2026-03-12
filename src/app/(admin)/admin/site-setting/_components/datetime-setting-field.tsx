'use client';

import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format, parse, isValid } from 'date-fns';
import { vi } from 'date-fns/locale';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface DateTimeSettingFieldProps {
  label: string;
  description?: string;
  keyName: string;
  value: string; // ISO string or formatted string
  onChange: (value: string) => void;
}

export function DateTimeSettingField({
  label,
  description,
  keyName,
  value,
  onChange,
}: DateTimeSettingFieldProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeValue, setTimeValue] = useState<string>('00:00');

  // Parse initial value
  useEffect(() => {
    if (!value) {
      setDate(undefined);
      setTimeValue('00:00');
      return;
    }

    // Try parsing as ISO string first
    let parsedDate = new Date(value);
    
    // If not valid, try DD/MM/YYYY HH:mm format
    if (!isValid(parsedDate)) {
      parsedDate = parse(value, 'dd/MM/yyyy HH:mm', new Date(), { locale: vi });
    }

    if (isValid(parsedDate)) {
      setDate(parsedDate);
      setTimeValue(format(parsedDate, 'HH:mm'));
    }
  }, [value]);

  // Update parent when date or time changes
  const updateValue = (newDate: Date | undefined, newTime: string) => {
    if (!newDate) {
      onChange('');
      return;
    }

    // Parse time
    const [hours, minutes] = newTime.split(':').map(Number);
    
    // Create new date with time
    const combined = new Date(newDate);
    combined.setHours(hours || 0);
    combined.setMinutes(minutes || 0);
    combined.setSeconds(0);
    combined.setMilliseconds(0);

    // Format as DD/MM/YYYY HH:mm for storage
    const formatted = format(combined, 'dd/MM/yyyy HH:mm', { locale: vi });
    onChange(formatted);
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    updateValue(selectedDate, timeValue);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    setTimeValue(newTime);
    if (date) {
      updateValue(date, newTime);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={keyName} className="text-base font-medium">
          {label}
        </Label>
        <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
          {keyName}
        </code>
      </div>

      <div className="flex gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-[240px] justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, 'dd/MM/yyyy', { locale: vi }) : <span>Chọn ngày</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              locale={vi}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <div className="flex items-center gap-2">
          <Input
            type="time"
            id={`${keyName}-time`}
            value={timeValue}
            onChange={handleTimeChange}
            className="w-[140px]"
            disabled={!date}
          />
        </div>
      </div>

      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}

      {date && (
        <p className="text-xs text-muted-foreground">
          Giá trị: {format(date, 'dd/MM/yyyy', { locale: vi })} {timeValue}
        </p>
      )}
    </div>
  );
}
