import React from "react";

function RepoCard({githubData}){
  return (
    <article className="repoCard">
      <h2 className="repoName"><a href={githubData.url}>{githubData.name}</a></h2>
      <div className="repoInfo">
        {githubData.homepage ? (<p><strong>Homepage:</strong> <a href={githubData.homepage}>{githubData.homepage}</a></p>) : null}
        {githubData.language ? (<p><strong>Language:</strong> {githubData.language}</p>) : null}
        <p><strong>Stargazers:</strong> {githubData.stargazers_count}</p>
      </div>
    </article>
  )
}

export default RepoCard;