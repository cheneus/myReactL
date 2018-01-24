import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCM93KIfaA-eFD_DvD1oGw7ThPvaKUWbHM';

// create the component
// one component per file
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'cute dogs'}, (videos) => {
		this.setState({videos})
		})
	}

	render() {
		return (
		<div> 
			<SearchBar />
			<VideoList videos={this.state.videos} />
		</div>
	)}
}

// insert generated HTML in the page(DOM)
// wrap in jsx syntax to create component
ReactDOM.render(<App />, document.querySelector('.container'));