/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';

export const TicketForm = () => {
  // Form State
  const [formData, setFormData] = useState({
    category: "",
    subject: "",
    message: "",
  });

  // UI Status State
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null); // Clear error when user types
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic Validation Logic
    if (!formData.category || !formData.subject || !formData.message) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    setStatus('sending');

    // Mock API call
    setTimeout(() => {
      setStatus('success');
      console.log("Form Submitted:", formData);
      setFormData({ category: "", subject: "", message: "" }); // Reset form
      
      // Reset button to idle after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  // Custom styling to match your request for #3E43433020
  const inputStyles = "bg-[#3E434330] w-full border-gray-700 text-gray-100 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#30D5C8]/50 outline-none";

  return (
    <Card className="bg-[#0B1219] border-gray-800 !py-0 rounded-xl overflow-hidden border-[0.5px]">
      {/* Header with AlertCircle icon */}
      <div className="bg-[#162129] px-6 py-4 border-b border-gray-800 gap-2 flex justify-center items-center">
        <AlertCircle size={16} className="text-[#30D5C8]" />
        <span className="text-xs font-bold text-[#30D5C8] uppercase tracking-widest">Submit Ticket</span>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <p className="text-sm text-gray-400">
          Submit a support ticket and our team will get back to you within 24 hours.
        </p>

        {/* Category Select using shadcn */}
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Category</label>
          <Select 
            value={formData.category} 
            onValueChange={(value) => handleChange('category', value)}
          >
            <SelectTrigger className={inputStyles}>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-[#162129] border-gray-700 text-gray-300 w-full">
              <SelectItem value="technical">Technical Issue</SelectItem>
              <SelectItem value="data">Data Discrepancy</SelectItem>
              <SelectItem value="account">Account Access</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Subject Input using shadcn */}
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Subject</label>
          <Input 
            placeholder="Topic of your issue"
            className={inputStyles}
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
          />
        </div>

        {/* Message Textarea using shadcn */}
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Message</label>
          <Textarea 
            placeholder="Brief description of your issue"
            rows={4}
            className={`${inputStyles} resize-none`}
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
          />
        </div>

        {/* Error Feedback */}
        {error && <p className="text-red-400 text-[10px] font-bold italic">{error}</p>}

        {/* Submit Button with Dynamic Status */}
        <Button 
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-6 bg-[#30D5C8] text-[#0B0E14] font-black rounded-xl text-sm hover:bg-[#30D5C8]/90 transition-all disabled:opacity-50 shadow-[0_4px_20px_rgba(48,213,200,0.2)]"
        >
          {status === 'sending' ? (
            <div className="h-5 w-5 border-2 border-[#0B0E14]/30 border-t-[#0B0E14] rounded-full animate-spin" />
          ) : status === 'success' ? (
            <span className="flex items-center gap-2"><CheckCircle2 size={18} /> Ticket Submitted!</span>
          ) : (
            <span className="flex items-center gap-2"><Send size={18} /> Submit Ticket</span>
          )}
        </Button>
      </form>
    </Card>
  );
};