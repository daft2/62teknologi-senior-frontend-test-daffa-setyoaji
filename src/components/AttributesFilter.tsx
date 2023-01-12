import { CheckIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { ATTRIBUTES_FILTER_OPTION } from "../constant";

type AttributesFilterProps = {
  onSelect: (value: string[]) => void;
};

const AttributesFilter: React.FC<AttributesFilterProps> = ({ onSelect }) => {
  const [activeFilter, setActiveFilter] = useState<string[]>([]);

  const handleSelect = (attribute: string) => {
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
    <div className="flex flex-wrap whitespace-nowrap mt-2 gap-2">
      {ATTRIBUTES_FILTER_OPTION.map((attribute) => {
        const isActive = activeFilter.includes(attribute.value);

        return (
          <div
            onClick={() => handleSelect(attribute.value)}
            className={`${
              isActive
                ? "ring-blue-500 text-blue-500"
                : "ring-slate-400 text-slate-700"
            } rounded-full ring-1 bg-white py-1 px-2 text-xs hover:bg-slate-100 cursor-pointer flex items-center gap-1`}
          >
            {isActive && (
              <CheckIcon className={`${isActive && "fill-blue-500"} w-3 h-3`} />
            )}
            <span>{attribute.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AttributesFilter;
