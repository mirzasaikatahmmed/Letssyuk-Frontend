import { useState, useMemo } from "react";
import { DollarSign, TrendingUp, Users } from "lucide-react";
import PageHeading from "../_components/PageHeading/PageHeading";
import DataTable, { type Column } from "../_components/DataTable/DataTable";
import PaymentStatsCard from "./_components/PaymentStatsCard";
import SubscriptionPlansPanel from "./_components/SubscriptionPlansPanel";
import PaymentsFilterBar from "./_components/PaymentsFilterBar";
import PaymentStatusBadge from "./_components/PaymentStatusBadge";
import PaymentActionMenu from "./_components/PaymentActionMenu";

type PaymentStatus = "Paid" | "Active" | "Failed" | "Refunded";

interface Transaction {
  id: string;
  user: string;
  plan: string;
  amount: string;
  method: string;
  status: PaymentStatus;
  date: string;
}

const ALL_TRANSACTIONS: Transaction[] = [
  {
    id: "TXN-2026-0202-001",
    user: "Marcus Johnson",
    plan: "Pro Monthly",
    amount: "$29.00",
    method: "Credit Card",
    status: "Paid",
    date: "Feb 02, 2026",
  },
  {
    id: "TXN-2026-0202-002",
    user: "Elite Sports Agency",
    plan: "Enterprise Annual",
    amount: "$1200.00",
    method: "Bank Transfer",
    status: "Paid",
    date: "Feb 02, 2026",
  },
  {
    id: "TXN-2026-0201-001",
    user: "Sarah Williams",
    plan: "Free (Under-18)",
    amount: "$0.00",
    method: "N/A",
    status: "Active",
    date: "Feb 01, 2026",
  },
  {
    id: "TXN-2026-0201-002",
    user: "FC Barcelona Youth",
    plan: "Club Monthly",
    amount: "$99.00",
    method: "Credit Card",
    status: "Paid",
    date: "Feb 01, 2026",
  },
  {
    id: "TXN-2026-0131-001",
    user: "David Martinez",
    plan: "Pro Monthly",
    amount: "$29.00",
    method: "Credit Card",
    status: "Failed",
    date: "Jan 31, 2026",
  },
  {
    id: "TXN-2026-0130-001",
    user: "Global Talent Group",
    plan: "Pro Monthly",
    amount: "$29.00",
    method: "PayPal",
    status: "Paid",
    date: "Jan 30, 2026",
  },
  {
    id: "TXN-2026-0202-003",
    user: "Emma Thompson",
    plan: "Free (Under-18)",
    amount: "$0.00",
    method: "N/A",
    status: "Active",
    date: "Feb 02, 2026",
  },
  {
    id: "TXN-2026-0128-001",
    user: "Real Madrid Academy",
    plan: "Enterprise Annual",
    amount: "$1200.00",
    method: "Bank Transfer",
    status: "Paid",
    date: "Jan 28, 2026",
  },
  {
    id: "TXN-2026-0125-001",
    user: "James Wilson",
    plan: "Pro Monthly",
    amount: "$29.00",
    method: "Credit Card",
    status: "Refunded",
    date: "Jan 25, 2026",
  },
  {
    id: "TXN-2026-0122-001",
    user: "Star Athletes Inc",
    plan: "Pro Monthly",
    amount: "$29.00",
    method: "Credit Card",
    status: "Paid",
    date: "Jan 22, 2026",
  },
];

const PAGE_SIZE = 10;

const AdminPayments = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [plan, setPlan] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    return ALL_TRANSACTIONS.filter((t) => {
      const matchSearch =
        search === "" ||
        t.id.toLowerCase().includes(search.toLowerCase()) ||
        t.user.toLowerCase().includes(search.toLowerCase());
      const matchStatus = status === "all" || t.status === status;
      const matchPlan = plan === "all" || t.plan === plan;
      return matchSearch && matchStatus && matchPlan;
    });
  }, [search, status, plan]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const columns: Column<Transaction>[] = [
    {
      key: "id",
      header: "Transaction ID",
      render: (t) => (
        <span className="text-gray-400 text-xs font-mono whitespace-nowrap">
          {t.id}
        </span>
      ),
    },
    {
      key: "user",
      header: "User",
      render: (t) => (
        <span className="text-white font-medium text-sm whitespace-nowrap">
          {t.user}
        </span>
      ),
    },
    {
      key: "plan",
      header: "Plan",
      render: (t) => (
        <span className="text-gray-300 text-sm whitespace-nowrap">
          {t.plan}
        </span>
      ),
    },
    {
      key: "amount",
      header: "Amount",
      render: (t) => (
        <span className="text-gray-300 text-sm whitespace-nowrap">
          {t.amount}
        </span>
      ),
    },
    {
      key: "method",
      header: "Method",
      render: (t) => (
        <span className="text-gray-300 text-sm whitespace-nowrap">
          {t.method}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (t) => <PaymentStatusBadge status={t.status} />,
    },
    {
      key: "date",
      header: "Date",
      render: (t) => (
        <span className="text-gray-300 text-sm whitespace-nowrap">
          {t.date}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      className: "text-right",
      render: (t) => (
        <div className="flex justify-end">
          <PaymentActionMenu
            onView={() => console.log("View", t.id)}
            onRefund={() => console.log("Refund", t.id)}
            onVoid={() => console.log("Void", t.id)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#080a0f] p-4 sm:p-6 flex flex-col gap-6">
      <PageHeading
        title="Payments & Subscriptions"
        subTitle="Transaction history and subscription management"
      />

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <PaymentStatsCard
          title="Total Revenue (This Month)"
          value="$2,586.00"
          iconColor="cyan"
          icon={<DollarSign className="w-5 h-5" />}
        />
        <PaymentStatsCard
          title="Monthly Recurring Revenue"
          value="$186.00"
          iconColor="cyan"
          icon={<TrendingUp className="w-5 h-5" />}
        />
        <PaymentStatsCard
          title="Paying Customers"
          value="1,816"
          iconColor="purple"
          icon={<Users className="w-5 h-5" />}
        />
      </div>

      {/* Subscription Plans */}
      <SubscriptionPlansPanel />

      {/* Filter Bar */}
      <PaymentsFilterBar
        search={search}
        onSearchChange={(v) => {
          setSearch(v);
          setCurrentPage(1);
        }}
        status={status}
        onStatusChange={(v) => {
          setStatus(v);
          setCurrentPage(1);
        }}
        plan={plan}
        onPlanChange={(v) => {
          setPlan(v);
          setCurrentPage(1);
        }}
        showing={filtered.length}
        total={ALL_TRANSACTIONS.length}
      />

      {/* Table */}
      <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl overflow-hidden">
        <DataTable
          columns={columns}
          data={paginated}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          emptyMessage="No transactions match the current filters."
        />
      </div>
    </div>
  );
};

export default AdminPayments;
