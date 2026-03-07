import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TicketStatusBadge } from "./TicketBadges";

export type TicketStatus = "Open" | "Replied" | "Closed";
export type TicketPriority = "High" | "Medium" | "Low";

export interface SupportTicket {
  id: string;
  user: string;
  email: string;
  category: string;
  subject: string;
  priority: TicketPriority;
  status: TicketStatus;
  submitted: string;
  message: string;
}

interface TicketReplyDialogProps {
  ticket: SupportTicket | null;
  open: boolean;
  onClose: () => void;
  onReply: (ticketId: string) => void;
  onResolve: (ticketId: string) => void;
}

const TicketReplyDialog = ({
  ticket,
  open,
  onClose,
  onReply,
  onResolve,
}: TicketReplyDialogProps) => {
  const [reply, setReply] = useState("");

  if (!ticket) return null;

  const handleSend = () => {
    if (!reply.trim()) return;
    onReply(ticket.id);
    setReply("");
  };

  const handleResolve = () => {
    onResolve(ticket.id);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#0f1117] border border-white/8 text-white max-w-lg p-0 gap-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="px-5 pt-5 pb-4 border-b border-white/[0.07]">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1">
              <DialogTitle className="text-white font-bold text-lg leading-tight">
                {ticket.id}
              </DialogTitle>
              <p className="text-gray-400 text-xs">
                {ticket.category} • Priority: {ticket.priority}
              </p>
            </div>
            <TicketStatusBadge status={ticket.status} />
          </div>
        </DialogHeader>

        <div className="px-5 py-4 flex flex-col gap-4">
          {/* From box */}
          <div className="bg-[#080a0f] border border-white/6 rounded-xl p-4 flex flex-col gap-1">
            <span className="text-gray-500 text-xs">From</span>
            <span className="text-white font-semibold text-sm">{ticket.user}</span>
            <span className="text-gray-500 text-xs">{ticket.email}</span>
            <span className="text-gray-600 text-xs">Submitted: {ticket.submitted}</span>
          </div>

          {/* Subject */}
          <p className="text-white font-medium text-sm">{ticket.subject}</p>

          {/* Message */}
          <div className="bg-[#080a0f] border border-white/6 rounded-xl px-4 py-3">
            <p className="text-gray-300 text-sm leading-relaxed">{ticket.message}</p>
          </div>

          {/* Reply box */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-medium">Reply to Ticket</label>
            <textarea
              rows={4}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your response here..."
              className="w-full bg-[#080a0f] border border-white/8 rounded-xl px-4 py-3 text-gray-300 text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pb-1">
            <button
              onClick={handleSend}
              className="flex-1 flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-sm py-2.5 rounded-xl transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Reply
            </button>
            <button
              onClick={handleResolve}
              className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-white/12 hover:border-white/30 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors"
            >
              <CheckCircle className="w-4 h-4" />
              Mark as Resolved
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TicketReplyDialog;
