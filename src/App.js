import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/style.css';
import Home from './components/docs/views/Home';

class App extends Component {
   render(){ 
    return (
      <div className="App">
        <BrowserRouter>
        <div className="main-container">
          <Route exact path='/' component={Home} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
