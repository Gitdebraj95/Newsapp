import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  // apiKey = process.env.REACT_APP_NEWS_API;
  apiKey = '1c626c66e29b41c5ac7bd7c454c1ac2e';
  state={
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    
    return (
      <div>
      <BrowserRouter>
      <LoadingBar
        color='#fff'
        height={3}
        progress={this.state.progress}
      />
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<News changeProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general"/>} />
        <Route exact path="/business" element={<News changeProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" category="business"/>} />
        <Route exact path="/entertainment" element={<News changeProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment"/>} />
        <Route exact path="/health" element={<News changeProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" category="health"/>} />
        <Route exact path="/science" element={<News changeProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" category="science"/>} />
        <Route exact path="/sports" element={<News changeProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" category="sports"/>} />
        <Route exact path="/technology" element={<News changeProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" category="technology"/>} />
      </Routes>
      
    </BrowserRouter>
      </div>
    )
  }
}

