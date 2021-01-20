// import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

function App() {
  return (
    <div>
      <h1>Spoti<span className="highlight">Tunes</span></h1>
    <div className="App">
      <SearchBar />
    <div className="App-playlist">
      <SearchResults />
      <Playlist />
    </div>
  </div>
</div>
  );
}

export default App;
