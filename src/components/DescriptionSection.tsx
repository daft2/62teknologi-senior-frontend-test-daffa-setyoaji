import React from "react";
import { BusinessDetail } from "../types";

type Props = {
  business: BusinessDetail;
};

const DescriptionSection: React.FC<Props> = ({ business }) => {
  const priceMap: { [key: string]: string } = {
    $: "$ - Cheap",
    $$: "$$ - Moderate",
    $$$: "$$$ - Expensive",
    $$$$: "$$$$ - Luxury",
  };

  return (
    <div className="my-4 bg-white border p-3 flex flex-col">
      <div className="flex flex-col lg:flex-row gap-2">
        <span className="border border-red-600 text-red-500 px-2 w-fit">
          Closed
        </span>
        <span>Mon - Fri, 12.00 PM - 09.00 PM</span>
      </div>
      <div className="flex gap-2">
        <span>Categories:</span>
        {business.categories.map((category) => {
          if (business.categories.length > 1)
            return <span>{category.title},</span>;
          return <span>{category.title}</span>;
        })}
      </div>
      <div className="flex gap-2">
        <span>Price Range:</span>
        <span>{priceMap[business.price]}</span>
      </div>
    </div>
  );
};

export default DescriptionSection;
