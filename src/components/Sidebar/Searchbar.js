const SearchBar = (props) => {
  return (
    <buttom
      onChange={(event) => props.setQuery(event.target.value) }
      placeholder="Search"
    />
  );
};

export default SearchBar;
