import React from "react"

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ""
    }

  }

  onChangeInput (event) {
    this.setState({
      term: event
    })

    this.props.onSearchVideo(event)
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term}
          onChange={event => this.onChangeInput(event.target.value)}
        />
      </div>
    )
  }

}

export default SearchBar
