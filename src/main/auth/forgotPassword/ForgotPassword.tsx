import { Link, useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AuthButton from "@/components/share/AuthButton";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import type { ForgotPasswordCredentials } from "@/types/auth.types";

const inputClassName =
  "h-12 rounded-xl w-full border-[#1B314B] bg-[#0F172A]/60 text-base text-white placeholder:text-[#6A798F] focus-visible:ring-1 focus-visible:ring-[#00E5FF] focus-visible:border-[#00E5FF] transition-all duration-200";

interface ApiError {
  data?: {
    message?: string;
  };
}

const ForgotPassword = () => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const navigate = useNavigate();

  const form = useForm<ForgotPasswordCredentials>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<ForgotPasswordCredentials> = async (values) => {
    try {
      const response = await forgotPassword(values).unwrap();
      if (response.success) {
        toast.success(response.message || "OTP sent to your email");
        navigate("/auth/verify-otp", { 
          state: { 
            email: values.email, 
            type: "RESET_PASSWORD" 
          } 
        });
      }
    } catch (err: unknown) {
      const error = err as ApiError;
      toast.error(error?.data?.message || "Failed to send reset code. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-[500px] rounded-2xl md:rounded-3xl border border-white/10 bg-[#070B14]/90 p-6 sm:p-8 md:p-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <Link
        to="/auth/sign-in"
        className="inline-flex items-center gap-2 text-[#95A4BA] hover:text-white transition-colors mb-6 md:mb-8 text-sm md:text-base font-medium"
      >
        <ChevronLeft className="size-4 md:size-5" />
        Back to Login
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Forgot Password?
        </h1>
        <p className="text-[#B7BFCD] text-base md:text-lg leading-relaxed max-w-[360px] mx-auto">
          No worries! Enter your email and we'll send you a reset link.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-[#E7EAF0] text-base font-normal">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className={inputClassName}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-sm" />
              </FormItem>
            )}
          />

          <AuthButton
            type="submit"
            isLoading={isLoading}
            label="Send OTP"
            loadingLabel="Sending..."
            className="mt-2"
          />
        </form>
      </Form>
    </div>
  );
};

export default ForgotPassword;

