import React from "react";
import ChangeDateFormat from "../../utils/ChangeDateFormat.js";

const TableRow = ({ project }) => {
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

          <button className="rounded-lg bg-red-500/10 px-4 py-2 text-red-400 hover:bg-red-500/20 transition">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
