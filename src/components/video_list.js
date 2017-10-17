import React from "react"

import VideoListItem from "./video_list_item"

const VideoList = ({video, onSelectVideo}) => {
  const videoItem = video.map((video) => {
    return <VideoListItem
      key={video.etag}
      video={video}
      onSelectVideo={onSelectVideo}/>
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItem}
    </ul>
  )
}

export default VideoList
