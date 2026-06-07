import { Mail, MessageCircleMoreIcon, UserCircle2Icon } from "lucide-react";

const EmailCardSkeleton = () => {
  return (
    <div className="mt-7 w-full grid grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="w-max border border-neutral-700 rounded-lg bg-linear-to-bl from-neutral-900 to-neutral-800 p-4 animate-pulse"
        >
          <div className="flex items-center gap-2">
            <UserCircle2Icon className="text-neutral-500" />
            <div className="h-5 w-32 bg-neutral-700 rounded"></div>
          </div>

          <div className="flex items-center gap-2 my-2">
            <Mail className="text-neutral-500" />
            <div className="h-5 w-48 bg-neutral-700 rounded"></div>
          </div>

          <div className="flex items-center gap-2">
            <MessageCircleMoreIcon className="text-neutral-500" />
            <div className="h-5 w-64 bg-neutral-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailCardSkeleton;