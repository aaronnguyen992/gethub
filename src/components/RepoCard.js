import React from "react";

function RepoCard({githubData}){
  return (
    <div className="repoCard">
      <p>{githubData.name}</p>
    </div>
  )
}

export default RepoCard;