import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Book = ({ book }) => {
    return (
        <div className='book single'>
            <Link to={`/editbook/${book.id}/edit`}>
                <h3>
                    {book.text}
                    <FaEdit />
                </h3>
                <p>{book.author}</p>
            </Link>

        </div>
    )
}

export default Book
