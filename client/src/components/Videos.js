import React, { useEffect, useState, useCallback } from 'react'
import YouTube from 'react-youtube'

function Videos() {
  const [videos, getVideos] = useState()

  const fetchMyAPI = useCallback(async () => {
    let response = await fetch('https://final-personal-portfolio.herokuapp.com/videos')
    response = await response.json()
    getVideos(response.reverse())
  }, [])

  useEffect(() => {
    fetchMyAPI()
  }, [fetchMyAPI])

  if (videos) {
    console.log(videos)
    return (
      <div className='videos-container'>
        {videos.filter(video => video.snippet.thumbnails.high !== undefined).map((video, i) => {
          return <div key={i} className='video'>
            <YouTube className='video-iframe' videoId={video.snippet.resourceId.videoId} />
            <div className='video-text-container'>
              <a href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}_channel=P-FVNKCODES`}><h4>{video.snippet.title}</h4></a>
              <p>{video.snippet.description}</p>
            </div>
          </div>
        })
        }
      </div>
    )
  } else {
    return null
  }
}

export default Videos


// {
//   videos.filter(video => video.snippet.thumbnails.high !== undefined).map((video, i) => {
//     return <div key={i} className='video'>
//       <img className='gallery-img' src={video.snippet.thumbnails.high.url} alt={'test'} />
//       <div className='video-text-container'>
//         <a href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}_channel=P-FVNKCODES`}><h4>{video.snippet.title}</h4></a>
//         <p>{video.snippet.description}</p>
//       </div>
//     </div>
//   })
// }