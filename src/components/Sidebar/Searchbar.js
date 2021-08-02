const SearchBar = (props) => {
  return (
    // What is buttom?
    <buttom
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder="Search"
    />
  );
};

export default SearchBar;
