import { MapIcon, StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BusinessAPI from "../../api/BusinessAPI";
import DescriptionSection from "../../components/DescriptionSection";
import ReviewSection from "../../components/ReviewSection";
import Slideshow from "../../components/Slideshow";
import { BusinessDetail, Review } from "../../types";

const Business = () => {
  let { businessId } = useParams();

  const [business, setBusiness] = useState<BusinessDetail | null>(null);
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [isDetailLoading, setIsDetailLoading] = useState(true);
  const [isReviewLoading, setIsReviewLoading] = useState(true);

  const getBusiness = () => {
    setIsDetailLoading(true);
    BusinessAPI.getSingle({
      id: businessId!,
    })
      .then((response) => {
        setBusiness(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsDetailLoading(false));
  };

  const getReviews = () => {
    setIsReviewLoading(true);
    BusinessAPI.getReviews({ id: businessId! })
      .then((response) => setReviews(response.data.reviews))
      .catch((error) => console.error(error))
      .finally(() => setIsReviewLoading(false));
  };

  useEffect(() => {
    getBusiness();
    getReviews();
  }, [businessId]);

  if (isDetailLoading || business == null)
    return <div className="">Loading...</div>;

  const stars = business.rating * 20;

  return (
    <div className="mx-8 py-12 lg:mx-auto max-w-6xl">
      <div className="flex-col flex">
        <span className="text-3xl">{business.name}</span>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm">
              {business.location.address1}, {business.location.city},{" "}
              {business.location.state}
            </span>
            <span className="text-sm">
              {business.location.zip_code}, {business.location.country}
            </span>
          </div>
          <div className="flex flex-col lg:items-end">
            <div className="flex flex-row items-center gap-2">
              <span>{business.rating}</span>
              <div className={`w-[${stars}px] overflow-hidden`}>
                <div className="w-fit flex">
                  <StarIcon className="w-5 h-5 fill-yellow-300 stroke-2 stroke-black" />
                  <StarIcon className="w-5 h-5 fill-yellow-300 stroke-2 stroke-black" />
                  <StarIcon className="w-5 h-5 fill-yellow-300 stroke-2 stroke-black" />
                  <StarIcon className="w-5 h-5 fill-yellow-300 stroke-2 stroke-black" />
                  <StarIcon className="w-5 h-5 fill-yellow-300 stroke-2 stroke-black" />
                </div>
              </div>
            </div>
            <a
              className="border border-gray-500 hover:bg-black hover:text-white hover:border-black rounded px-2 py-1 my-1 text-sm"
              target={"_blank"}
              href={`https://www.google.com/maps/search/?api=1&query=${business.coordinates?.latitude}%2C${business.coordinates?.longitude}`}
            >
              <div className="flex items-center w-full justify-center gap-2">
                <MapIcon className="w-5 h-5" />
                <span>See on Goole Maps</span>
              </div>
            </a>
          </div>
        </div>
        <Slideshow photos={business.photos} />
        <DescriptionSection business={business} />
        <ReviewSection reviews={reviews} isLoading={isReviewLoading} />
      </div>
    </div>
  );
};

export default Business;
