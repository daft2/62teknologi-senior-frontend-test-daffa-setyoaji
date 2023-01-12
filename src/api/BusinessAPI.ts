import axios from "../utils/Axios";

const BusinessAPI = {
  get: async ({
    location,
    term,
    filter,
  }: {
    location?: string;
    term?: string;
    filter: { attributes: string };
  }) => {
    let params = {
      sort_by: "best_match",
      limit: 18,
      location: location,
      term: term,
      ...filter,
    };

    const data = await axios.get("/search", {
      params: params,
    });

    return data;
  },
  getSingle: async ({ id }: { id: string }) => {
    const data = await axios.get(`/${id}`);

    return data;
  },
  getReviews: async ({ id }: { id: string }) => {
    // https://api.yelp.com/v3/businesses/
    const data = await axios.get(`/${id}/reviews`);

    return data;
  },
};

export default BusinessAPI;
