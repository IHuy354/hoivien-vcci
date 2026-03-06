/* eslint-disable */
import type { RegistrationMutateGoals } from './registrationMutateGoals';
import type { RegistrationMutateFocusSkills } from './registrationMutateFocusSkills';
import type { RegistrationMutateScholarshipReason } from './registrationMutateScholarshipReason';
import type { RegistrationMutateCommitteeParticipation } from './registrationMutateCommitteeParticipation';

export interface RegistrationMutate {
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
  goals?: RegistrationMutateGoals;
  focus_skills?: RegistrationMutateFocusSkills;
  scholarship_reason?: RegistrationMutateScholarshipReason;
  committee_participation?: RegistrationMutateCommitteeParticipation;
  commitment_rules?: boolean;
  commitment_cooperation?: boolean;
  commitment_sharing?: boolean;
  commitment_contribution?: boolean;
  message_to_organizers?: string;
  status?: string;
  admin_notes?: string;
  year?: number;
}
