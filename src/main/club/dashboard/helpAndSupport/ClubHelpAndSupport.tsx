// import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { 
  Clock, 
  Mail, 
  Phone, 
  MessageCircle, 
} from 'lucide-react';
import { SupportStats } from "./_components/SupportStats";
import { TicketForm } from "./_components/TicketForm";

// Sub-Component 1: Support Stats Cards

// Sub-Component 2: Support Ticket Form


const AgentHelpAndSupport = () => {
  return (
    <div className="bg-[#0B0E14] min-h-screen  space-y-10 font-sans">
      <div className="  space-y-10">
        
        {/* Top Stats */}
        <SupportStats />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-[#0B1219] border-gray-800 p-8 rounded-xl border-[0.5px] h-full">
              <h3 className="text-lg font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email", val: "support@onyxsport.ai", color: "#0DA9A2" },
                  { icon: Phone, label: "Phone", val: "+44 20 1234 5678", color: "#00A63E" },
                  { icon: MessageCircle, label: "Whatsapp", val: "+44 20 1234 5678", color: "#30D5C8" },
                  { icon: Clock, label: "Hours", val: "24/7 Support", color: "#9810FA" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group cursor-pointer">
                    <div className="mt-1" style={{ color: item.color }}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{item.label}</p>
                      <p className="text-sm text-gray-300 group-hover:text-white transition-colors">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right: Ticket Form */}
          <div className="lg:col-span-8">
            <TicketForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentHelpAndSupport;