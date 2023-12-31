import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4 ml-10">
      <input
        className="form-control"
        placeholder="Type to search..."
        value={props.searchValue}
        onChange={(event) => props.setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
