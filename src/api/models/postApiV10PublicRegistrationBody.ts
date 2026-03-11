/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { PostApiV10PublicRegistrationBodyVcciMembership } from './postApiV10PublicRegistrationBodyVcciMembership';
import type { PostApiV10PublicRegistrationBodyAlumniStatus } from './postApiV10PublicRegistrationBodyAlumniStatus';
import type { PostApiV10PublicRegistrationBodyEnglishLevel } from './postApiV10PublicRegistrationBodyEnglishLevel';
import type { PostApiV10PublicRegistrationBodyGoalsItem } from './postApiV10PublicRegistrationBodyGoalsItem';
import type { PostApiV10PublicRegistrationBodyFocusSkillsItem } from './postApiV10PublicRegistrationBodyFocusSkillsItem';
import type { PostApiV10PublicRegistrationBodyScholarshipReasonItem } from './postApiV10PublicRegistrationBodyScholarshipReasonItem';
import type { PostApiV10PublicRegistrationBodyCommitteeParticipationItem } from './postApiV10PublicRegistrationBodyCommitteeParticipationItem';

export type PostApiV10PublicRegistrationBody = {
  /** @maxLength 255 */
  company_name: string;
  company_address: string;
  /** @pattern ^[0-9]{10,13}$ */
  tax_code: string;
  /** @maxLength 255 */
  industry: string;
  vcci_membership: PostApiV10PublicRegistrationBodyVcciMembership;
  /**
   * Required if vcci_membership == member
   * @maxLength 50
   */
  vcci_member_code?: string;
  /** @maxLength 500 */
  referral_source?: string;
  /** @maxLength 255 */
  full_name: string;
  /** @maxLength 255 */
  current_position: string;
  job_description: string;
  alumni_status: PostApiV10PublicRegistrationBodyAlumniStatus;
  achievements: string;
  date_of_birth: string;
  mobile: string;
  /** @maxLength 255 */
  email: string;
  /** @nullable */
  english_level?: PostApiV10PublicRegistrationBodyEnglishLevel;
  /** @nullable */
  want_english_improvement?: boolean | null;
  attendance_commitment: boolean;
  /** @minItems 1 */
  goals: PostApiV10PublicRegistrationBodyGoalsItem[];
  /** @minItems 1 */
  focus_skills: PostApiV10PublicRegistrationBodyFocusSkillsItem[];
  /** @minItems 1 */
  scholarship_reason: PostApiV10PublicRegistrationBodyScholarshipReasonItem[];
  /** @minItems 1 */
  committee_participation: PostApiV10PublicRegistrationBodyCommitteeParticipationItem[];
  commitment_rules: boolean;
  commitment_cooperation: boolean;
  commitment_sharing: boolean;
  commitment_contribution: boolean;
  /** @maxLength 5000 */
  message_to_organizers?: string;
  year?: number;
};
