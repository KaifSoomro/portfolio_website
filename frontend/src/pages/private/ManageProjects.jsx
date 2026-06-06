import React from "react";
import { useQuery } from "@tanstack/react-query";
import TableRow from "../../components/dashboard/TableRow";
import { Link } from "react-router-dom";
import TableSkeleton from "../../components/dashboard/TableSkeleton";

const ManageProjects = () => {

    const token = JSON.parse(localStorage.getItem("token"));

    const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/project/all`,
          {
            method: "GET"
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data.error);
        }

        return data.projects;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });

  return (
    <div className="p-5 mt-10 w-full">

      <div className="w-full flex items-center justify-end mb-5">
        <Link
          to="/admin-dashboard/new-project"
          className="rounded-lg bg-green-500/10 px-4 py-2 text-green-400 hover:bg-green-500/20 transition"
        >
  
          New Project
        </Link>
      </div>

      <div className="w-full">
        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-xl">
          <table className="w-full">
            <thead>
              <tr className="bg-linear-to-r from-purple-600/20 via-pink-500/20 to-orange-500/20 border-b border-neutral-800">
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                  Project Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                  Created On
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {
                isLoading && <TableSkeleton />
              }
              {
                data && data?.map((project, index) => (
                  <TableRow key={index} project={project}/>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProjects;
