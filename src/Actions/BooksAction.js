import axios from 'axios'
import { BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAIL, BOOK_DETAIL_FAIL, BOOK_DETAIL_REQUEST, BOOK_DETAIL_SUCCESS } from '../Constants/BooksConstants'


export const listBooks = () => async (dispatch) => {
    try {
        dispatch({ type: BOOK_LIST_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/books`)
        dispatch({
            type: BOOK_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: BOOK_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const createBook = (bookInfo) => async (dispatch) => {
    try {
        await axios.post(`http://localhost:5000/books`, bookInfo)
    } catch (error) {
        dispatch({
            type: BOOK_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}

export const updateBook = (bookInfo, id) => async (dispatch) => {
    try {
        await axios.put(`http://localhost:5000/books/${id}`, bookInfo)
    } catch (error) {
        dispatch({
            type: BOOK_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}
export const deleteBook = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:5000/books/${id}`)
    } catch (error) {
        dispatch({
            type: BOOK_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}

export const getBookDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: BOOK_DETAIL_REQUEST })

        const { data } = await axios.get(`http://localhost:5000/books/${id}`)
        dispatch({
            type: BOOK_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: BOOK_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}

export const searchBook = (text) => async (dispatch) => {
    try {
        dispatch({ type: BOOK_LIST_REQUEST })

        const { data } = await axios.get(`http://localhost:5000/books/?text_like=${text}`)
        dispatch({
            type: BOOK_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: BOOK_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}