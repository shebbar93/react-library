import { BOOK_LIST_SUCCESS, BOOK_LIST_REQUEST, BOOK_LIST_FAIL, BOOK_DETAIL_REQUEST, BOOK_DETAIL_SUCCESS, BOOK_DETAIL_FAIL, BOOK_DETAIL_RESET } from "../Constants/BooksConstants"


export const booksReducer = (state = { books: [] }, action) => {
    switch (action.type) {
        case BOOK_LIST_REQUEST:
            return { books: [] }
        case BOOK_LIST_SUCCESS:
            return { books: action.payload }
        case BOOK_LIST_FAIL:
            return { books: [] }
        default:
            return state
    }
}

export const bookDetailReducer = (state = { book: {} }, action) => {
    switch (action.type) {
        case BOOK_DETAIL_REQUEST:
            return { ...state }
        case BOOK_DETAIL_SUCCESS:
            return { book: action.payload }
        case BOOK_DETAIL_FAIL:
            return { ...state }
        case BOOK_DETAIL_RESET:
            return {}
        default:
            return state
    }
}