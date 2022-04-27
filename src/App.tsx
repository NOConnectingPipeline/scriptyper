import React, { useState } from "react";
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
  };

  const [mode, setMode] = useState(modeSelect.Git);

  for (let i = 0; i < 10; i++) {
    randomWordArr.push(mode[TypingWordObject(mode)[i]].word);
    randomMeanArr.push(mode[TypingWordObject(mode)[i]].mean);
    randomLevelArr.push(mode[TypingWordObject(mode)[i]].level);
  }

  const info = {
    randomWord: randomWordArr,
    randomMean: randomMeanArr,
    randomLeVel: randomLevelArr,
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
};

export default App;
