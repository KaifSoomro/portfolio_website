import { Mail, MessageCircleMoreIcon, UserCircle2Icon } from "lucide-react";
import React from "react";

const EmailCard = ({email}) => {
  return (
    <div className="w-max border border-purple-500/25 rounded-lg bg-linear-to-bl from-purple-900/20 to-purple-800/30 p-4 text-purple-200 hover:scale-101 cursor-pointer transition-all duration-200">
      <h1 className="text-lg flex items-center gap-2">
        <UserCircle2Icon /> { email?.name }
      </h1>
      <p className="text-lg flex items-center gap-2 my-2">
        <Mail /> { email?.from }
      </p>
      <p className="text-lg flex items-center gap-2">
        <MessageCircleMoreIcon /> { email?.message }
      </p>
    </div>
  );
};

export default EmailCard;
