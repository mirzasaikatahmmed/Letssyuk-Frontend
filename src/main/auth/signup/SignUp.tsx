
import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSignupMutation } from "@/redux/features/auth/authApi";
import type { SignupCredentials, SignupRole } from "@/types/auth.types";

interface SignUpFormValues {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: SignupRole;
  isUnder18: boolean;
}

const defaultValues: SignUpFormValues = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  role: "AGENT",
  isUnder18: false,
};

const inputClassName = 
  "h-12 rounded-xl w-full border-[#1B314B] bg-[#0F172A]/60 text-base text-white placeholder:text-[#6A798F] focus-visible:ring-1 focus-visible:ring-[#00E5FF] focus-visible:border-[#00E5FF] transition-all duration-200";

interface ApiError {
  data?: {
    message?: string;
  };
}

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signup, { isLoading }] = useSignupMutation();

  const form = useForm<SignUpFormValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = async (values) => {
    if (values.password !== values.confirmPassword) {
      form.setError("confirmPassword", { message: "Passwords do not match" });
      return;
    }

    const payload: SignupCredentials = {
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      password: values.password,
      role: values.role,
    };

    try {
      const response = await signup(payload).unwrap();
      const successMessage = response.data || response.message || "Account created successfully";
      toast.success(successMessage);
      form.reset(defaultValues);
    } catch (err: unknown) {
      const error = err as ApiError;
      toast.error(error?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-[500px] rounded-3xl border border-white/10 bg-[#070B14]/90 p-8 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl md:p-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Create Account</h1>
        <p className="text-[#B7BFCD] text-lg">Join our sports analytics platform</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            rules={{ required: "Full name is required" }}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-[#E7EAF0] text-base font-normal">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    className={inputClassName}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-sm" />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Email Address */}
            <FormField
              control={form.control}
              name="email"
              rules={{ 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-[#E7EAF0] text-base font-normal">Email Address</FormLabel>
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

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phone"
              rules={{ required: "Phone number is required" }}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-[#E7EAF0] text-base font-normal">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="01700000000"
                      className={inputClassName}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-sm" />
                </FormItem>
              )}
            />
          </div>

          {/* Role Selection */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-[#E7EAF0] text-base font-normal">I am joining as a</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className={inputClassName}>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#0F172A] border-white/10 text-white">
                    <SelectItem value="AGENT">Agent</SelectItem>
                    <SelectItem value="PLAYER">Player</SelectItem>
                    <SelectItem value="CLUB">Club</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            rules={{ 
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters required" }
            }}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-[#E7EAF0] text-base font-normal">Password</FormLabel>
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

          {/* Repeat Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            rules={{ required: "Please confirm your password" }}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-[#E7EAF0] text-base font-normal">Repeat Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Repeat your password"
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

          {/* Age Checkbox */}
          <FormField
            control={form.control}
            name="isUnder18"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 pt-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="size-5 border-white/20 data-[state=checked]:bg-[#00E5FF] data-[state=checked]:border-[#00E5FF]"
                  />
                </FormControl>
                <FormLabel className="text-[#D8DEE9] text-base font-normal cursor-pointer">
                  I am below 18 years old
                </FormLabel>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-14 mt-4 bg-[#00E5FF] text-[#001A1F] hover:bg-[#00B8CC] rounded-xl text-lg font-bold transition-all duration-300 shadow-[0_8px_20px_rgba(0,229,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating Account..." : "Send me Email"}
          </Button>

          {/* Sign In Link */}
          <div className="pt-4 text-center">
            <p className="text-[#B7BFCD] text-base font-normal">
              Already have an account?{" "}
              <Link to="/auth/sign-in" className="text-[#00E5FF] font-semibold hover:underline decoration-2 underline-offset-4 ml-1">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
