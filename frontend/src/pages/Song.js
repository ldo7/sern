import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Song() {
  const { id } = useParams()
  const [songs, setSongs] = useState(null)
  const [rating, setRating] = useState(null)

  useEffect(() => {

    // API REQ - GET SONG
    axios.get(`/get_songs/${id}`)
      .then((res) => {
        setSongs(res.data[0])
        console.log("songs  " + songs)
        console.log("id  " + id)
      }).catch(err => console.log(err))

    // API REQ - GET SONG RATING
    axios.get(`/get_song_rating/${id}`)
      .then((res) => {
        setRating(res.data[0])
        console.log("rating  " + rating)
        // error, cannot render, object, only primitives or arrays
      }).catch(err => console.log(err))
  }, [id])

  // pronlem 2nd axios call not returning anything
  // useEffect(() => {
  //   console.log("re-render song  " + songs)
  //   console.log("re-render rating  " + rating)
  // }, [songs, rating])

  return (
    <div>
      <p>Rate this song</p>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      {id !== undefined && songs && rating ?
        <div>
          <h1>{songs.song_name}</h1>
          <p>Avg rating:{rating}</p>
          <p>Comments</p>
        </div>
        :
        <h1>Song not found</h1>
      }
    </div>
  )
}

export default Song