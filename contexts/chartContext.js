import React, { createContext, useState } from "react";

const ChartContext = createContext();

export function ChartProvider({ children, category }) {
  const [dataType, setDataType] = useState(category);
  const [subcategory, setSubcategory] = useState("");
  const [timespan, setTimespan] = useState("month");

  return (
    <ChartContext.Provider
      value={{
        dataType,
        setDataType,
        subcategory,
        setSubcategory,
        timespan,
        setTimespan,
      }}
    >
      {children}
    </ChartContext.Provider>
  );
}

export default ChartContext;
