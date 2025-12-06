"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function OTPVerificationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contact = searchParams.get("contact") || "";
  const type = searchParams.get("type") || "email";
  const role = searchParams.get("role") || "employee";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(30);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);

  const handleVerify = async () => {
    if (otp.length !== 6) return;
    
    setLoading(true);
    // Simulate verification
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setVerified(true);

    // Navigate to appropriate dashboard after short delay
    setTimeout(() => {
      if (role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/employee/dashboard");
      }
    }, 1000);
  };

  const handleResend = async () => {
    setResendCountdown(30);
    // Simulate resend
    await new Promise((resolve) => setTimeout(resolve, 500));
  };

  return (
    <Card className="w-full max-w-md shadow-2xl">
      <CardHeader className="space-y-3">
        <Button
          variant="ghost"
          size="sm"
          className="w-fit -ml-2"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <CardTitle className="text-2xl">Verify OTP</CardTitle>
        <CardDescription>
          Enter the 6-digit code sent to {type === "email" ? "your email" : "your phone"}
          <br />
          <span className="font-medium text-foreground">{contact}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {verified ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">Verification Successful!</h3>
              <p className="text-sm text-muted-foreground">Redirecting to your dashboard...</p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={setOtp}
                onComplete={handleVerify}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button
              onClick={handleVerify}
              disabled={otp.length !== 6 || loading}
              className="w-full h-11"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </Button>

            <div className="text-center space-y-2">
              {resendCountdown > 0 ? (
                <p className="text-sm text-muted-foreground">
                  Resend OTP in {resendCountdown}s
                </p>
              ) : (
                <Button variant="link" onClick={handleResend} className="text-sm">
                  Resend OTP
                </Button>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
