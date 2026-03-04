import { useState } from "react";
import { Clock, CheckCircle, XCircle } from "lucide-react";
import PageHeading from "../_components/PageHeading/PageHeading";
import VerificationStatsCard from "./_components/VerificationStatsCard";
import VerificationTable, {
  type VerificationEntry,
} from "./_components/VerificationTable";
import DocumentPreviewPanel from "./_components/DocumentPreviewPanel";

const INITIAL_ENTRIES: VerificationEntry[] = [
  {
    id: 1,
    name: "Sarah Williams",
    email: "sarah.w@email.com",
    dateOfBirth: "March 15, 2009",
    age: "17 years",
    documentType: "Passport",
    submitted: "Feb 01, 2026 - 14:23",
    status: "Pending",
  },
  {
    id: 2,
    name: "Mia Johnson",
    email: "mia.j@email.com",
    dateOfBirth: "January 30, 2009",
    age: "17 years",
    documentType: "Passport",
    submitted: "Jan 31, 2026 - 11:20",
    status: "Approved",
  },
  {
    id: 3,
    name: "Noah Brown",
    email: "noah.b@email.com",
    dateOfBirth: "May 12, 2010",
    age: "16 years",
    documentType: "National ID",
    submitted: "Jan 30, 2026 - 16:30",
    status: "Rejected",
  },
  {
    id: 4,
    name: "Olivia Martinez",
    email: "olivia.m@email.com",
    dateOfBirth: "September 3, 2009",
    age: "17 years",
    documentType: "Birth Certificate",
    submitted: "Feb 02, 2026 - 08:10",
    status: "Pending",
  },
];

const AdminVerifications = () => {
  const [entries, setEntries] = useState<VerificationEntry[]>(INITIAL_ENTRIES);

  const pendingCount = entries.filter((e) => e.status === "Pending").length;
  const approvedToday = entries.filter((e) => e.status === "Approved").length;
  const rejectedToday = entries.filter((e) => e.status === "Rejected").length;

  const handleApprove = (entry: VerificationEntry) => {
    setEntries((prev) =>
      prev.map((e) => (e.id === entry.id ? { ...e, status: "Approved" } : e))
    );
  };

  const handleReject = (entry: VerificationEntry) => {
    setEntries((prev) =>
      prev.map((e) => (e.id === entry.id ? { ...e, status: "Rejected" } : e))
    );
  };

  const handleViewDocument = (_entry: VerificationEntry) => {
    // open document viewer — placeholder
    console.log("View document for", _entry.name);
  };

  return (
    <div className="min-h-screen bg-[#080a0f] p-4 sm:p-6 flex flex-col gap-6">
      <PageHeading
        title="Under-18 Verifications"
        subTitle="Age verification queue for under-18 athletes"
      />

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <VerificationStatsCard
          title="Pending Review"
          value={pendingCount}
          iconColor="amber"
          icon={<Clock className="w-5 h-5" />}
        />
        <VerificationStatsCard
          title="Approved Today"
          value={approvedToday}
          iconColor="cyan"
          icon={<CheckCircle className="w-5 h-5" />}
        />
        <VerificationStatsCard
          title="Rejected Today"
          value={rejectedToday}
          iconColor="red"
          icon={<XCircle className="w-5 h-5" />}
        />
      </div>

      {/* Table */}
      <VerificationTable
        entries={entries}
        onViewDocument={handleViewDocument}
        onApprove={handleApprove}
        onReject={handleReject}
      />

      {/* Document Preview Panel */}
      <DocumentPreviewPanel />
    </div>
  );
};

export default AdminVerifications;
