import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ShuffleIcon } from './icons';

function Album() {
  const { id } = useParams()
  const [album, setAlbum] = useState([])
  const [songs, setSongs] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    // API REQ - GET ALBUM
    axios.get(`/get_album/${id}`)
      .then((res) => {
        setAlbum(res.data[0])
        // console.log("album "+album.album_name)
      }).catch(err => console.log(err))

    // API REQ - GET SONGS IN ALBUM
    axios.get(`/get_songs_album/${id}`)
      .then((res) => {
        setSongs(res.data) //error without .songs bc return type obj song: {s1},{s2}
        console.log("song  " + songs)
      }).catch(err => console.log(err))

  }, [id])

  const handleArtistClickByName = (artistName) => {
    navigate(`/artists/name/${artistName}`);
  };

  // useEffect(() => {
  //   console.log("album "+album)
  //   console.log("songs "+songs)
  // }, [album, songs])

  // id & album values rendered based on initial state...
  return (
    <div>
      {id !== undefined && album && songs ?
        <div>
          <div className="playlist-container">
            <header className="playlist-header">
              <img
                src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84e2e84b582cb99aeaf578d882"
                alt="Playlist cover"
                className="cover-image"
              />
              <div className="playlist-info">
                <span className="playlist-type">Public Playlist</span>
                <h1>{album.album_name}</h1>
                
                {/* <div className="creator-info">
                  <img src="/creator-avatar.jpg" alt="" className="creator-avatar" />
                  <button
                    className="song-artist"
                    onClick={() => handleArtistClickByName(playlist.creator)}
                  >
                    {playlist.creator}
                  </button>
                  <span className="stats">{playlist.stats}</span>
                </div> */}
              </div>
            </header>

            <div className="controls">
              <button className="play-button">▶</button>
              <button className="shuffle">
                <ShuffleIcon />
              </button>
            </div>

            {/* <SongList songs={playlist.songs} /> */}
          </div>
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
        <h1>Album not found</h1>
      }
    </div>
  )
}

export default Album