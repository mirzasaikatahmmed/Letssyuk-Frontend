
import { Link, useNavigate, useLocation } from "react-router";
import { ShieldCheck } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import AuthButton from "@/components/share/AuthButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useVerifyOtpMutation, useGenerateOtpMutation } from "@/redux/features/auth/authApi";

interface VerifyOtpFormValues {
  code: string;
}

interface ApiError {
  data?: {
    message?: string;
  };
}

const VerifyOtp = () => {
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const [generateOtp, { isLoading: isResending }] = useGenerateOtpMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const type = location.state?.type || "EMAIL_VERIFY";

  const form = useForm<VerifyOtpFormValues>({
    defaultValues: {
      code: "",
    },
  });

  const onSubmit: SubmitHandler<VerifyOtpFormValues> = async (values) => {
    if (!email) {
      toast.error("Email not found. Please try again.");
      return;
    }

    try {
      const response = await verifyOtp({
        email,
        code: values.code,
        type: type,
      }).unwrap();

      if (response.success) {
        toast.success(response.message || "Verification successful");
        if (type === "RESET_PASSWORD") {
          navigate("/auth/reset-password", { 
            state: { 
              email, 
              token: response.data
            } 
          });
        } else {
          navigate("/auth/sign-in");
        }
      }
    } catch (err: unknown) {

      const error = err as ApiError;
      toast.error(error?.data?.message || "Verification failed. Please check the code.");
    }
  };

  return (
    <div className="w-full max-w-[500px] rounded-2xl md:rounded-3xl border border-white/10 bg-[#070B14]/90 p-6 sm:p-8 md:p-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl text-center">
      <div className="flex flex-col items-center mb-6 md:mb-8">
        <div className="flex items-center justify-center size-14 md:size-16 rounded-2xl bg-[#0F172A] border border-[#1B314B] mb-4 md:mb-6 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
          <ShieldCheck className="size-7 md:size-8 text-[#00E5FF]" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Check your email</h1>
        <p className="text-[#B7BFCD] text-base md:text-lg">
          We've sent a code to <span className="text-white font-medium">{email || "your email"}</span>
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center">
          <FormField
            control={form.control}
            name="code"
            rules={{
              required: "Verification code is required",
              minLength: { value: 6, message: "Code must be 6 digits" }
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Verification Code</FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    {...field}
                    className="gap-2"
                  >
                    <InputOTPGroup className="gap-1 sm:gap-2">
                      <InputOTPSlot index={0} className="size-10 sm:size-12 md:size-14 text-lg md:text-xl rounded-xl border-[#1B314B] bg-[#0F172A]/60 text-white focus-visible:ring-1 focus-visible:ring-[#00E5FF]" />
                      <InputOTPSlot index={1} className="size-10 sm:size-12 md:size-14 text-lg md:text-xl rounded-xl border-[#1B314B] bg-[#0F172A]/60 text-white" />
                      <InputOTPSlot index={2} className="size-10 sm:size-12 md:size-14 text-lg md:text-xl rounded-xl border-[#1B314B] bg-[#0F172A]/60 text-white" />
                      <InputOTPSlot index={3} className="size-10 sm:size-12 md:size-14 text-lg md:text-xl rounded-xl border-[#1B314B] bg-[#0F172A]/60 text-white" />
                      <InputOTPSlot index={4} className="size-10 sm:size-12 md:size-14 text-lg md:text-xl rounded-xl border-[#1B314B] bg-[#0F172A]/60 text-white" />
                      <InputOTPSlot index={5} className="size-10 sm:size-12 md:size-14 text-lg md:text-xl rounded-xl border-[#1B314B] bg-[#0F172A]/60 text-white" />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage className="text-red-400 text-sm" />
              </FormItem>
            )}
          />

          <AuthButton
            type="submit"
            isLoading={isLoading}
            label="Verify OTP"
            loadingLabel="Verifying..."
            icon={ShieldCheck}
          />

          <div className="pt-2 text-center">
            <p className="text-[#B7BFCD] text-base font-normal">
              Didn't receive the code?{" "}
              <button
                type="button"
                disabled={isResending}
                className="text-[#00E5FF] font-semibold hover:underline decoration-2 underline-offset-4 ml-1 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={async () => {
                  try {
                    const response = await generateOtp({ email, type }).unwrap();
                    if (response.success) {
                      toast.success(response.message || "OTP sent successfully");
                    }
                  } catch (err: unknown) {
                    const error = err as ApiError;
                    toast.error(error?.data?.message || "Failed to resend OTP. Please try again.");
                  }
                }}
              >
                {isResending ? "Sending..." : "Resend Code"}
              </button>
            </p>
          </div>

          <Link
            to="/auth/sign-up"
            className="text-[#95A4BA] hover:text-white transition-colors text-base"
          >
            ← Back to Sign Up
          </Link>
        </form>
      </Form>
    </div>
  );
};

export default VerifyOtp;
