import React from "react";

function SearchBar({githubRepo, setGithubRepo}){
  const onChange = (e) => {
    setGithubRepo(e.target.value)
  }

  return (
    <div className="searchBar">
      <input 
        type="text" 
        placeholder="Search Github Repos" 
        onChange={(event) => {onChange(event)}} 
        onKeyUp={(event) => {onChange(event)}} 
        onPaste={(event) => {onChange(event)}} 
      />
    </div>
  )
}

export default SearchBar;