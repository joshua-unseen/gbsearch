import React from "react";
import SearchBox from "../components/Search";
import Results from "../components/Results";

function Search() {
    return (
        <div>
            <p>Search page</p>
            <SearchBox />
            <Results /> 
        </div>
    );
}

export default Search;