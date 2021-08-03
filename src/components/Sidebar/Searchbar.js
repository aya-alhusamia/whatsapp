const SearchBar = (props) => {
  return (
    <input
      onChange={(event) => props.setQuery(event.target.value) }
      placeholder="Search or start new chat"
      type="text"
    />
  );
};

export default SearchBar;
