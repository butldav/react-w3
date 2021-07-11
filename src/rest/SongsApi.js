const PlaylistApiUrl = "https://60ea760b5dd7ff0017b39779.mockapi.io/playlists";

class PlaylistApi {
    get = async () => {
        try{
            const resp = await fetch(PlaylistApiUrl);
            const json = await resp.json();
            return json;
        } catch (e) {
            console.log('Error fetching playlists: ', e);
        }        
    }

    put = async (playlist) => {
        try {
            const resp = await fetch(`${PlaylistApiUrl}/${playlist._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(playlist)
            });
            console.log(resp);
            return await resp.json();
        } catch(e) {
            console.log(`Error updating playlist with id ${playlist._id}`, e);
        }
    }

    post = async (playlist) => {
        try {
            const resp = await fetch(PlaylistApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(playlist)
            });
            return await resp.json();            
        } catch(e) {
            console.log('Error adding new playlist', e);
        }
    }

    delete = async (playlistId) => {
        console.log(`Time to delete ${playlistId}!`);
        try {
            const resp = await fetch(`${PlaylistApiUrl}/${playlistId}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });
        } catch(e) {
            console.log(`Error deleting playlist with id ${playlistId}`, e);
        }
    }

}

export const playlistApi = new PlaylistApi();

