import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import Card from "./Card";

type SearchBarProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  className?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ className, ...props }) => {
  return (
    <Card>
      <label className="relative block">
        <span className="inset-y-0 left-0 flex items-center absolute">
          <MagnifyingGlassIcon className="w-5 h-5 fill-slate-400" />
        </span>
        <input
          type="text"
          name="search"
          id="searchBox"
          className={`${className} border-b-2 border-gray-100 focus:outline-none w-full pl-6 placeholder:text-slate-400`}
          placeholder="Search..."
          {...props}
        />
      </label>
    </Card>
  );
};

export default SearchBar;
