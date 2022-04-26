import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
/*
import TypingGameHtml from './components/TypingGameHtml';
import TypingGameCss from './components/TypingGameCss';
import TypingGameJavascript from './components/TypingGameJavascript';
import TypingGameGit from './components/TypingGameGit';
*/
import TypingGameComponent from "./components/TypingGameComponent";
import WordContainment from "./wordContainment.json";
import randomWordVoid from "./word/randomWord";
import randomMeanVoid from "./word/randomMean";
import randomLevelVoid from "./word/randomLevel";

/*
const toApp = (info: {
  randomWord: string[];
  randomMean: string[];
  randomLeVel: number[];
}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TypingGameComponent randomWord={info.randomWord} randomMean={info.randomMean} randomLevel={info.randomLeVel} />
      </header>
    </div>
  );
};
*/

const App = () => {
  const modeSelect = {
    HTML: WordContainment.html,
    CSS: WordContainment.css,
    Javascript: WordContainment.js,
    Git: WordContainment.git,
    //ここの行から新たなモードを追加
  };

  const [mode, setMode] = useState(modeSelect.Git);

  const info = {
    randomWord: randomWordVoid(mode),
    randomMean: randomMeanVoid(mode),
    randomLeVel: randomLevelVoid(mode),
  };

  return (
    <div className="App">
      <header className="App-header">
      <p className="App-modenav-li">RESET</p>
        <img src={logo} className="App-logo" alt="logo" />
        <TypingGameComponent randomWord={info.randomWord} randomMean={info.randomMean} randomLevel={info.randomLeVel} />
      </header>
    </div>
  );

  /*
  if(mode === modeSelect.HTML) {
    return (
      <div className="App">
      <header className="App-header">
        <ul className="App-modenav">
          <li className='App-modenav-li' onClick = {() => {setMode(modeSelect.HTML)}}>HTML</li>
          <li className='App-modenav-li' onClick = {() => {setMode(modeSelect.CSS)}}>CSS</li>
          <li className='App-modenav-li' onClick = {() => {setMode(mode[2])}}>Javascript</li>
          <li className='App-modenav-li' onClick = {() => {setMode(mode[3])}}>Git</li>
          <li className='App-modenav-li' onClick = {() => {setMode(mode[4])}}>RESET</li>  
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <TypingGameComponent
        randomWord={randomWordVoid(mode)}
        randomMean={randomMeanVoid(mode)}
        randomLevel={randomLevelVoid(mode)}
        />
      </header>
    </div>
    );
  } else if(mode === modeSelect[1]) {
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
        <TypingGameComponent />
      </header>
    </div>
    );
  } else if(mode === modeSelect[2]) {
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
        <TypingGameComponent />
      </header>
    </div>
    );
  } else if(mode === modeSelect[3]) {
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
        <TypingGameComponent />
      </header>
    </div>
    );
  } else {
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
  */
};

export default App;
