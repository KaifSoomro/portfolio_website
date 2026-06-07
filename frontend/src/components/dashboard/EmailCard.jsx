import { Mail, MessageCircleMoreIcon, UserCircle2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const EmailCard = ({email}) => {
  const message = email?.message.length > 10 ? email?.message.split(0,10)+"..." : email?.message;
  return (
    <Link to={`/admin-dashboard/emails/${email?._id}`} className="w-max border border-neutral-700 rounded-lg bg-linear-to-bl from-neutral-900 to-neutral-800 p-4 text-neutral-400 hover:scale-101 cursor-pointer transition-all duration-200">
      <h1 className="text-lg flex items-center gap-2">
        <UserCircle2Icon /> { email?.name }
      </h1>
      <p className="text-lg flex items-center gap-2 my-2">
        <Mail /> { email?.from }
      </p>
      <p className="text-lg flex items-center gap-2">
        <MessageCircleMoreIcon /> { message }
      </p>
    </Link>
  );
};

export default EmailCard;
