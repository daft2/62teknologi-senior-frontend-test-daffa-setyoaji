import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Review } from "../types";

type Props = {
  reviews: Review[] | null;
  isLoading: boolean;
};

const ReviewSection: React.FC<Props> = ({ reviews, isLoading }) => {
  if (isLoading) return <div className="">Loading...</div>;
  if (reviews === null) return <div className="">Reviews not found...</div>;

  return (
    <div className="my-4">
      <span>See what our customers say about us..</span>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {reviews.map((review) => {
          const reviewStar = review.rating * 20;

          return (
            <div className="bg-gray-200 rounded p-4 flex flex-col">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col lg:items-end">
                  <div className="flex w-full justify-between items-center">
                    <span>{review.user.name}</span>
                    <span className="text-xs">{review.time_created}</span>
                  </div>
                  <div className="flex w-full flex-row items-center gap-2">
                    <div className={`w-[${reviewStar}px] overflow-hidden`}>
                      <div className="w-fit flex">
                        <StarIcon className="w-5 h-5 fill-yellow-300 stroke-2 stroke-black" />
                        <StarIcon className="w-5 h-5 fill-yellow-300 stroke-2 stroke-black" />
                        <StarIcon className="w-5 h-5 fill-yellow-300 stroke-2 stroke-black" />
                        <StarIcon className="w-5 h-5 fill-yellow-300 stroke-2 stroke-black" />
                        <StarIcon className="w-5 h-5 fill-yellow-300 stroke-2 stroke-black" />
                      </div>
                    </div>
                  </div>
                </div>
                <p>"{review.text}"</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSection;
