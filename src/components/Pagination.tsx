import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  totalPages: number;
  className?: string;
  onChange: (value: number) => void;
};

const Pagination: React.FC<Props> = ({
  totalPages,
  className,
  onChange,
  ...props
}) => {
  const [current, setCurrent] = useState(1);

  const handleSelectPage = (value: number) => setCurrent(value);

  const handleNext = () => {
    if (current < totalPages) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 1) setCurrent(current - 1);
  };

  useEffect(() => {
    onChange(current);
  }, [current]);

  return (
    <div
      {...props}
      className={`${className} flex items-center justify-center gap-2`}
    >
      <Page onClick={handlePrev} disabled={current <= 1}>
        <ChevronLeftIcon
          className={`${
            current <= 1 ? "fill-gray-500" : "fill-blue-500"
          } w-5 h-5`}
        />
      </Page>
      {current > 2 && totalPages > 2 && (
        <Page onClick={() => handleSelectPage(current - 2)}>{current - 2}</Page>
      )}
      {current > 1 && totalPages > 1 && (
        <Page onClick={() => handleSelectPage(current - 1)}>{current - 1}</Page>
      )}
      <Page active>{current}</Page>
      {current + 1 < totalPages && (
        <Page onClick={() => handleSelectPage(current + 1)}>{current + 1}</Page>
      )}
      {current + 2 < totalPages && (
        <Page onClick={() => handleSelectPage(current + 2)}>{current + 2}</Page>
      )}
      <Page onClick={handleNext} disabled={current >= totalPages}>
        <ChevronRightIcon
          className={`${
            current >= totalPages ? "fill-gray-500" : "fill-blue-500"
          } w-5 h-5`}
        />
      </Page>
    </div>
  );
};

type PageType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  className?: string;
};

const Page: React.FC<PageType> = ({
  children,
  active = false,
  disabled = false,
  className,
  ...props
}) => (
  <button
    {...props}
    disabled={disabled}
    className={`${
      active ? "bg-blue-500 text-white" : "bg-white text-blue-500"
    } ${
      disabled ? "cursor-not-allowed" : "hover:ring-blue-200 hover:ring-1"
    } ${className} flex items-center justify-center shadow-inner cursor-pointer text-sm p-1 w-6 h-6`}
  >
    {children}
  </button>
);

export default Pagination;
