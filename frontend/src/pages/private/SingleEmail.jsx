import React from "react";
import { useParams } from "react-router-dom";
import { Mail, MessageCircleMoreIcon, UserCircle2Icon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import EmailDetailSkeleton from "../../components/dashboard/EmailDetailSkeleton";

const SingleEmail = () => {
  const { emailId } = useParams();
  const token = JSON.parse(localStorage.getItem("token"));

  const { data: email, isLoading } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/contact/email/${emailId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data.error);
        }

        return data.email;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });
  return (
    <div className="p-5 w-full flex items-center justify-center">
      {isLoading ? (
        <EmailDetailSkeleton />
      ) : (
        <div className="mt-20 w-200 bg-linear-to-t from-neutral-900 to-neutral-800 border border-neutral-700 rounded-lg p-5 text-lg">
          <h1 className="flex items-center gap-2">
            <UserCircle2Icon /> {email?.name}
          </h1>
          <h1 className="flex items-center gap-2 my-3">
            <Mail /> {email?.from}
          </h1>
          <p>
            <span className="font-bold text-transparent bg-linear-to-t from-pink-600 to-pink-200 bg-clip-text">
              Message:
            </span>{" "}
            {email?.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default SingleEmail;
