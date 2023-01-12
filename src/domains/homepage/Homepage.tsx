import { useEffect, useState } from "react";
import BusinessAPI from "../../api/BusinessAPI";
import AttributesFilter from "../../components/AttributesFilter";
import BusinessesList from "../../components/BusinessesList";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import useDebounce from "../../hooks/useDebounce";

type Props = {};

const Homepage = (props: Props) => {
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<{ attributes: string; offset: number }>({
    attributes: "",
    offset: 0,
  });
  const [pages, setPages] = useState<number>(1);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const getBusiness = () => {
    setIsLoading(true);
    BusinessAPI.get({
      location: "Canada",
      term: debouncedSearchTerm,
      filter: filter,
    })
      .then((response) => {
        setBusinesses(response.data.businesses);
        setPages(Math.ceil(response.data.total / 18));
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getBusiness();
  }, [debouncedSearchTerm, filter.attributes, filter.offset]);

  const handleFilterAttributes = (values: string[]) =>
    setFilter((prev) => ({ ...prev, attributes: values.toString() }));

  const handleChangePage = (value: number) => {
    if (value > 1) setFilter((prev) => ({ ...prev, offset: value * 18 }));
    else setFilter((prev) => ({ ...prev, offset: 0 }));
  };

  return (
    <div className="mx-8 py-12 lg:mx-auto max-w-6xl">
      <div className="flex flex-col gap-4">
        <SearchBar onChange={(e) => setSearchTerm(e.target.value)} />
        <AttributesFilter
          onSelect={(values) => handleFilterAttributes(values)}
        />
        <BusinessesList isLoading={isLoading} businesses={businesses} />
        <Pagination
          totalPages={pages}
          onChange={(value) => handleChangePage(value as number)}
        />
      </div>
    </div>
  );
};

export default Homepage;
