import { useState } from "react";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showHome?: boolean;
}

const Error = ({
  title = "Something went wrong",
  message = "We encountered an error while processing your request. Please try again or contact support if the issue persists.",
  onRetry,
  showHome = true,
}: ErrorProps) => {
  const navigate = useNavigate();
  const [errorId] = useState(() => 
    Math.random().toString(36).substring(7).toUpperCase()
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-8 text-center animate-in fade-in zoom-in duration-300">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full" />
        <div className="relative p-6 bg-[#161616] border border-red-500/20 rounded-2xl shadow-2xl">
          <AlertTriangle className="text-red-500 w-12 h-12" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
        {title}
      </h2>
      
      <p className="text-gray-400 text-sm max-w-md mb-8 leading-relaxed">
        {message}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        {onRetry && (
          <Button 
            onClick={onRetry}
            className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 px-8 py-6 h-auto rounded-xl flex items-center gap-2 transition-all active:scale-95"
          >
            <RefreshCcw size={18} />
            Try Again
          </Button>
        )}
        
        {showHome && (
          <Button 
            variant="outline"
            onClick={() => navigate("/")}
            className="border-gray-800 text-gray-400 hover:bg-gray-800/50 px-8 py-6 h-auto rounded-xl flex items-center gap-2 transition-all active:scale-95"
          >
            <Home size={18} />
            Back to Home
          </Button>
        )}
      </div>
      
      {errorId && (
        <div className="mt-12 pt-8 border-t border-gray-800/50 w-full max-w-sm">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-medium">
            System Error ID: {errorId}
          </p>
        </div>
      )}
    </div>
  );
};

export default Error;