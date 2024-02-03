import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome To Soerabaya</h1>
      <p>Selamat datang di situs pariwisata kami! Temukan keindahan destinasi wisata terbaik di sini.</p>
      <a href="./pariwisata">
      <button className="button">Wisata</button>
      </a>
    </div>
  );
};

export default HomePage;
