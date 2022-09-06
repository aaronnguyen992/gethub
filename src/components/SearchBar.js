import React from "react";

function SearchBar({githubRepo, setGithubRepo}){
  const onChange = (e) => {
    e.preventDefault();
    setGithubRepo(e.target.elements.search.value)
  }

  return (
    <form className="repoSearch" onSubmit={(event) => {onChange(event)}}>
      <input name="search" type="text" placeholder="Type in a user here" />
      <button>Search</button>
    </form>
    
  )
}

export default SearchBar;