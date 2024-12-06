import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Search() {
    const [albumSearch, setAlbumSearch] = useState('');
    const [artistSearch, setArtistSearch] = useState('');
    const [songSearch, setSongSearch] = useState('');
    const [songs, setSongs] = useState(null)
    // const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', { albumSearch, artistSearch, songSearch });
        <div>
            {console.log("displaying search results")}
            <h1>display Search Results here...</h1>
        </div>
        
        // API REQ - GET SONG
        // axios.get(`/get_song_title_artist_album/${albumSearch}/${artistSearch}/${songSearch}`)
        //     .then((res) => {
        //         setSongs(res.data)
        //         console.log("songs  " + songs)
        //         // console.log("id  " + id)
        //         // navigate("/song") //redirect to song page after submit

        //     }).catch(err => console.log(err))
    };

    function displaySearch() {
        return (
            <div>
                {console.log("displaying search results")}
                <h1>display Search Results here...</h1>
                {/* <h1>Search Results for Song {songSearch} in Album {albumSearch} by Arist {artistSearch}</h1>
            <div>
                {songs.map((song) => {
                    return (
                        <div key={songs.song_id} className="song-card">
                            <div className="song-info">
                                <h3>{song.song_name}</h3>
                                <p>{song.album_name}</p>
                                <p>{song.artist_name}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div> */}
            </div>
        )
    }

    return (
        <div className="search-page">
            <h1>Music Search</h1>
            <form onSubmit={handleSearch}>
                <div className="search-bar">
                    <label htmlFor="album-search">Search by Album:</label>
                    <input
                        type="text"
                        id="album-search"
                        value={albumSearch}
                        onChange={(e) => setAlbumSearch(e.target.value)}
                        placeholder="Enter album name"
                    />
                </div>
                <div className="search-bar">
                    <label htmlFor="artist-search">Search by Artist:</label>
                    <input
                        type="text"
                        id="artist-search"
                        value={artistSearch}
                        onChange={(e) => setArtistSearch(e.target.value)}
                        placeholder="Enter artist name"
                    />
                </div>
                <div className="search-bar">
                    <label htmlFor="song-search">Search by Song:</label>
                    <input
                        type="text"
                        id="song-search"
                        value={songSearch}
                        onChange={(e) => setSongSearch(e.target.value)}
                        placeholder="Enter song title"
                    />
                </div>
                <button type="submit" class="custom-button">Search</button>

            </form>
        </div>
    );
};
//     // const { id } = useParams()
//     const [songs, setSongs] = useState([])
//     const [albums, setAlbums] = useState([])
//     const [artists, setArtists] = useState([])
//     const [value, setValue] = useState('')

//     function searchSong() {
//         // API REQ - SEARCH SONG BY NAME
//         axios.get(`/get_songs_by_name/${value}`)
//             .then((res) => {
//                 setSongs(res.data)
//                 // console.log("ong"+songs[0].song_name)
//             }).catch(err => console.log(err))
//     }

//     return (
//         <div>
//         <h1>Search</h1>
//         <form>
//             <input type="text" placeholder="Enter a songname" value={value} onChange={(e) => setValue(e.target.value)} />
//             <select>
//                 <option value="name">Title</option>
//                 <option value="album">Album</option>
//                 <option value="artist">Artist</option>
//             </select>
//             <button type="submit" onClick={searchSong}>Search</button>
//         </form>
//         </div>
//     )
// }

export default Search