import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TypingGameHtml from './components/TypingGameHtml';
import TypingGameCss from './components/TypingGameCss';
import TypingGameJavascript from './components/TypingGameJavascript';
import TypingGameGit from './components/TypingGameGit';

const App = () => {
  const modeArray = ['html', 'css', 'js', 'git', 'RESET'];
  const [mode, setMode] = useState(modeArray[4])
  switch(mode) {
    case modeArray[0]:
      return (
        <div className="App">
        <header className="App-header">
          <ul className="App-modenav">
            <li className='App-modenav-li' onClick = {() => {setMode(mode[0])}}>HTML</li>
            <li className='App-modenav-li' onClick = {() => {setMode(mode[1])}}>CSS</li>
            <li className='App-modenav-li' onClick = {() => {setMode(mode[2])}}>Javascript</li>
            <li className='App-modenav-li' onClick = {() => {setMode(mode[3])}}>Git</li>
            <li className='App-modenav-li' onClick = {() => {setMode(mode[4])}}>RESET</li>  
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
          <TypingGameHtml />
        </header>
      </div>
      );
    case modeArray[1]:
      return (
        <div className="App">
        <header className="App-header">
          <ul className="App-modenav">
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[0])}}>HTML</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[1])}}>CSS</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[2])}}>Javascript</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[3])}}>Git</li> 
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[4])}}>RESET</li> 
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
          <TypingGameCss />
        </header>
      </div>
      );
    case modeArray[2]:
      return (
        <div className="App">
        <header className="App-header">
          <ul className="App-modenav">
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[0])}}>HTML</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[1])}}>CSS</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[2])}}>Javascript</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[3])}}>Git</li> 
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[4])}}>RESET</li> 
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
          <TypingGameJavascript />
        </header>
      </div>
      );
    case modeArray[3]:
      return (
        <div className="App">
        <header className="App-header">
          <ul className="App-modenav">
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[0])}}>HTML</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[1])}}>CSS</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[2])}}>Javascript</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[3])}}>Git</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[4])}}>RESET</li>  
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
          <TypingGameGit />
        </header>
      </div>
      );
    case modeArray[4]:
      return (
        <div className="App">
        <header className="App-header">
          <ul className="App-modenav">
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[0])}}>HTML</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[1])}}>CSS</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[2])}}>Javascript</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[3])}}>Git</li>
            <li className='App-modenav-li' onClick = {() => {setMode(modeArray[4])}}>RESET</li>  
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
          <p>モードを選択してください。</p>
        </header>
      </div>
      );
  }
}

export default App;
