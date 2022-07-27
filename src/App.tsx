import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
    PHP: WordContainment.php
  };

  const modeSelectKeys = Object.keys(modeSelect),
    modeSelectValue = Object.values(modeSelect);

  const [mode, setMode] = useState(modeSelect.HTML);
  const [modeScript, setModeScript] = useState("HTML");

  const randomInt = TypingWordObject(mode);

  const onClick = (
    selected: {
      word: string;
      mean: string;
      level: number;
    }[],
    path: string
  ) => {
    setMode(selected);
    setModeScript(path);
  };

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
        <BrowserRouter>
          <Routes>
            <Route
              path={`/${modeScript}`}
              element={
                <Link to={"/"} className="App-link">
                  <p>ESCAPE TO TOP</p>
                </Link>
              }
            />
          </Routes>
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route
              path={`/${modeScript}`}
              element={
                <TypingGameComponent
                  randomWord={info.randomWord}
                  randomMean={info.randomMean}
                  randomLevel={info.randomLeVel}
                />
              }
            />
            <Route
              path={"/"}
              element={
                <>
                  <h3 className="App-highlight">モードを選択してください。</h3>
                  <ul className="App-modenav">
                    {modeSelectKeys.map((value, index) => {
                      return (
                        <li
                          key={index}
                          className="App-modenav-li"
                          onClick={() => {
                            const selected = modeSelectValue[index],
                              path = value;
                            onClick(selected, path);
                          }}
                        >
                          <Link to={`/${value}`} className="App-modenav-li">{value}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
