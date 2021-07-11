import React, { Component } from 'react';
import PlaylistList from './components/PlaylistList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Playlist Creator</h1>
        <PlaylistList />
      </div>
    )
  }  
}

export default App;
