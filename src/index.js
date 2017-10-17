import React from "react"
import ReactDOM from "react-dom"
import YTSearch from "youtube-api-search"
import _ from "lodash"

import SearchBar from "./components/search_bar"
import VideoDetail from "./components/video_detail"
import VideoList from "./components/video_list"

const API_KEY = "AIzaSyC0dxF65M8bN3vAPfB_iIQbE3kTxqnQJuU"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      video: [],
      selectedVideo: null
    }

    this.onSearchVideo("cats")
  }

  onSearchVideo(term) {
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        video: data,
        selectedVideo: data[0]
      })
    })
  }

  onSelectVideo(video) {
    this.setState({
      ...this.state,
      selectedVideo: video
    })
  }

  render() {

    const onSearchVideo = _.debounce(term => {this.onSearchVideo(term)}, 300)

    return (
      <div>
        <SearchBar onSearchVideo={onSearchVideo}/>
        <VideoDetail selectedVideo={this.state.selectedVideo} />
        <VideoList video={this.state.video}
          onSelectVideo={selectedVideo => this.onSelectVideo(selectedVideo)}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector(".container"))
