import { FileText, Eye, CheckCircle, XCircle } from "lucide-react";
import DataTable, { type Column } from "../../_components/DataTable/DataTable";
import VerificationStatusBadge from "./VerificationStatusBadge";

export type VerifStatus = "Pending" | "Approved" | "Rejected";

export interface VerificationEntry {
  id: number;
  name: string;
  email: string;
  dateOfBirth: string;
  age: string;
  documentType: string;
  submitted: string;
  status: VerifStatus;
}

interface VerificationTableProps {
  entries: VerificationEntry[];
  onViewDocument: (entry: VerificationEntry) => void;
  onApprove: (entry: VerificationEntry) => void;
  onReject: (entry: VerificationEntry) => void;
}

const VerificationTable = ({
  entries,
  onViewDocument,
  onApprove,
  onReject,
}: VerificationTableProps) => {
  const columns: Column<VerificationEntry>[] = [
    {
      key: "name",
      header: "User",
      render: (entry) => (
        <div className="flex flex-col gap-0.5">
          <span className="text-white font-medium text-sm whitespace-nowrap">
            {entry.name}
          </span>
          <span className="text-gray-500 text-xs">{entry.email}</span>
        </div>
      ),
    },
    {
      key: "dateOfBirth",
      header: "Date of Birth",
      render: (entry) => (
        <span className="whitespace-nowrap">{entry.dateOfBirth}</span>
      ),
    },
    {
      key: "age",
      header: "Age",
      render: (entry) => (
        <span className="whitespace-nowrap">{entry.age}</span>
      ),
    },
    {
      key: "documentType",
      header: "Document Type",
      render: (entry) => (
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <FileText className="w-3.5 h-3.5 text-gray-500 shrink-0" />
          {entry.documentType}
        </div>
      ),
    },
    {
      key: "submitted",
      header: "Submitted",
      render: (entry) => (
        <span className="whitespace-nowrap">{entry.submitted}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (entry) => <VerificationStatusBadge status={entry.status} />,
    },
    {
      key: "actions",
      header: "Actions",
      render: (entry) => (
        <div className="flex items-center gap-3 whitespace-nowrap">
          <button
            onClick={() => onViewDocument(entry)}
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            View Document
          </button>
          {entry.status === "Pending" && (
            <>
              <button
                onClick={() => onApprove(entry)}
                className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors"
              >
                <CheckCircle className="w-3.5 h-3.5" />
                Approve
              </button>
              <button
                onClick={() => onReject(entry)}
                className="flex items-center gap-1 text-red-400 hover:text-red-300 text-xs font-medium transition-colors"
              >
                <XCircle className="w-3.5 h-3.5" />
                Reject
              </button>
            </>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl overflow-hidden">
      <DataTable
        columns={columns}
        data={entries}
        emptyMessage="No verification requests found."
      />
    </div>
  );
};

export default VerificationTable;
