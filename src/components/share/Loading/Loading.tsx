import { Skeleton } from "@/components/ui/skeleton";

interface LoadingProps {
  className?: string;
  count?: number;
}

const Loading = ({ className, count = 1 }: LoadingProps) => {
  return (
    <div className={`space-y-4 w-full ${className}`}>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="space-y-3">
          {/* Header line */}
          <Skeleton className="h-6 w-3/4 rounded-lg bg-linear-to-r from-gray-800/50 to-gray-700/30" />
          
          {/* Content lines */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full rounded-md bg-gray-800/40" />
            <Skeleton className="h-4 w-[90%] rounded-md bg-gray-800/40" />
            <Skeleton className="h-4 w-[85%] rounded-md bg-gray-800/40" />
          </div>
          
          <div className="flex gap-2 pt-2">
            <Skeleton className="h-3 w-20 rounded-full bg-cyan-900/20" />
            <Skeleton className="h-3 w-16 rounded-full bg-gray-800/30" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;