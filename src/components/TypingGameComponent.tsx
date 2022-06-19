import React, { useEffect, useState } from "react";
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
  const [classToggle, setClassToggle] = useState(false);
  const [intRandom, setIntRandom] = useState(0);
  const [charsArray, setCharsArray] = useState(0);
  const [charsState, setCharsState] = useState([0]);
  const [calculatingScore, setCalculatingScore] = useState([0]);

  let chars: string[] = [randomWord[intRandom], randomWord[intRandom]];

  const changeCharsState = (charsStateArr: number[]) => {
    setCharsState(charsStateArr);
  }

  const changeCharsArray = (charsNum: number) => {
    setCharsArray(charsNum);
  }

  const changeIntRandom = (int: number) => {
    setIntRandom(int);
  }

  const changeCalculatingScore = (scoreArr: number[]) => {
    setCalculatingScore(scoreArr);
  }

  const changeClassToggle = () => {
    setClassToggle(!classToggle);
  }

  const judgeTyping = () => {
    if (
      (charsState[charsState.length - 1] === 1 ||
        charsState[charsState.length - 1] === 2) &&
      calculatingScore.length < 10
    ) {
      calculatingScore[intRandom] = !charsState.includes(2)
      ? randomLevel[intRandom]
      : 0;
    changeCalculatingScore(calculatingScore);
    }
  }

  const resetTyping = () => {
    if (calculatingScore.length !== 10 && charsState.length === 1) {
      let tmpCharsState = [];
      for (let n = 0; n < randomWord[intRandom].split("").length; n++) {
        tmpCharsState.push(0);
      }
      changeCharsState(tmpCharsState);
    }
  };

  resetTyping();

  console.log(charsState);
  console.log(classToggle);

  const insertTyping = (keyName: string) => {
    if (keyName === randomWord[intRandom].split("")[charsArray]) {
      charsState[charsArray] = 1;
    } else {
      charsState[charsArray] = 2;
    }
    changeCharsArray(charsArray + 1);
    changeCharsState(charsState);
  };

  const deleteTyping = () => {
    if (charsArray > 0) {
      charsState[charsArray] = 0;
      changeCharsArray(charsArray - 1);
      changeCharsState(charsState);
    }
  };

  const changeTyping = () => {
    if (
      (charsState[charsState.length - 1] === 1 ||
        charsState[charsState.length - 1] === 2) &&
      calculatingScore.length < 10
    ) {
      changeClassToggle();
      changeCharsArray(0);
      changeCharsState([0]);
      changeIntRandom(intRandom + 1);
      if (chars[0] === randomWord[intRandom - 1] || chars[1] === null) {
        chars[0] = randomWord[intRandom];
      } else if (chars[1] === randomWord[intRandom - 1] || chars[1] === null) {
        chars[1] = randomWord[intRandom];
      }
      resetTyping();
    }
  };

  judgeTyping();
  changeTyping();
  //console.log(calculatingScore);

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
      <div>
        <div className={classToggle === true ? styles.swiper__right : styles.swiper__left}>
          {chars.map((value, index) => {
            return (
              <div key={index} className={styles.words}>
                <h1
                  //className={classToggle === 2 || classToggle === 0 ? styles.string__in : classToggle === 1 ? styles.string__out : undefined}
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
                  {value.split("").map((char, index) => {
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
              </div>
            );
          })}
        </div>
        <p className={styles.words__option}>LEVEL: {randomLevel[intRandom]}</p>
        <p className={styles.words__option}>{randomMean[intRandom]}</p>
      </div>
    );
  }
};
export default TypingGameComponent;
