import React from 'react';
import { NewSongForm } from './NewSongForm';

export const Playlist = (props) => {
    const { playlist, updatePlaylist } = props;
    
    const deleteSong = (songId) => {
        const updatedPlaylist = {
            ...playlist,
            songs: playlist.songs.filter((x) => x._id !== songId)
        };
        updatePlaylist(updatedPlaylist);
    }

    const addNewSong = (song) => {
        let songIndex = 1;
        if(playlist.songs.length > 0) { 
            songIndex = (playlist.songs[playlist.songs.length - 1]['_id'] + 1);
        }
        let newSongs = {...song, _id: songIndex}
        updatePlaylist({...playlist, songs: [...playlist.songs, newSongs]});
    }
    
    const songs = () => (
            <ul className='list-group'>
            { 
            playlist.songs.map((song, index) => (
                <li key={index} className='list-group-item'>
                    <span>{`Song: ${song.songName} - Artist: ${song.artist}`}</span>&nbsp;
                    <button onClick={(e) => deleteSong(song._id)} className='btn btn-primary'>Delete</button>
                </li>
            ))
            }
        </ul>
        )

    return (
        <div className='border p-3'>
            <h3>
                {playlist.playlistName}&nbsp;
                <button
                    className='btn btn-primary'
                    type='button'
                    onClick={(e) => { props.deletePlaylist(playlist._id) }}
                >
                    Delete
                </button>
            </h3>
            {
                songs({ songs, playlistId: playlist._id, deleteSong})
            }

            <NewSongForm addNewSong={addNewSong} />            
        </div>
    );
}