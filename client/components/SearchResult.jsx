import React from 'react'
import SearchItem from './SearchItem';

const SearchResult = ({results}) => {
    console.log(results);
  return (
    <div>
        <ul>
          {results?.map((result) => {
            return <SearchItem key={result.id} result={result}/>;
          })}
        </ul>
    </div>
  )
}

export default SearchResult