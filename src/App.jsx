import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Search } from "./services/serch";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";

function App() {
  const { register,watch } = useForm();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const [noData, setNoData] = useState(false);

  // Handle search input change
  const handleSearchChange = async (e) => {
    const keywords = e.target.value.trim();



    if (keywords === '') {
      setResults([]);
      setVisible(false);
      setLoading(false);
      setNoData(false);  
      return;
    }

    try {
      setLoading(true);
      const searchResults = await Search("?search=" + keywords);

        setResults(searchResults.data);
        setVisible(true);
        setLoading(false);
        setError(null);
        setNoData(searchResults.data.length === 0);  

    } catch (error) {
      setError("Error fetching search results");
      setLoading(false);
    }


  };

  useEffect(() => {
    handleSearchChange
  },[watch])

  return (
     
    <div className="w-full h-full p-5 flex flex-col items-center">
    <SearchInput register={register} handleSearchChange={handleSearchChange} />
    {loading && <p>Loading...</p>}
    <SearchResults results={results} noData={noData}  visible={visible}/>
    {error && <p className="text-red-500">{error}</p>}
  </div>
  );
}

export default App;
