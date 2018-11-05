import ReactDOM from 'react-dom';
import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import youtube from '../config'

// create the component
// one component per file
class App extends Component {
	// constructor(props) {
	// 	super(props);

	state = {
		videos: [],
		selectedVideo: null
	};

	componentWillMount() {
		this.videoSearch("pokemon")
	}

	videoSearch = (term) => {
		// keys comes from the config.js
		YTSearch({ key: youtube, term: term }, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		})
	}

	render() {
		// delay the function
		const videoSearch = _.debounce((term) => {
			this.videoSearch(term)
		}, 500)

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<div className='row'>
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList
						onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
						videos={this.state.videos} />
				</div>
			</div>
		)
	}
}

// insert generated HTML in the page(DOM)
// wrap in jsx syntax to create component
ReactDOM.render(<App />, document.querySelector('.container'));