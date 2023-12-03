import { useState } from "react";
import customFetch from "../utils/customFetch";

const SearchBar = ({setResults}) => {
  const [input , setInput] = useState("");
  const fetchData = async (value) => {
    if (value !== ''){
      const { data } = await customFetch.post('/cars/search' ,  {searchCar:value});
      const {cars} = data;
      const results = cars.filter((cars) => {
        return cars.name
      })
      setResults(results)
    } else{
      setResults(null)
    }
    
  }
  const handleChange = ( value ) => {
    setInput(value)
    fetchData(value)
  }
  
  return (
    <div>
      <div>
        <input type="text" placeholder="Search.." value={input} onChange={ (e) => handleChange(e.target.value) } className="form-control"/>
      </div>
      
    </div>
  );
};

export default SearchBar;
