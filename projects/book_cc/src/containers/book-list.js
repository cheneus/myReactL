import React, {Component} from "react";
import {connect} from "react-redux";
import selectBook from '../actions/index';
import {bindActionCreators} from 'redux'

class BookList extends Component {

	renderList() {
		return this.props.books.map((book)=> {
			return (
				<li 
					className="list-group-item" 
					key={book.title}
					onClick={()=> this.props.selectBook(book)} 
				>
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

// takes application state return it as props
const mapStateToProps = (state) => {
	return {
		books: state.books
	}
}

// Anything returned from this function will be props in the BookList
const mapDispatchToProps = (dispatch) => {
	// when selectBook is call, the result should be passed to reducer
	return bindActionCreators({selectBook: selectBook}, dispatch);
	// bindAction is used to pass it thru the redux
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);