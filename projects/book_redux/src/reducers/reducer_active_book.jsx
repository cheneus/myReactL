// const ActiveBook = (state = null, action) => {
//     // state of current reducer
//     switch(action.type) {
//         case 'BOOK_SELECTED':
//             return action.payload;
//     }

//     return state;
// }

// export default ActiveBook

export default (state = null, action) => {
    // state of current reducer
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}
