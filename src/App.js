import logo from './logo.svg';
import React from 'react';
import  Sider  from './component/LeftMenu/LeftMenu';
import { Button } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
     <Sider></Sider>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
