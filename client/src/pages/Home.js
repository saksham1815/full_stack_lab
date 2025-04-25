import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(res => setBooks(res.data));
  }, []);

  const deleteBook = (id) => {
    axios.delete(`http://localhost:5000/api/books/${id}`)
      .then(() => setBooks(books.filter(book => book.id !== id)));
  }

  return (
    <div>
      <h1>Books</h1>
      <Link to="/add">Add New Book</Link>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.genre}) | Published: {book.publishedOn?.slice(0, 10)}
            <Link to={`/edit/${book.id}`}> Edit </Link>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
