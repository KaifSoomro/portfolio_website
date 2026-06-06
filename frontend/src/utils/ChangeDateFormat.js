import { useMemo } from "react";

const ChangeDateFormat = (date) => {
  return useMemo(() => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }, [date]);
};

export default ChangeDateFormat;