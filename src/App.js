import {useEffect, useState} from 'react';
import './App.css';
import RepoCard from './components/RepoCard'
import SearchBar from './components/SearchBar'
import { octokit } from './util/octokit';

function App() {
  const [githubRepo, setGithubRepo] = useState("facebook")
  const [githubData, setGithubData] = useState([])

  useEffect(() => {
    fetchData();
  }, [githubRepo]);

  const fetchData = async() => {
    // Receiving data incorrectly when attempting Facebook?
    await octokit.request (
      'GET /users/{githubRepo}/repos?sort=stars&direction=asc', {
        githubRepo: githubRepo
      }).then(res => {
        const content = res;
        setGithubData(content.data)
      }).catch(err => setGithubData([]));    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>GEThub</h1>
        <p>Get a list of repos by user!</p>
      </header>
      <section className="repoList">
        <SearchBar githubRepo={githubRepo} setGithubRepo={setGithubRepo} />
        <p className="repoResults">Showing {githubData.length} results for {githubRepo}</p>
        {
          githubData === []
          ? (<p>No Users Found</p>)
          : githubData
            // Attempt to sort repo by descending order
            .sort((a, b) => a.stargazers_count < b.stargazers_count ? 1 : -1)
            // Mapping data to a general card
            .map((item) => (<RepoCard githubData={item} key={item.id} />))
        }
      </section>
    </div>
  );
}

export default App;
