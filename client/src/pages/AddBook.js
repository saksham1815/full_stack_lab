import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    publishedOn: '',
    genre: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/books', book)
      .then(() => navigate('/'));
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <input name="author" placeholder="Author" onChange={handleChange} required />
        <input name="publishedOn" type="date" onChange={handleChange} required />
        <input name="genre" placeholder="Genre" onChange={handleChange} required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddBook;
