import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publishedYear, setPublishedYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, genre, publishedYear };
    axios.post('http://localhost:5000/api/books', book)
      .then(() => {
        setTitle('');
        setAuthor('');
        setGenre('');
        setPublishedYear('');
        alert('Book added successfully');
      })
      .catch(error => console.error('Error adding book:', error));
  };

  return (
    <div className="container">
      <h2 className="my-4">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input
            type="text"
            className="form-control"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Published Year</label>
          <input
            type="number"
            className="form-control"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
