import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import TypingGameComponent from "./components/TypingGameComponent";
import WordContainment from "./wordContainment.json";
import TypingWordObject from "./components/TypingWordObject";

const randomWordArr: string[] = [];
const randomMeanArr: string[] = [];
const randomLevelArr: number[] = [];

const App = () => {
  const modeSelect = {
    HTML: WordContainment.html,
    CSS: WordContainment.css,
    Javascript: WordContainment.js,
    Git: WordContainment.git,
    //ここの行から新たなモードを追加
    Reset: WordContainment.reset
  };

  const [mode, setMode] = useState(modeSelect.Reset);
  const [modeScript, setModeScript] = useState('reset');

  const randomInt = TypingWordObject(mode);

  const onClick = (selected: {
    word: string;
    mean: string;
    level: number;
  }[], path: string) => {
    setMode(selected);
    setModeScript(path);
  }

    randomWordArr.length = 0;
    randomMeanArr.length = 0;
    randomLevelArr.length = 0;
    for (let i = 0; i < 10; i++) {
      randomWordArr.push(mode[randomInt[i]].word);
      randomMeanArr.push(mode[randomInt[i]].mean);
      randomLevelArr.push(mode[randomInt[i]].level);
    }

  const info = {
    randomWord: randomWordArr,
    randomMean: randomMeanArr,
    randomLeVel: randomLevelArr,
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-modenav-li">EXIT TO TOP</p>
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Routes>
            <Route path={`/${modeScript}`} element={<TypingGameComponent randomWord={info.randomWord} randomMean={info.randomMean} randomLevel={info.randomLeVel} />} />
            <Route path={'/'} element={
              <>
                <h3>モードを選択してください。</h3>
                <ul className="App-modenav">
                  <li className="App-modenav-li" onClick={() => {
                    const selected = modeSelect.HTML, path = 'HTML';
                    onClick(selected, path);
                  }}>
                    <Link to={'/HTML'}>HTML</Link>
                  </li>

                  <li className="App-modenav-li" onClick={() => {
                    const selected = modeSelect.CSS, path = 'CSS';
                    onClick(selected, path);
                  }}>
                    <Link to={'/CSS'}>CSS</Link>
                  </li>

                  <li className="App-modenav-li" onClick={() => {
                    const selected = modeSelect.Javascript, path = 'Javascript';
                    onClick(selected, path);
                  }}>
                    <Link to={'/Javascript'}>Javascript</Link>
                  </li>

                  <li className="App-modenav-li" onClick={() => {
                    const selected = modeSelect.Git, path = 'Git';
                    onClick(selected, path);
                  }}>
                    <Link to={'/Git'}>Git</Link>
                  </li>
                </ul>
              </>
            } />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};

/*
<li className="App-modenav-li" onClick={() => {
  const selected = modeSelect, path = '';
  onClick(selected, path);
}}>
  <Link to={'/'}></Link>
</li>
*/

export default App;
