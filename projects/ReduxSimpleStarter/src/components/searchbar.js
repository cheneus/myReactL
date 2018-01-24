import React, {Component} from 'react';
// import React  from 'react'

// class SearchBar extends React.Component {
// start with functional then use class if only you need more functionality
class SearchBar extends Component {
	constructor (props) {
		super(props);
		
		this.state = {term: ''};
	}

	render() {
		return (
		<div>

		 <input 
		 	value = {this.state.term}

		 	// onChange={this.onInputChange}/>
		 	onChange = {event => this.setState({term : event.target.value})} />
		</div>
		// 
		// return <input onChange={event => console.log(event.target.value)} />
	)}

	// onInputChange(event) {
	// 	console.log(event.target.value);
	// 	 this.setState({term: event.target.value})
	// }
};

export default SearchBar;