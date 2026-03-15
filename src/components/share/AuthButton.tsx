import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
  loadingLabel?: string;
  icon?: LucideIcon;
  className?: string;
}

const AuthButton = ({
  label,
  isLoading,
  loadingLabel,
  icon: Icon,
  className,
  disabled,
  ...props
}: AuthButtonProps) => {
  return (
    <Button
      disabled={isLoading || disabled}
      className={cn(
        "w-full h-14 bg-[#00E5FF] text-[#001A1F] hover:bg-[#00B8CC] hover:cursor-pointer rounded-xl text-lg font-bold transition-all duration-300 shadow-[0_8px_20px_rgba(0,229,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          {loadingLabel || "Processing..."}
        </span>
      ) : (
        <div className="flex items-center justify-center gap-2">
          {Icon && <Icon className="size-5" />}
          {label}
        </div>
      )}
    </Button>
  );
};

export default AuthButton;
