import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ handleCitySubmit, query, setQuery }) => {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="searchCity"
        placeholder="Search city..."
        onChange={handleInputChange}
        value={query}
      />
      <br />
      <button className="searchButton" onClick={handleCitySubmit}>
        Search
      </button>
    </>
  );
};

SearchForm.propTypes = {
  handleCitySubmit: PropTypes.func.isRequired,
};

export default SearchForm;
