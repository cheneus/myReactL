const selectBook = (book) => {
    // selectBook is the Action creator, returns an action
    // object with a type property. 
    console.log('A book has been selected', book.title);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

export default selectBook