import React, { useEffect, useState } from 'react'
import Book from './Book'
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa'
import { listBooks, searchBook } from '../Actions/BooksAction';
import { Link } from 'react-router-dom';
import Button from './Button';
import { BOOK_DETAIL_RESET } from '../Constants/BooksConstants';

const Books = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('')
    const bookList = useSelector(state => state.books)
    const { books } = bookList

    useEffect(() => {
        dispatch({
            type: BOOK_DETAIL_RESET
        })
        dispatch(listBooks())
    }, [dispatch])

    const searchBookHandler = (e) => {
        e.preventDefault()
        dispatch(searchBook(searchText))
    }
    return (
        <>
            <form className="search" onSubmit={searchBookHandler}>
                <input type='text' placeholder="Search..." className="searchTerm" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="searchButton"><FaSearch /></button>
            </form>

            {books && books.length ? books.map(x => (<Book book={x} key={x.id} />)) : "No books to display"}
            <Link to={`/addbook`}>
                <Button text='Add Book' />
            </Link>
        </>
    )
}

export default Books
