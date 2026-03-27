import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CheckCircle2 } from "lucide-react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      const token = Cookies.get("accessToken");
      let dashPath = "/auth/sign-in";

      if (token) {
        try {
          const decoded: any = jwtDecode(token);
          const role = decoded.role;
          
          if (role === "AGENT") dashPath = "/agent/dashboard/overview";
          else if (role === "CLUB") dashPath = "/club/dashboard/overview";
          else if (role === "ATHLETE") dashPath = "/player/dashboard/overview";
        } catch (err) {
          console.error("Failed to decode token", err);
        }
      }

      navigate(dashPath);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#070B14] flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#4FD1C5]/20 blur-[60px] rounded-full scale-150" />
        <div className="relative size-24 bg-[#0A1121] border-2 border-[#4FD1C5] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(79,209,197,0.3)] animate-pulse">
          <CheckCircle2 className="size-12 text-[#4FD1C5]" />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
        Payment <span className="text-[#4FD1C5]">Successful!</span>
      </h1>
      
      <p className="text-[#B7BFCD] text-lg max-w-md mb-8 leading-relaxed">
        Your subscription has been activated. Welcome to the elite tier of scouting operations.
      </p>

      <div className="flex flex-col items-center gap-4">
        <p className="text-[#6A798F] text-sm font-medium tracking-widest uppercase">
          Redirecting to dashboard in <span className="text-white font-bold">{countdown}s</span>
        </p>
        
        <button 
          onClick={() => {
            const token = Cookies.get("accessToken");
            let p = "/player/dashboard/overview";
            if (token) {
               const dec: any = jwtDecode(token);
               if (dec.role === "AGENT") p = "/agent/dashboard/overview";
               if (dec.role === "CLUB") p = "/club/dashboard/overview";
            }
            navigate(p);
          }}
          className="px-8 h-12 bg-white text-slate-950 font-bold rounded-xl hover:scale-105 transition-all shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
        >
          Go to Dashboard Now
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
