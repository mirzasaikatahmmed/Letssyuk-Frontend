interface PaymentEntry {
  name: string;
  plan: string;
  status: "Paid" | "Active" | "Failed";
  amount: string;
  date: string;
}

const payments: PaymentEntry[] = [
  {
    name: "Marcus Johnson",
    plan: "Pro Monthly",
    status: "Paid",
    amount: "$29.00",
    date: "Feb 02, 2026",
  },
  {
    name: "Elite Sports Agency",
    plan: "Enterprise Annual",
    status: "Paid",
    amount: "$29.00",
    date: "Feb 02, 2026",
  },
  {
    name: "Sarah Williams",
    plan: "Free (Under-18)",
    status: "Active",
    amount: "$29.00",
    date: "Feb 02, 2026",
  },
  {
    name: "FC Barcelona Youth",
    plan: "Club Monthly",
    status: "Paid",
    amount: "$29.00",
    date: "Feb 02, 2026",
  },
  {
    name: "David Martinez",
    plan: "Pro Monthly",
    status: "Failed",
    amount: "$29.00",
    date: "Feb 02, 2026",
  },
];

const statusColors: Record<string, string> = {
  Paid: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20",
  Active: "bg-green-500/15 text-green-400 border border-green-500/20",
  Failed: "bg-red-500/15 text-red-400 border border-red-500/20",
};

const RecentPayments = () => {
  return (
    <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl p-5 flex flex-col gap-4">
      <h3 className="text-white font-semibold text-sm">Recent Payments</h3>

      <div className="flex flex-col divide-y divide-white/5">
        {payments.map((entry, i) => (
          <div key={i} className="flex items-start justify-between py-3 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1.5">
              <span className="text-white text-sm font-medium">{entry.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-[11px]">{entry.plan}</span>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusColors[entry.status]}`}
                >
                  {entry.status}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1 ml-3 shrink-0">
              <span className="text-white text-sm font-semibold">{entry.amount}</span>
              <span className="text-gray-500 text-[11px]">{entry.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPayments;
