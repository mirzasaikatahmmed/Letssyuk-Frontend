import { useState, useMemo } from "react";
import { MessageSquare, Clock, CheckCircle } from "lucide-react";
import PageHeading from "../_components/PageHeading/PageHeading";
import DataTable, { type Column } from "../_components/DataTable/DataTable";
import SupportStatsCard from "./_components/SupportStatsCard";
import SupportFilterBar from "./_components/SupportFilterBar";
import { TicketStatusBadge, TicketPriorityBadge } from "./_components/TicketBadges";
import TicketReplyDialog, {
  type SupportTicket,
} from "./_components/TicketReplyDialog";

const INITIAL_TICKETS: SupportTicket[] = [
  {
    id: "TICKET-001",
    user: "Marcus Johnson",
    email: "marcus.j@email.com",
    category: "Technical Issue",
    subject: "Unable to upload profile photo",
    priority: "Medium",
    status: "Open",
    submitted: "Feb 02, 2026 - 10:30",
    message:
      "I'm trying to upload my profile photo but keep getting an error message saying 'File too large'. The image is only 2MB.",
  },
  {
    id: "TICKET-002",
    user: "Elite Sports Agency",
    email: "contact@elitesports.com",
    category: "Billing",
    subject: "Question about Enterprise plan features",
    priority: "High",
    status: "Replied",
    submitted: "Feb 02, 2026 - 09:15",
    message:
      "We recently upgraded to the Enterprise Annual plan. Can you confirm all the features included and when bulk import will be available?",
  },
  {
    id: "TICKET-003",
    user: "Sarah Williams",
    email: "sarah.w@email.com",
    category: "Account",
    subject: "Age verification pending for too long",
    priority: "High",
    status: "Open",
    submitted: "Feb 01, 2026 - 14:20",
    message:
      "I submitted my age verification documents 3 days ago and still haven't heard back. Please can you check the status?",
  },
  {
    id: "TICKET-004",
    user: "FC Barcelona Youth",
    email: "youth@fcbarcelona.com",
    category: "Feature Request",
    subject: "Bulk athlete import feature",
    priority: "Low",
    status: "Open",
    submitted: "Feb 01, 2026 - 11:00",
    message:
      "We manage over 200 youth athletes. It would be very helpful to have a CSV import feature so we can add them all at once.",
  },
  {
    id: "TICKET-005",
    user: "David Martinez",
    email: "david.m@email.com",
    category: "Technical Issue",
    subject: "App crashes on mobile",
    priority: "High",
    status: "Replied",
    submitted: "Jan 31, 2026 - 16:45",
    message:
      "The app keeps crashing whenever I try to open the performance stats section on my iPhone 14. This started after the last update.",
  },
  {
    id: "TICKET-006",
    user: "Global Talent Group",
    email: "info@globaltalent.com",
    category: "Account",
    subject: "How to add multiple agents to account",
    priority: "Medium",
    status: "Closed",
    submitted: "Jan 30, 2026 - 13:30",
    message:
      "We have a team of 5 agents and we'd like to know how to add them all under our agency account with separate logins.",
  },
];

const AdminSupport = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>(INITIAL_TICKETS);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openTickets = tickets.filter((t) => t.status === "Open").length;
  const resolvedToday = tickets.filter((t) => t.status === "Closed").length;

  const filtered = useMemo(() => {
    return tickets.filter((t) => {
      const matchSearch =
        search === "" ||
        t.id.toLowerCase().includes(search.toLowerCase()) ||
        t.user.toLowerCase().includes(search.toLowerCase()) ||
        t.subject.toLowerCase().includes(search.toLowerCase());
      const matchStatus = status === "all" || t.status === status;
      const matchCategory = category === "all" || t.category === category;
      return matchSearch && matchStatus && matchCategory;
    });
  }, [tickets, search, status, category]);

  const handleViewReply = (ticket: SupportTicket) => {
    setSelectedTicket(ticket);
    setDialogOpen(true);
  };

  const handleReply = (ticketId: string) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === ticketId ? { ...t, status: "Replied" as const } : t
      )
    );
    setDialogOpen(false);
  };

  const handleResolve = (ticketId: string) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === ticketId ? { ...t, status: "Closed" as const } : t
      )
    );
  };

  const columns: Column<SupportTicket>[] = [
    {
      key: "id",
      header: "Ticket ID",
      render: (t) => (
        <span className="text-gray-400 text-xs font-mono whitespace-nowrap">{t.id}</span>
      ),
    },
    {
      key: "user",
      header: "User",
      render: (t) => (
        <div className="flex flex-col gap-0.5">
          <span className="text-white font-medium text-sm whitespace-nowrap">{t.user}</span>
          <span className="text-gray-500 text-xs">{t.email}</span>
        </div>
      ),
    },
    {
      key: "category",
      header: "Category",
      render: (t) => (
        <span className="text-gray-300 text-sm whitespace-nowrap">{t.category}</span>
      ),
    },
    {
      key: "subject",
      header: "Subject",
      render: (t) => (
        <span className="text-gray-300 text-sm">{t.subject}</span>
      ),
    },
    {
      key: "priority",
      header: "Priority",
      render: (t) => <TicketPriorityBadge priority={t.priority} />,
    },
    {
      key: "status",
      header: "Status",
      render: (t) => <TicketStatusBadge status={t.status} />,
    },
    {
      key: "submitted",
      header: "Submitted",
      render: (t) => (
        <span className="text-gray-300 text-sm whitespace-nowrap">{t.submitted}</span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      className: "text-right",
      render: (t) => (
        <div className="flex justify-end">
          <button
            onClick={() => handleViewReply(t)}
            className="text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors whitespace-nowrap"
          >
            View &amp; Reply
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#080a0f] p-4 sm:p-6 flex flex-col gap-6">
      <PageHeading
        title="Support Requests"
        subTitle="Manage user support tickets and inquiries"
      />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SupportStatsCard
          title="Open Tickets"
          value={openTickets}
          iconColor="amber"
          icon={<MessageSquare className="w-5 h-5" />}
        />
        <SupportStatsCard
          title="Avg Response Time"
          value="2.4 hrs"
          iconColor="cyan"
          icon={<Clock className="w-5 h-5" />}
        />
        <SupportStatsCard
          title="Resolved Today"
          value={resolvedToday}
          iconColor="cyan"
          icon={<CheckCircle className="w-5 h-5" />}
        />
      </div>

      {/* Filters */}
      <SupportFilterBar
        search={search}
        onSearchChange={(v) => setSearch(v)}
        status={status}
        onStatusChange={(v) => setStatus(v)}
        category={category}
        onCategoryChange={(v) => setCategory(v)}
        showing={filtered.length}
        total={tickets.length}
      />

      {/* Table */}
      <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl overflow-hidden">
        <DataTable
          columns={columns}
          data={filtered}
          emptyMessage="No tickets match the current filters."
        />
      </div>

      {/* Reply Dialog */}
      <TicketReplyDialog
        ticket={selectedTicket}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onReply={handleReply}
        onResolve={handleResolve}
      />
    </div>
  );
};

export default AdminSupport;
