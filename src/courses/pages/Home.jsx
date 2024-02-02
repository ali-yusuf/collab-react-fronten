
import './Home.css'
import { useState } from 'react';
import Courses from './Courses';
import hero from '../../assets/h1_hero1.jpg.webp';
const Home = props => {
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
    

    return<>
    <div className="row green-bg justify-content-center">
   <div className="col-12 col-md-6 site-intro mt-5 mb-5">
<h1 className='center'>Welocme to the Collab Learn.</h1>
<h2>Learn trending skills with top Educators.</h2>
<h3>anywhere ! anytime !</h3>
<h4>1000+.. Course</h4>
<h4 className='mb-3'>10000+.. Questions</h4>
<span><input type='text' placeholder='What do you want to learn ?'className='custom-input' value={searchQuery} onChange= {(e) => {setSearchQuery(e.target.value)}}/><button className='custom-button' onClick={handleSearch}>Search</button></span>
   </div>
   <div className="col-12 col-md-6">
    <img className="hero-image"src={hero} alt="hero"/>
   </div>
   </div>
   <div className='row'>
    <div className='col align-center mt-5'>
    <h3>Our trending course. Choose that fit for your aspiration</h3>
    <p>All course are prepeared by highely qualifiesd faculty. To help you become succesful learner.</p>
   </div>
   </div>
   <Courses/>
    </>
}
export default Home;