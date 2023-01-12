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
  address2: string;
  address3: string;
  city: string;
  country: string;
  display_address: string[];
  state: string;
  zip_code: string;
};

export type FilterOption = {
  label: string;
  value: string | number | null;
};

export type BusinessDetail = {
  alias: string;
  categories: Categories[];
  coordinates: Coordinates;
  display_phone: string;
  distance?: number;
  id: string;
  image_url: string;
  is_claimed: boolean;
  is_closed: boolean;
  location: Location;
  name: string;
  phone: string;
  photos: string[];
  price: string;
  rating: number;
  review_count: number;
  url: string;
  attributes?: {
    business_temp_closed: number;
    outdoor_seating: boolean;
  };
  messaging?: {
    url: string;
    use_case_text: string;
  };
};

export type Review = {
  id: string;
  url?: string;
  text: string;
  rating: number;
  time_created: string;
  user: {
    id: string;
    profile_url?: string;
    image_url?: string;
    name: string;
  };
};
