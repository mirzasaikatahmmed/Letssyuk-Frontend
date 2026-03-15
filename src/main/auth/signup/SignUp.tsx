
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Upload } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import AuthButton from "@/components/share/AuthButton";
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
import type { SignupRole } from "@/types/auth.types";
import { SIGNUP_ROLES } from "@/types/auth.types";

interface SignUpFormValues {
  fullName: string;
  email: string;
  phone: string;
  role: SignupRole;
  password: string;
  confirmPassword: string;
  belowEighteen: boolean;
  image: File | null;
}

const defaultValues: SignUpFormValues = {
  fullName: "",
  email: "",
  phone: "",
  role: "AGENT",
  password: "",
  confirmPassword: "",
  belowEighteen: false,
  image: null,
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
  const navigate = useNavigate();

  const form = useForm<SignUpFormValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = async (values) => {
    if (values.password !== values.confirmPassword) {
      form.setError("confirmPassword", { message: "Passwords do not match" });
      return;
    }

    if (!values.image) {
      toast.error("Please upload an ID document");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("password", values.password);
    formData.append("role", values.role);
    formData.append("belowEighteen", String(values.belowEighteen));
    formData.append("image", values.image);

    try {
      const response = await signup(formData).unwrap();
      if (response.success) {
        toast.success(response.data || "Email sent successfully, please verify your email");
        navigate("/auth/verify-otp", { state: { email: values.email } });
      }
    } catch (err: unknown) {
      const error = err as ApiError;
      toast.error(error?.data?.message || "Signup failed. Please try again.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
    const file = e.target.files?.[0];
    if (file) {
      field.onChange(file);
    }
  };

  return (
    <div className="w-full max-w-[500px] rounded-2xl md:rounded-3xl border border-white/10 bg-[#070B14]/90 p-6 sm:p-8 md:p-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Create Account</h1>
        <p className="text-[#B7BFCD] text-base md:text-lg">Join our sports analytics platform</p>
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
                    placeholder="Enter your phone number"
                    className={inputClassName}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-sm" />
              </FormItem>
            )}
          />

          {/* Role Selection */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-[#E7EAF0] text-base font-normal">I am joining as a</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={inputClassName}>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#0F172A] border-white/10 text-white">
                    {SIGNUP_ROLES.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400 text-sm" />
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
            name="belowEighteen"
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
                  I am below 18 years old Player
                </FormLabel>
              </FormItem>
            )}
          />

          {/* Image Upload Box */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <div
                  className="border border-[#1B314B] bg-[#0F172A]/40 rounded-2xl p-6"
                >
                  <p className="text-[#E7EAF0] text-base font-medium mb-1">
                    Upload ID document (Passport / School ID)
                  </p>
                  <p className="text-[#6A798F] text-sm mb-4">
                    Required for age verification
                  </p>

                  <label
                    className="flex items-center justify-center gap-2 w-full h-12 rounded-xl border border-[#00E5FF] bg-transparent text-[#00E5FF] font-semibold cursor-pointer hover:bg-[#00E5FF]/10 transition-colors"
                  >
                    <Upload className="size-5" />
                    {field.value ? field.value.name : "Click to upload document"}
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, field)}
                    />
                  </label>
                </div>
                <FormMessage className="text-red-400 text-sm" />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <AuthButton
            type="submit"
            isLoading={isLoading}
            label="Verify E-mail"
            loadingLabel="Processing..."
            className="mt-4"
          />

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
