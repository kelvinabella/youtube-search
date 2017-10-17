import React from "react"

const VideoListItem = ({video, onSelectVideo}) => {
  return (
    <li onClick={()=>onSelectVideo(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left"></div>
          <img src={video.snippet.thumbnails.default.url} className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
    </li>
  )

}

export default VideoListItem
