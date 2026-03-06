/* eslint-disable */
import type { RegistrationGoals } from './registrationGoals';
import type { RegistrationFocusSkills } from './registrationFocusSkills';
import type { RegistrationScholarshipReason } from './registrationScholarshipReason';
import type { RegistrationCommitteeParticipation } from './registrationCommitteeParticipation';

export interface Registration {
  id?: string;
  company_name?: string;
  company_address?: string;
  tax_code?: string;
  industry?: string;
  vcci_membership?: string;
  vcci_member_code?: string;
  referral_source?: string;
  full_name?: string;
  current_position?: string;
  job_description?: string;
  alumni_status?: string;
  achievements?: string;
  date_of_birth?: string;
  mobile?: string;
  email?: string;
  english_level?: string;
  want_english_improvement?: boolean;
  attendance_commitment?: boolean;
  goals?: RegistrationGoals;
  focus_skills?: RegistrationFocusSkills;
  scholarship_reason?: RegistrationScholarshipReason;
  committee_participation?: RegistrationCommitteeParticipation;
  commitment_rules?: boolean;
  commitment_cooperation?: boolean;
  commitment_sharing?: boolean;
  commitment_contribution?: boolean;
  message_to_organizers?: string;
  status?: string;
  admin_notes?: string;
  year?: number;
  created_at?: string;
  updated_at?: string;
  updated_by?: string;
}
