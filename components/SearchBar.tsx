"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const handleSubmit = () => {};
  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <div className="searchBar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
