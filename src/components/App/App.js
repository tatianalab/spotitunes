// import logo from './logo.svg';
import React from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import tracksdata from './data.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchResults: tracksdata,
      playlistName: "Add a New Playlist",
      playlistTracks: [{
                          name: "Shower",
                          artist: "tatiana",
                          album: "YASSS",
                          id: 4},{
                          name: "SMontmartre",
                          artist: "200",
                          album: "EUR",
                          id:5},{
                          name: "Super ",
                          artist: "boilerplate",
                          album: "whuut",
                          id:6
                        }]
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)

  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
   if(tracks.find(savedTrack => savedTrack.id === track.id)){
    return ;
   }
   tracks.push(track);
   this.setState({playlistTracks:tracks})
  }

  removeTrack(track){
    let newPlaylist = this.state.playlistTracks.filter(song => song.id !== track.id)
    this.setState({
      playlistTracks: newPlaylist
    })
  }

  updatePlaylistName(name){
    this.setState({
      playlistName:name
    })
  }

  savePlaylist(){
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  search(term){
    console.log(term)
  }

  render(){
    return (
      <div>
        <h1>Spoti<span className="highlight">Tunes</span></h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}
                          onAdd={this.addTrack}
          />
          <Playlist playlistName={this.state.playlistName}
                    playlistTracks={this.state.playlistTracks}
                    onRemove={this.removeTrack}
                    onNameChange={this.updatePlaylistName}
                    onSave={this.savePlaylist}
          />
        </div>
        </div>
      </div>
  );
  }

}

export default App;
