import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const [albumSearch, setAlbumSearch] = useState('');
  const [artistSearch, setArtistSearch] = useState('');
  const [songSearch, setSongSearch] = useState('');
  const [songs, setSongs] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', { albumSearch, artistSearch, songSearch });

    // API REQ - GET SONG
    axios.get(`/get_song_title_artist_album/${albumSearch}/${artistSearch}/${songSearch}`)
      .then((res) => {
        setSongs(res.data)
        console.log("songs  " + songs) //prints prev value bc async state updates...
        // console.log("id  " + id)
        // navigate("/song") //redirect to song page after submit

      }).catch(err => console.log(err))

  };

  useEffect(() => {
    console.log("songs  " + songs)
  }, [songs])

  return (
    <div>
      <h1>Home</h1>
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
      {songs ?
        <div>
          {console.log("displaying search results")}
          <h1>display search results here...</h1>
          {songs.map((song) => {
            return (
              <div key={songs.song_id}>
                <p>{song.song_name}</p>
              </div>
            )
          })
          }
        </div>
        :
        <p>no search results</p>
      }
    </div>
  )
}

export default Home