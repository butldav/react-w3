import React, { useState } from 'react';

export const NewSongForm = (props) => {
    const [songName, setSongName] = useState('');
    const [artist, setArtist] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(songName && artist) {
            props.addNewSong({songName, artist});
            setSongName('');
            setArtist('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div className='border p-3'>
            <h4>Add a new song</h4>
            <form onSubmit={onSubmit}>
                <div className='row'>
                    <div className='col-6'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='song name'
                            onChange={(e) => setSongName(e.target.value)}
                            value={songName}
                        />
                    </div>
                    <div className='col-6'>
                        <input 
                            type='text'
                            className='form-control'
                            placeholder='artist'
                            onChange={(e) => setArtist(e.target.value)}
                            value={artist}
                        />
                    </div>
                </div>
            <button type='submit' className='btn btn-primary'>Add Song</button> 
            </form>
        </div>
    )
}