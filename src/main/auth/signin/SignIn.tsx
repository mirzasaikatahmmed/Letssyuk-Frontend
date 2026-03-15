
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

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
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { type LoginCredentials, type User, ROLE_DASHBOARDS } from "@/types/auth.types";

const defaultValues: LoginCredentials = {
  email: "",
  password: "",
};

const inputClassName = 
  "h-12 rounded-xl w-full border-[#1B314B] bg-[#0F172A]/60 text-base text-white placeholder:text-[#6A798F] focus-visible:ring-1 focus-visible:ring-[#00E5FF] focus-visible:border-[#00E5FF] transition-all duration-200";

interface ApiError {
  data?: {
    message?: string;
  };
}

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<LoginCredentials>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<LoginCredentials> = async (values) => {
    try {
      const response = await login(values).unwrap();
      
      if (response.success) {
        const token = response.data;
        const decoded = jwtDecode<User>(token);
        
        dispatch(setUser(response));
        toast.success(response.message || "Login successful");
        
        // Dynamic navigation based on role
        const redirectPath = ROLE_DASHBOARDS[decoded.role] || "/";
        navigate(redirectPath);
      }
    } catch (err: unknown) {
      const error = err as ApiError;
      toast.error(error?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-[500px] rounded-2xl md:rounded-3xl border border-white/10 bg-[#070B14]/90 p-6 sm:p-8 md:p-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <div className="flex flex-col items-center mb-6 md:mb-8">
        <div className="flex items-center justify-center size-14 md:size-16 rounded-2xl bg-[#0F172A] border border-[#1B314B] mb-4 md:mb-6 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
          <LogIn className="size-7 md:size-8 text-[#00E5FF]" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 text-center">Welcome Back</h1>
        <p className="text-[#B7BFCD] text-base md:text-lg text-center">Sign in to your sports analytics account</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-[#E7EAF0] text-base font-normal">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
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

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                className="size-5 border-white/20 data-[state=checked]:bg-[#00E5FF] data-[state=checked]:border-[#00E5FF]"
              />
              <label 
                htmlFor="remember" 
                className="text-[#D8DEE9] text-base font-normal cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <Link 
              to="/auth/forgot-password" 
              className="text-[#00E5FF] hover:underline decoration-2 underline-offset-4 text-base font-medium"
            >
              Forgot password??
            </Link>
          </div>

          {/* Submit Button */}
          <AuthButton
            type="submit"
            isLoading={isLoading}
            label="Sign In"
            loadingLabel="Signing in..."
            icon={LogIn}
            className="mt-4"
          />

          {/* Sign Up Link */}
          <div className="pt-2 text-center">
            <p className="text-[#B7BFCD] text-base font-normal">
              Don't have an account?{" "}
              <Link to="/auth/sign-up" className="text-[#00E5FF] font-semibold hover:underline decoration-2 underline-offset-4 ml-1">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
