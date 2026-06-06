import React from "react";

const TableSkeleton = () => {
  return (
    <tr className="border-b border-neutral-500/20 animate-pulse">

      <td className="px-6 py-5">
        <div className="space-y-2">
          <div className="h-5 w-40 rounded bg-neutral-800"></div>
          <div className="h-4 w-28 rounded bg-neutral-900"></div>
        </div>
      </td>

      <td className="px-6 py-5">
        <div className="h-5 w-24 rounded bg-neutral-800"></div>
      </td>

      <td className="px-6 py-5">
        <div className="h-7 w-20 rounded-full bg-neutral-800"></div>
      </td>

      <td className="px-6 py-5">
        <div className="h-7 w-20 rounded-full bg-neutral-800"></div>
      </td>

      <td className="px-6 py-5">
        <div className="h-5 w-32 rounded bg-neutral-800"></div>
      </td>

      <td className="px-6 py-5">
        <div className="flex items-center justify-center gap-2">
          <div className="h-10 w-20 rounded-lg bg-neutral-800"></div>
          <div className="h-10 w-20 rounded-lg bg-neutral-800"></div>
        </div>
      </td>
    </tr>
  );
};

export default TableSkeleton;