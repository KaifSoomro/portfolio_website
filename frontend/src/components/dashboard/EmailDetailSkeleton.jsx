import { Mail, UserCircle2Icon } from "lucide-react";

const EmailDetailSkeleton = () => {
  return (
    <div className="mt-20 w-200 bg-linear-to-t from-neutral-900 to-neutral-800 border border-neutral-700 rounded-lg p-5 animate-pulse">
      {/* Name */}
      <div className="flex items-center gap-2">
        <UserCircle2Icon className="text-neutral-500" />
        <div className="h-5 w-40 bg-neutral-700 rounded"></div>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2 my-3">
        <Mail className="text-neutral-500" />
        <div className="h-5 w-56 bg-neutral-700 rounded"></div>
      </div>

      {/* Message */}
      <div>
        <div className="h-5 w-20 bg-neutral-700 rounded mb-3"></div>

        <div className="space-y-2">
          <div className="h-4 w-full bg-neutral-700 rounded"></div>
          <div className="h-4 w-full bg-neutral-700 rounded"></div>
          <div className="h-4 w-3/4 bg-neutral-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default EmailDetailSkeleton;