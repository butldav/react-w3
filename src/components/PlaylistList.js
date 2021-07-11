import React from 'react';
import { Playlist } from './Playlist';
import { playlistApi } from '../rest/SongsApi';
import { NewPlaylistForm } from './NewPlaylistForm';

export default class PlaylistList extends React.Component {
    state = {
        playlists: []
    };

    componentDidMount() {
        this.fetchPlaylists();
    }

    fetchPlaylists = async () => {
        const playlists = await playlistApi.get();
        this.setState({ playlists });
    }
    
    updatePlaylist = async(updatedPlaylist) => {
        await playlistApi.put(updatedPlaylist);
        this.fetchPlaylists();
    }

    addPlaylist = async(newPlaylistName) => {
        let newPlaylist = {
            playlistName: newPlaylistName,
            songs: []
        }
        await playlistApi.post(newPlaylist);
        this.fetchPlaylists();
    }

    deletePlaylist = async(playlistId) => {
        await playlistApi.delete(playlistId);
        this.fetchPlaylists();        
    }

    render() {
        return (
            <div className='playlist-list col-sm'>
                <NewPlaylistForm addPlaylist={this.addPlaylist} />
                {this.state.playlists.map((playlist) => (
                    <Playlist
                        playlist={playlist}
                        key={playlist._id}
                        updatePlaylist={this.updatePlaylist}
                        deletePlaylist={this.deletePlaylist}
                    />
                ))}               
            </div>
        )
    }
}

