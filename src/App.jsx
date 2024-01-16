import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { useState, useCallback } from 'react';
import Instructors from './instructors/pages/instructors';
import Courses from './courses/pages/Courses';
import Java from './courses/pages/courses/Java';
import Home from './courses/pages/Home';
import Header from './shared/components/Header';
import Python from './courses/pages/courses/Python';
import Footer from './shared/components/Footer';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import About from './shared/components/About';
const App = ()=> {
    const [isLoggedIn, setLoogedIn] = useState(false);
    const login = useCallback(() =>{
        setLoogedIn(true);
    },[])
    const logout = useCallback(() =>{
        setLoogedIn(false);
    },[])
    
    return (
       <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout:logout}}>
        <Router>
            <Header/>
            <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/:authorId/courses' exact element={<Courses/>}/>{}
            <Route path='/instructors' exact element={<Instructors/>}/>
            <Route path='*' element={<Courses/>}/>
            <Route path='c1/python' exact element = {<Python/>}/>
            <Route path='c2/java' exact element = {<Java/>}/>
            <Route path='/about' exact element = {<About/>}/>
            <Route path='/auth' exact element = {<Auth/>}/>
            </Routes>
            <Footer/>
        </Router>
        </AuthContext.Provider>
    );
}

export default App;