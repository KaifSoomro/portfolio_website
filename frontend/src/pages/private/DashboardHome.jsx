import { Eye, FolderCodeIcon, Mails } from "lucide-react";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { useQuery } from "@tanstack/react-query";

const DashboardHome = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { data, isLoading } = useQuery({
    queryKey: ["allData"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/project/everything`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await res.json();
        console.log(data)

        if (!res.ok) {
          throw new Error(data.message || data.error);
        }

        return data.all;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });

  const colors = [
    "url(#blueGradient)",
    "url(#purpleGradient)",
    "url(#yellowGradient)",
  ];


  const icons = [<Eye />, <FolderCodeIcon />, <Mails />];

  return (
    <div className="w-full p-5 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data &&
          data?.map((value, index) => {
            return (
              <div
                key={index}
                className="w-full bg-linear-to-br from-neutral-900 to-neutral-800 p-5 rounded-xl border border-neutral-500/25"
              >
                <div
                  className={`w-15 h-15 rounded-xl bg-linear-to-tl flex items-center justify-center border  border-blue-500/25 ${value?.colorFrom} ${value?.colorTo}`}
                >
                  {
                    icons[index]
                  }
                </div>
                <h1 className="text-xl mt-3 text-neutral-500">{value?.name}</h1>
                <h1 className="text-4xl mt-2 font-bold">{value?.value}</h1>
              </div>
            );
          })}
      </div>

      <div className="w-full h-120 mt-15">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data || []}>
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>

              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#7E22CE" />
              </linearGradient>

              <linearGradient id="yellowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FACC15" />
                <stop offset="100%" stopColor="#EAB308" />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="name"
              tick={{ fill: "#CBD5E1" }}
              axisLine={{ stroke: "#475569" }}
            />

            <YAxis
              tick={{ fill: "#CBD5E1" }}
              axisLine={{ stroke: "#475569" }}
            />

            <Tooltip
              contentStyle={{
                background: "#0F172A",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Bar dataKey="value" radius={[10, 10, 0, 0]}>
              {data &&
                data.map((_, index) => (
                  <Cell key={index} fill={colors[index]} />
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardHome;
