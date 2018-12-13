import React, { Component } from 'react';
import { render } from "react-dom";
import Header from './Header.js'
import Container from './Container.js'
import { BrowserRouter as Router } from "react-router-dom";




const App = () => (
      <div className="App">
    <Router >
      <div className='wrapper-main-content'>
        <Header/>
        <Container />
     </div>
    </Router>
      
      
     </div>

  );

  render(<App />, document.getElementById("root"));


export default App;
