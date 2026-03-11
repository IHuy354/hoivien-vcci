/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export interface ForgotPasswordVerifyOtpRequest {
  email: string;
  /** 6-digit OTP */
  otp: string;
}
