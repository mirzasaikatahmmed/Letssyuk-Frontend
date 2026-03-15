import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Eye, EyeOff, Mail } from "lucide-react";
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
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";

const inputClassName =
  "h-12 rounded-xl w-full border-[#1B314B] bg-[#0F172A]/60 text-base text-white placeholder:text-[#6A798F] focus-visible:ring-1 focus-visible:ring-[#00E5FF] focus-visible:border-[#00E5FF] transition-all duration-200";

interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

interface ApiError {
  data?: {
    message?: string;
  };
}

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const navigate = useNavigate();
  const location = useLocation();
  
  const token = location.state?.token || "";

  const form = useForm<ResetPasswordFormValues>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<ResetPasswordFormValues> = async (values) => {
    if (values.password !== values.confirmPassword) {
      form.setError("confirmPassword", { message: "Passwords do not match" });
      return;
    }

    if (!token) {
      toast.error("Reset token missing. Please start the process again.");
      navigate("/auth/forgot-password");
      return;
    }

    try {
      const response = await resetPassword({
        token: token,
        password: values.password,
      }).unwrap();

      if (response.success) {
        toast.success(response.message || "Password reset successfully");
        navigate("/auth/sign-in");
      }
    } catch (err: unknown) {
      const error = err as ApiError;
      toast.error(error?.data?.message || "Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-[500px] rounded-2xl md:rounded-3xl border border-white/10 bg-[#070B14]/90 p-6 sm:p-8 md:p-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center justify-center size-20 rounded-full bg-[#0F172A] border border-[#1B314B] mb-6 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
          <div className="size-12 rounded-full bg-[#00E5FF]/10 flex items-center justify-center">
            <Mail className="size-6 text-[#00E5FF]" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 text-center">
          Set New Password
        </h1>
        <p className="text-[#B7BFCD] text-base md:text-lg text-center max-w-[320px]">
          Please choose a secure password for your account.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* New Password */}
          <FormField
            control={form.control}
            name="password"
            rules={{
              required: "Password is required",
              minLength: { value: 8, message: "Minimum 8 characters required" }
            }}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-[#E7EAF0] text-base font-normal">New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className={inputClassName}
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#95A4BA] hover:text-white transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className="text-red-400 text-sm" />
              </FormItem>
            )}
          />

          {/* Confirm New Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            rules={{ required: "Please confirm your password" }}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-[#E7EAF0] text-base font-normal">Confirm New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className={inputClassName}
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#95A4BA] hover:text-white transition-colors"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className="text-red-400 text-sm" />
              </FormItem>
            )}
          />

          <AuthButton
            type="submit"
            isLoading={isLoading}
            label="Update Password"
            loadingLabel="Updating..."
            className="mt-2"
          />

          <p className="text-[#6A798F] text-sm text-center leading-relaxed">
            Choose a strong password with at least 8 characters, including numbers and symbols.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default ResetPassword;
