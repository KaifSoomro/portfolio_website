import { useQuery } from "@tanstack/react-query";
import { Mail, MessageCircleMoreIcon, UserCircle2Icon } from "lucide-react";
import React, { useState } from "react";
import EmailCard from "../../components/dashboard/EmailCard";
import EmailCardSkeleton from "../../components/dashboard/EmailCardSkeleton";

const ManageEmails = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [searchInput, setSearchInput] = useState("");

  const { data: emails, isLoading } = useQuery({
    queryKey: ["emails"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/contact/email`,
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

        return data.emails;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });

  const filterEmail = emails?.filter((email) =>
    email?.from.includes(searchInput),
  );
  return (
    <div className="w-full p-5">
      <div className="w-full flex items-center justify-center gap-5 mt-5">
        <input
          name="search"
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-100 h-10.5 px-4 rounded-xl bg-neutral-950 border border-neutral-700 focus:border-purple-500 outline-none"
        />
        <button
          type="submit"
          className="relative overflow-hidden px-6 py-2 rounded-xl font-semibold text-white
                bg-linear-to-r from-purple-600 via-pink-500 to-purple-600
                hover:scale-[1.02] active:scale-[0.98] transition duration-300
                shadow-[0_0_25px_rgba(236,72,153,0.4)] cursor-pointer"
        >
          Search
        </button>
      </div>

      {emails && emails.length === 0 && (
        <div className="w-full text-center text-xl mt-20 text-yellow-400">
          No Emails Found.
        </div>
      )}

      {isLoading && <EmailCardSkeleton />}

      {filterEmail?.length === 0 && (
        <div className="w-full text-center text-xl mt-20 text-red-400">
          No emails were found of <span className="underline">{ searchInput }</span>
        </div>
      )}

      <div className="mt-7 w-full grid grid-cols-3">
        {filterEmail &&
          filterEmail?.map((email, index) => (
            <EmailCard key={index} email={email} />
          ))}
      </div>
    </div>
  );
};

export default ManageEmails;
