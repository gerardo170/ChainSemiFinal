import React from "react";
import { ChainContext } from "../Context/ChainContext";
import './ChainSearch.css'

function ChainSearch() {
 const { searchValue, setSearchValue } = React.useContext(ChainContext);

const onSearchValueChange = (event) => {
  console.log(event.target.value);
  setSearchValue(event.target.value);
  };

    return [
        <input 
        className="ChainSearch"
        placeholder="Buscar Por Cedula"
        value={searchValue}
        onChange={onSearchValueChange}
         />,
         <p>{searchValue}</p>
    ];
}

export { ChainSearch };