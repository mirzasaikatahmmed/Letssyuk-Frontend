type TicketStatus = "Open" | "Replied" | "Closed";
type TicketPriority = "High" | "Medium" | "Low";

const statusStyles: Record<TicketStatus, string> = {
  Open: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
  Replied: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/25",
  Closed: "bg-white/10 text-gray-400 border border-white/10",
};

const priorityStyles: Record<TicketPriority, string> = {
  High: "bg-red-500/15 text-red-400 border border-red-500/25",
  Medium: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
  Low: "bg-green-500/15 text-green-400 border border-green-500/25",
};

export const TicketStatusBadge = ({ status }: { status: TicketStatus }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${statusStyles[status]}`}>
    {status}
  </span>
);

export const TicketPriorityBadge = ({ priority }: { priority: TicketPriority }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${priorityStyles[priority]}`}>
    {priority}
  </span>
);
