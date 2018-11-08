import React, { Component } from 'react';
import BookList from "../containers/book-list"
import BookDetail from '../containers/book-detail'

export default class App extends Component {
  render() {
    return (
      <div>
      <div>React Redux Book Sec</div>
      <div><BookList /></div>
      <div><BookDetail /></div>
      </div>
    );
  }
}
