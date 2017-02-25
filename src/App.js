import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleOne from './ArticleOne.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The United States Constitution</h2>
        </div>
        {ArticleOne}
      </div>
    );
  }
}

export default App;
