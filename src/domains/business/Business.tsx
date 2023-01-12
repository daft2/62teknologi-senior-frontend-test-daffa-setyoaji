import { MapIcon, StarIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BusinessAPI from "../../api/BusinessAPI";
import { BusinessDetail } from "../../types";

type Props = {};

const MOCK: BusinessDetail = {
  id: "r_BrIgzYcwo1NAuG9dLbpg",
  alias: "pai-northern-thai-kitchen-toronto-5",
  name: "Pai Northern Thai Kitchen",
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/9QruaHywVEtolW9ELorHpA/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/pai-northern-thai-kitchen-toronto-5?adjust_creative=K7BtU2t5yX1d-iePmJkHgg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=K7BtU2t5yX1d-iePmJkHgg",
  phone: "+14169014724",
  display_phone: "+1 416-901-4724",
  review_count: 3337,
  categories: [
    {
      alias: "thai",
      title: "Thai",
    },
  ],
  rating: 4.5,
  location: {
    address1: "18 Duncan Street",
    address2: "",
    address3: "",
    city: "Toronto",
    zip_code: "M5H 3G8",
    country: "CA",
    state: "ON",
    display_address: ["18 Duncan Street", "Toronto, ON M5H 3G8", "Canada"],
  },
  coordinates: {
    latitude: 43.64784,
    longitude: -79.38872,
  },
  photos: [
    "https://s3-media3.fl.yelpcdn.com/bphoto/9QruaHywVEtolW9ELorHpA/o.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/9oI08tR28d0fMVg8mUXioA/o.jpg",
    "https://s3-media1.fl.yelpcdn.com/bphoto/35lAqXjHJac-WOOQz5yMmA/o.jpg",
  ],
  price: "$$",
};

const Business = (props: Props) => {
  let { businessId } = useParams();

  //   const [business, setBusiness] = useState<BusinessDetail | null>(null);
  //   const [isLoading, setIsLoading] = useState(true);
  const [business, setBusiness] = useState<BusinessDetail>(MOCK);
  const [isLoading, setIsLoading] = useState(false);

  const getBusiness = () => {
    setIsLoading(true);
    BusinessAPI.getSingle({
      id: businessId!,
    })
      .then((response) => {
        setBusiness(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  //   useEffect(() => {
  //     getBusiness();
  //   }, [businessId]);

  if (isLoading || business == null) return <div className="">Loading...</div>;

  const stars = business.rating * 20;

  return (
    <div className="mx-8 py-12 lg:mx-auto max-w-6xl">
      <div className="flex-col flex">
        <span className="text-3xl">{business.name}</span>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm">
              {business.location.address1}, {business.location.city},{" "}
              {business.location.state}
            </span>
            <span className="text-sm">
              {business.location.zip_code}, {business.location.country}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex flex-row items-center gap-2">
              <span>{business.rating}</span>
              <div className={`w-[${stars}px] overflow-hidden`}>
                <div className="w-fit flex">
                  <StarIcon className="w-5 h-5 fill-yellow-300" />
                  <StarIcon className="w-5 h-5 fill-yellow-300" />
                  <StarIcon className="w-5 h-5 fill-yellow-300" />
                  <StarIcon className="w-5 h-5 fill-yellow-300" />
                  <StarIcon className="w-5 h-5 fill-yellow-300" />
                </div>
              </div>
            </div>
            <a
              className="border border-gray-500 hover:bg-black hover:text-white hover:border-black rounded px-2 py-1 my-1 text-sm"
              target={"_blank"}
              href={`https://www.google.com/maps/search/?api=1&query=${business.coordinates?.latitude}%2C${business.coordinates?.longitude}`}
            >
              <div className="flex gap-2">
                <MapIcon className="w-5 h-5" />
                <span>See on Goole Maps</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <img
        src={business.photos[0]}
        alt="Business Photo"
        className="w-full h-[30rem] object-cover rounded"
      />
    </div>
  );
};

export default Business;
