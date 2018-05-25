import React, {Component} from "react";
import {connect} from "react-redux";
import selectBook from '../actions/index';
import {bindActionCreators} from 'redux'

class BookDetail extends Component {

	render() {
		
            if(!this.props.book) {
                return <div>Select Book to get started</div>
            }
            return (
                <div>
                <h3>Selected Book Details: </h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
                </div>
		);
	}
}

// takes application state return it as props
const mapStateToProps = (state) => {
	return {
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);