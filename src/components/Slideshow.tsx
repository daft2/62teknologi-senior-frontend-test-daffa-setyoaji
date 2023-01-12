import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

type Props = {
  photos: string[];
};

const Slideshow: React.FC<Props> = ({ photos }) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < photos.length - 1) setCurrent(current + 1);
    else setCurrent(0);
  };

  const handlePrev = () => {
    if (current <= 0) setCurrent(photos.length - 1);
    else setCurrent(current - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      handleNext();
    }, 3000);
  }, [current]);

  return (
    <div>
      <div className="flex h-[30rem] relative">
        {photos.map((photo, index) => (
          <img
            src={photo}
            alt="Business Photo"
            className={`${
              index !== current && "hidden"
            } w-full h-[30rem] object-cover rounded`}
          />
        ))}
        <button onClick={handlePrev}>
          <ChevronLeftIcon className="w-12 h-12 absolute left-0 text-gray-100 hover:ring-1 top-1/2 transform -translate-y-1/2" />
        </button>
        <button onClick={handleNext}>
          <ChevronRightIcon className="w-12 h-12 absolute right-0 text-gray-100 hover:ring-1 top-1/2 transform -translate-y-1/2" />
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
