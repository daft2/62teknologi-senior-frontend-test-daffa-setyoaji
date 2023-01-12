import axios from "../utils/Axios";

const BusinessAPI = {
  get: async ({ location, term }: { location?: string; term?: string }) => {
    const params = {
      sort_by: "best_match",
      limit: 18,
      location: location,
      term: term,
    };

    const data = await axios.get("/search", {
      params: params,
    });

    return data;
  },
};

export default BusinessAPI;
