import React, { useState } from "react";
import { PRICE_FILTER_OPTION } from "../constant";

type PriceFilterProps = {
  onSelect: (value: number[]) => void;
};

const PriceFilter: React.FC<PriceFilterProps> = ({ onSelect }) => {
  const [activeFilter, setActiveFilter] = useState<number[]>([]);

  const handleSelect = (attribute: number) => {
    const isSelected = activeFilter.some((filter) => filter == attribute);

    if (isSelected) {
      const newValue = activeFilter.filter((filter) => filter !== attribute);
      setActiveFilter(newValue);
      onSelect(newValue);
    } else {
      setActiveFilter((prev) => [...prev, attribute]);
      onSelect([...activeFilter, attribute]);
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex gap-2 text-xs">
        {PRICE_FILTER_OPTION.map((price) => {
          const isActive = activeFilter.includes(price.value);

          return (
            <span
              onClick={() => handleSelect(price.value)}
              className={`${
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-slate-400"
              }
            border hover:bg-black hover:text-white cursor-pointer rounded p-2`}
            >
              {price.label}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default PriceFilter;
