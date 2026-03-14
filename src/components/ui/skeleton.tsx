import * as React from "react"
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#ffffff10] shadow-[0_4px_12px_rgba(0,0,0,0.1)]", className)}
      {...props}
    />
  )
}

export { Skeleton }
