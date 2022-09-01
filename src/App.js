import {useEffect, useState} from 'react';
import './App.css';
import RepoCard from './components/RepoCard'
import SearchBar from './components/SearchBar'

function App() {
  const [githubRepo, setGithubRepo] = useState("")
  const [githubData, setGithubData] = useState(Object)

  useEffect(() => {
    fetchRepo();
  }, [githubRepo]);

  var githubRepoSearch = `https://api.github.com/search/repositories/${githubRepo}&sort=stars&order=desc`;

  const fetchRepo = async () => {
    const response = await fetch(githubRepoSearch);
    const json = await response.json();

    console.log(json)

    setGithubData({})
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar githubRepo={githubRepo} setGithubRepo={setGithubRepo} />
        <RepoCard githubData={githubData} />
      </header>
    </div>
  );
}

export default App;
