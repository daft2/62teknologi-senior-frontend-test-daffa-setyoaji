import { useEffect, useState } from "react";
import BusinessAPI from "../../api/BusinessAPI";
import BusinessesList from "../../components/BusinessesList";
import SearchBar from "../../components/SearchBar";
import useDebounce from "../../hooks/useDebounce";

type Props = {};

const Homepage = (props: Props) => {
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const getBusiness = () => {
    setIsLoading(true);
    BusinessAPI.get({ location: "Canada", term: debouncedSearchTerm })
      .then((response) => setBusinesses(response.data.businesses))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getBusiness();
  }, [debouncedSearchTerm]);

  return (
    <div className="h-screen bg-neutral-50 font-robotoMono font-bold tracking-tight">
      <div className="mx-8 py-12 lg:mx-auto max-w-6xl">
        <div className="flex flex-col gap-4">
          <SearchBar onChange={(e) => setSearchTerm(e.target.value)} />
          <BusinessesList isLoading={isLoading} businesses={businesses} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
