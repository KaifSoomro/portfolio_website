import React, { useEffect } from "react";
import ChangeDateFormat from "../../utils/ChangeDateFormat.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const TableRow = ({ project }) => {

  const token = JSON.parse(localStorage.getItem("token"));
  const queryClient = useQueryClient();

  const { mutate:handleDelete, isPending } = useMutation({
    mutationFn: async(projectId) => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/project/delete`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({_id: projectId})
        })

        const data = await res.json();

        if(!res.ok){
          throw new Error(data.message || data.error);
        }

        return data;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      toast.success("Project deleted successfull");
      queryClient.invalidateQueries(["allData"]);
    },
    onError: (data) => {
      toast.error(data.message || data.error);
    }
  })


  return (
    <tr className="bg-neutral-950 hover:bg-neutral-950/40 transition-all duration-200 border-b border-neutral-500/20">
      <td className="px-6 py-5">
        <div>
          <p className="font-medium text-white capitalize">{ project?.title }</p>
          <p className="text-sm text-neutral-400 capitalize">{ project?.subTitle || "Web Application" }</p>
        </div>
      </td>

      <td className="px-6 py-5">
        <span className="font-medium text-cyan-400">{ project?.views || 0 }</span>
      </td>

      <td className="px-6 py-5">
        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 border border-green-500/20 capitalize">
          { project?.status }
        </span>
      </td>

      <td className="px-6 py-5">
        <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400 border border-yellow-500/20 capitalize">
          { project?.category }
        </span>
      </td>

      <td className="px-6 py-5 text-neutral-400"> { ChangeDateFormat(project?.createdAt) } </td>

      <td className="px-6 py-5">
        <div className="flex items-center justify-center gap-2">
          <button className="rounded-lg bg-blue-500/10 px-4 py-2 text-blue-400 hover:bg-blue-500/20 transition">
            Edit
          </button>

          <button onClick={()=>handleDelete(project?._id)} className="rounded-lg bg-red-500/10 px-4 py-2 text-red-400 hover:bg-red-500/20 transition">
            { isPending ? "Deleting..." : "Delete" }
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
