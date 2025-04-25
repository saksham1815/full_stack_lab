import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    publishedOn: '',
    genre: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${id}`)
      .then(res => setBook(res.data));
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/books/${id}`, book)
      .then(() => navigate('/'));
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={book.title} placeholder="Title" onChange={handleChange} required />
        <input name="author" value={book.author} placeholder="Author" onChange={handleChange} required />
        <input name="publishedOn" type="date" value={book.publishedOn?.slice(0,10)} onChange={handleChange} required />
        <input name="genre" value={book.genre} placeholder="Genre" onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditBook;
