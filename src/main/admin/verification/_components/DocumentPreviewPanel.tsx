import { FileText } from "lucide-react";

const guidelines = [
  "Verify document is clear and legible",
  "Confirm date of birth matches provided information",
  "Check document is not expired",
  "Verify photo matches user profile (if applicable)",
  "Reject if document appears tampered or fraudulent",
];

const DocumentPreviewPanel = () => {
  return (
    <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl p-8 flex flex-col items-center justify-center gap-5 min-h-[280px]">
      {/* Icon */}
      <div className="w-16 h-16 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center">
        <FileText className="w-8 h-8 text-gray-500" />
      </div>

      {/* Title & Description */}
      <div className="text-center">
        <h3 className="text-white font-semibold text-base mb-1">
          Document Verification
        </h3>
        <p className="text-gray-500 text-sm">
          Click "View Document" to review uploaded ID documents
        </p>
      </div>

      {/* Guidelines Box */}
      <div className="w-full max-w-sm bg-[#080a0f] border border-white/[0.06] rounded-lg p-4">
        <p className="text-gray-400 text-xs font-semibold mb-3">
          Verification Guidelines:
        </p>
        <ul className="flex flex-col gap-1.5">
          {guidelines.map((g, i) => (
            <li key={i} className="text-gray-500 text-xs leading-relaxed">
              {g}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocumentPreviewPanel;
