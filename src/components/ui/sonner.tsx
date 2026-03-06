"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      position="top-right"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#11161D] group-[.toaster]:text-white group-[.toaster]:border-gray-800 group-[.toaster]:shadow-2xl group-[.toaster]:rounded-2xl",
          description: "group-[.toast]:text-gray-400",
          actionButton:
            "group-[.toast]:bg-cyan-500 group-[.toast]:text-[#0B0E14]",
          cancelButton:
            "group-[.toast]:bg-gray-800 group-[.toast]:text-gray-400",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
