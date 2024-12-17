import PropTypes from "prop-types";

import "./SearchBar.css";

function SearchBar({ handleSearchProduit, searchProduit }) {
  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="Search_Bar">
        <form onSubmit={handleSubmitSearch}>
          <input
            type="text"
            placeholder="Recherchez votre produit"
            onChange={handleSearchProduit}
            value={searchProduit}
          />
        </form>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  handleSearchProduit: PropTypes.func.isRequired,
  searchProduit: PropTypes.string.isRequired,
};

export default SearchBar;
