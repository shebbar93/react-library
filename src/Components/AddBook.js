import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createBook, getBookDetail, updateBook, deleteBook } from '../Actions/BooksAction'

const AddBook = ({ history, match }) => {
    const bookId = match ? match.params.id : null

    const dispatch = useDispatch()
    const [newBook, setNewBook] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')

    const bookDetails = useSelector((state) => state.bookInfo)
    const { book } = bookDetails

    useEffect(() => {
        if (bookId && book === undefined) {
            dispatch(getBookDetail(bookId))
        }
        if (book) {
            book.description && setDescription(book.description)
            book.author && setAuthor(book.author)
            book.text && setNewBook(book.text)
        }
    }, [dispatch, bookId, book])

    const onSaveHandler = (e) => {
        e.preventDefault()
        if (newBook === '') {
            alert('Please Enter the book name.')
            return
        }
        else if (bookId) {
            let bookObj = {}
            newBook && (bookObj.text = newBook);
            description && (bookObj.description = description)
            author && (bookObj.author = author)
            dispatch(updateBook(bookObj, bookId))
            history.push('/')
        }
        else {
            let bookObj = {}
            bookObj.text = newBook;
            description && (bookObj.description = description)
            author && (bookObj.author = author)
            dispatch(createBook(bookObj))
            history.push('/')
        }

    }
    const onDeleteHandler = (e) => {
        e.preventDefault()
        if (window.confirm('Are you sure you want to delete the book.?')) {
            dispatch(deleteBook(bookId))
            history.push('/')
        }
    }
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Add a book</label>
                <input
                    type='text'
                    placeholder='Book name'
                    value={newBook}
                    onChange={(e) => setNewBook(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Author</label>
                <input
                    type='text'
                    placeholder='Author'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <textarea
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <Link to={`/`}>
                <input type='submit' value='Cancel' className='btn' />
            </Link>
            <input type='submit' value={bookId ? 'Update Book' : 'Save Book'} className='btn' onClick={onSaveHandler} />
            {bookId && <input type='submit' value={'Delete Book'} className='btn' onClick={onDeleteHandler} />}
        </form>
    )
}

export default AddBook
