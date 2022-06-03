import React, { useState } from "react";
import TypingGameResult from "./TypingGameResult";
import styles from "./TypingGameComponent.module.scss";

type TypingGameProps = {
  randomWord: string[];
  randomMean: string[];
  randomLevel: number[];
};

const TypingGameComponent: React.FC<TypingGameProps> = ({
  randomWord,
  randomMean,
  randomLevel,
}) => {
  // Call the hook
  const [intRandom, setIntRandom] = useState(0);
  const [charsArray, setCharsArray] = useState(0);
  const [charsState, setCharsState] = useState([0]);
  const [calculatingScore, setCalculatingScore] = useState([0]);
  const [classToggle, setClassToggle] = useState(true);

  let chars: string = randomWord[intRandom];

  const judgeTyping = () => {
    if (
      (charsState[charsState.length - 1] === 1 ||
        charsState[charsState.length - 1] === 2) &&
      calculatingScore.length < 10
    ) {
      calculatingScore[intRandom] = !charsState.includes(2)
        ? randomLevel[intRandom]
        : 0;
      setCalculatingScore(calculatingScore);
    }
  };

  const resetTyping = () => {
    if (calculatingScore.length !== 10 && charsState.length === 1) {
      let tmpCharsState = [];
      for (let n = 0; n < chars.split("").length; n++) {
        tmpCharsState.push(0);
      }
      setCharsState(tmpCharsState);
    }
  };

  resetTyping();

  console.log(charsState);

  const insertTyping = (keyName: string) => {
    if (keyName === chars.split("")[charsArray]) {
      charsState[charsArray] = 1;
    } else {
      charsState[charsArray] = 2;
    }
    setCharsArray(charsArray + 1);
    setCharsState(charsState);
  };

  const deleteTyping = () => {
    if (charsArray > 0) {
      charsState[charsArray] = 0;
      setCharsArray((charsArray) => charsArray - 1);
      setCharsState(charsState);
    }
  };

  const changeTyping = () => {
    if (
      (charsState[charsState.length - 1] === 1 ||
        charsState[charsState.length - 1] === 2) &&
      calculatingScore.length < 10
    ) {
      setCharsArray(0);
      setCharsState([0]);
      setIntRandom(intRandom + 1);
      chars = randomWord[intRandom];
      console.log(chars);
      resetTyping();
      console.log(charsState);
      setClassToggle(!classToggle);
    }
  };

  judgeTyping();
  changeTyping();
  console.log(calculatingScore);

  // Capture and display!
  if (
    calculatingScore.length === 10 &&
    (charsState[charsState.length - 1] === 1 ||
      charsState[charsState.length - 1] === 2)
  ) {
    return (
      <TypingGameResult
        calculatingScore={calculatingScore}
        randomLevel={randomLevel}
      />
    );
  } else {
    return (
      <>
        <h1
          className={classToggle === true ? styles.inWord : styles.string__in}
          onKeyDown={(e) => {
            const key = e.key;
            if (key === "Backspace") {
              deleteTyping();
            } else if (key.length === 1) {
              insertTyping(key);
            }
            e.preventDefault();
          }}
          tabIndex={0}
        >
          {chars.split("").map((char, index) => {
            let state = charsState[index];
            return (
              <span
                key={char + index}
                className={
                  state === 0
                    ? styles.char__default
                    : state === 1
                    ? styles.char__true
                    : styles.char__false
                }
              >
                {char}
              </span>
            );
          })}
        </h1>
        <p>LEVEL: {randomLevel[intRandom]}</p>
        <p>{randomMean[intRandom]}</p>
      </>
    );
  }
};
export default TypingGameComponent;
