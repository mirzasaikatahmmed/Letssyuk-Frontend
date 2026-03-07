type PaymentStatus = "Paid" | "Active" | "Failed" | "Refunded";

const statusStyles: Record<PaymentStatus, string> = {
  Paid: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/25",
  Active: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/25",
  Failed: "bg-red-500/15 text-red-400 border border-red-500/25",
  Refunded: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
};

interface PaymentStatusBadgeProps {
  status: PaymentStatus;
}

const PaymentStatusBadge = ({ status }: PaymentStatusBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export default PaymentStatusBadge;
