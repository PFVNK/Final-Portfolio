import React, { useEffect, useState, useCallback } from 'react'

function Videos() {
  const [videos, getVideos] = useState()

  const fetchMyAPI = useCallback(async () => {
    let response = await fetch('http://localhost:3001/videos')
    response = await response.json()
    getVideos(response.reverse())
  }, [])

  useEffect(() => {
    fetchMyAPI()
  }, [fetchMyAPI])

  // useEffect(() => {
  //   if (videos) {
  //     return videos.filter(video => video.snippet.thumbnails.default !== undefined).map(video => {
  //       console.log(video)
  //     })
  //   }
  // })

  if (videos) {
    return (
      <div className='videos-container'>
        {videos.reverse().filter(video => video.snippet.thumbnails.high !== undefined).map((video, i) => {
          return <div key={i} className='video'>
            <img className='gallery-img' src={video.snippet.thumbnails.high.url} alt={'test'} />
            <div className='video-text-container'>
              <a href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}_channel=P-FVNKCODES`}><h4>{video.snippet.title}</h4></a>
              <p>{video.snippet.description}</p>
            </div>
          </div>
        })}
      </div>
    )
  } else {
    return null
  }
}

export default Videos
