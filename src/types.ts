export type Business = {
  id: string;
  is_closed: boolean;
  name: string;
  image_url: string;
  review_count: number;
  rating: number;
  transaction: string[];
  price: string;
  categories: Categories[];
  coordinates: Coordinates[];
  location: Location;
  phone: string;
  display_phone: string;
};

export type Categories = {
  alias: string;
  title: string;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Location = {
  address1: string;
  city: string;
  zip_code: string;
  countery: string;
  state: string;
};
