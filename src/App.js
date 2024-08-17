import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

import News from './components/News';
import Navbar2 from './components/Navbar2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';

export default class App extends Component {
  render() {
    return (
      <>
    
      <BrowserRouter> 

      <Navbar2 />
      <Routes>
      <Route path='/'element={ <News key="business" pagesize={6} country="in" category="general"/>}></Route>
            <Route path='/business'element={ <News key="business" pagesize={6} country="in" category="business"/>}></Route>
            <Route path='/entertainment'element={<News  key="entertainment" pagesize={6} country="in" category="entertainment"/>}></Route>
            <Route path='/general' element={<News  key="general" pagesize={6} country="in" category="general"/>}></Route>
            <Route path='/health' element={<News  key="health" pagesize={6} country="in" category="health"/>}></Route>
            <Route path='/science'element={<News  key="science" pagesize={6} country="in" category="science"/>}></Route>
            <Route path='/sports'element={<News  key="sports" pagesize={6} country="in" category="sports"/>}></Route>
            <Route path='/technology'element={<News  key="technology" pagesize={6} country="in" category="technology"/>}></Route>
            <Route path='/About'element={<About />}></Route>
            </Routes>
        </BrowserRouter> 
        </>
    )
  }
}
