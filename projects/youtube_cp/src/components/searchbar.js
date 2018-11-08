import React, { Component } from 'react';
// class SearchBar extends React.Component {
// start with functional then use class if only you need more functionality
class SearchBar extends Component {
	state = { term: '' };

	render() {
		return (
			<div className='search-bar'>
				<input
					placeholder='type to search'
					value={this.state.term}
					// onChange={this.onInputChange}/>
					// onChange={event => this.setState({term:event.target.value})}
					onChange={event => this.onInputChange(event.target.value)} 
					/>
			</div>
		)
	}
	// {handle or on}InputChange 
	onInputChange(event) {
		this.setState({ term: event })
		this.props.onSearchTermChange(this.state.term)
	}
};

export default SearchBar;