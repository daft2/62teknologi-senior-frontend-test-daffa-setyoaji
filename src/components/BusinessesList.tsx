import React from "react";
import { useNavigate } from "react-router-dom";
import { Business, Categories } from "../types";

type Props = {
  className?: string;
  businesses: Business[];
  isLoading: boolean;
};

const BusinessesList: React.FC<Props> = ({ businesses, isLoading }) => {
  if (isLoading)
    return (
      <div className="w-full h-[30rem] flex items-center justify-center">
        <span className="text-2xl animate-pulse">Loading...</span>
      </div>
    );

  if (businesses.length < 1)
    return (
      <div className="w-full h-[30rem] flex items-center justify-center">
        <span className="text-2xl">Business not found.....</span>
      </div>
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {businesses.map((business) => (
        <Item data={business} />
      ))}
    </div>
  );
};

const Item = ({ data }: { data: Business }) => {
  const navigate = useNavigate();
  const handleNavigate = () =>
    navigate(`/${data.id}`, { state: { businessId: data.id } });

  return (
    <div
      onClick={handleNavigate}
      className="flex flex-col bg-white rounded overflow-hidden relative shadow cursor-pointer hover:scale-105 duration-300"
    >
      <img
        src={data.image_url}
        alt="Business Image"
        className="object-cover h-[10rem]"
      />
      <span className="absolute top-[8rem] rounded-r bg-white px-2">
        {data.price}
      </span>
      <div className="flex flex-col p-2 gap-4 h-full">
        <div className="flex flex-col">
          <span className="text-lg truncate whitespace-nowrap">
            {data.name}
          </span>
          <span className="text-sm text-gray-500 truncate whitespace-nowrap">
            {data.location.address1}, {data.location.city},{" "}
            {data.location.state}
          </span>
        </div>
        <div className="flex flex-wrap whitespace-nowrap gap-2">
          {data.categories.map((category: Categories) => (
            <>
              <span className="border rounded p-2 text-xs">
                {category.title}
              </span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessesList;
