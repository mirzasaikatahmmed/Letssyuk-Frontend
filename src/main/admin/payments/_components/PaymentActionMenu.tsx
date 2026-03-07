import { useState, useRef, useEffect } from "react";
import { MoreVertical, Eye, RefreshCw, XCircle } from "lucide-react";

interface PaymentActionMenuProps {
  onView?: () => void;
  onRefund?: () => void;
  onVoid?: () => void;
}

const PaymentActionMenu = ({
  onView,
  onRefund,
  onVoid,
}: PaymentActionMenuProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-1.5 rounded-lg text-gray-500 hover:text-gray-300 hover:bg-white/6 transition-colors"
      >
        <MoreVertical className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 top-8 z-50 w-44 bg-[#161921] border border-white/8 rounded-xl shadow-xl overflow-hidden">
          <button
            onClick={() => {
              onView?.();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>
          <button
            onClick={() => {
              onRefund?.();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-amber-400 hover:bg-amber-500/10 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refund
          </button>
          <button
            onClick={() => {
              onVoid?.();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <XCircle className="w-4 h-4" />
            Void
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentActionMenu;
