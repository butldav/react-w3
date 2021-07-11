import React, { useState } from 'react';

export const NewPlaylistForm = ( props ) => {
    const [ playlistName, setPlaylistName ] = useState('');    

    const onSubmit = (e) => {
        e.preventDefault();
        if(playlistName) {    
            props.addPlaylist(playlistName);            
        } else {
            console.log('invalid input - playlist form');
        }
        setPlaylistName('');
    }

    return (
        <div className='border p-3'>
            <h4>Add a new playlist</h4>
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    className='form-control'
                    placeholder='playlist name'
                    onChange={(e) => setPlaylistName(e.target.value)}
                    value={playlistName}
                />
                <button type='submit' className='btn btn-primary'>Add Playlist</button>
                
            </form>
        </div>
    )
}

