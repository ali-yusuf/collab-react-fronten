import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import logo from '../../assets/channellogo.jpg'
const Header = () => {
  const auth = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    // Implement your search functionality here, e.g., redirect to a search results page
    if (searchQuery.trim() === '') {
      alert('Please enter a search query.');
      return;
    }

    // Implement your search functionality here
    // For demonstration purposes, let's assume no user is found
    alert('No course found for: ' + searchQuery);
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ps-3 pe-3" id='mainNav'>
      <NavLink className="navbar-brand" to="/"><img src={logo} alt='channel logo' className='channel-logo'/></NavLink>
      <span>
        <input
          type='text'
          placeholder='Browse Course'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/courses">Courses</NavLink>
          </li>
          {auth.isLoggedIn && (<li className="nav-item">
          <NavLink className="nav-link" to="/instructors">Instructors</NavLink>
          </li>)}
          <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink></li>
          {!auth.isLoggedIn && <li className="nav-item">
          <NavLink className="nav-link" to="/auth">Sign In</NavLink></li>
}
{auth.isLoggedIn && <li className="nav-item">
          <NavLink className="nav-link" onClick={auth.logout}>Logout</NavLink></li>
}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
