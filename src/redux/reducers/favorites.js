const defaultState = {
  books: [],
};

function favorites(state = defaultState, action) {
  switch (action.type) {
    case "SAVE_BOOK":
        let newState = {...state}
      let bookList = newState.books;
      if (bookList.some((book) => book.rank === action.book.rank)) {
        return {...state}
      } else {
        return {
        books: [...state.books, action.book],
        };
      }
    default:
      return state;
  }
}

export default favorites;
