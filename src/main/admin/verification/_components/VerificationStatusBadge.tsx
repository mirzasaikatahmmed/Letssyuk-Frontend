type VerifStatus = "Pending" | "Approved" | "Rejected";

const statusStyles: Record<VerifStatus, string> = {
  Pending: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
  Approved: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/25",
  Rejected: "bg-red-500/15 text-red-400 border border-red-500/25",
};

interface VerificationStatusBadgeProps {
  status: VerifStatus;
}

const VerificationStatusBadge = ({ status }: VerificationStatusBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export default VerificationStatusBadge;
