import React from "react";

type CardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={`bg-white p-6 rounded-lg shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
