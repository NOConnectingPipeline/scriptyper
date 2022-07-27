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
  const [charsStateL, setCharsStateL] = useState([0]);
  const [charsStateR, setCharsStateR] = useState([0]);
  const [calcScore, setCalcScore] = useState([0]);
  let chars: string = randomWord[intRandom];
  let isIntRandom: boolean = intRandom % 2 === 0;
  let charsStateLR: number[] = isIntRandom ? charsStateL : charsStateR;
  const isLastChar = (charsStateLR: number[]) => {
    return (
      (charsStateLR[charsStateLR.length - 1] === 1 ||
        charsStateLR[charsStateLR.length - 1] === 2) &&
      calcScore.length < randomLevel.length
    );
  };
  const changeCharsState = (charsStateArr: number[]) => {
    if (isIntRandom) {
      setCharsStateL(charsStateArr);
    } else {
      setCharsStateR(charsStateArr);
    }
  };
  const changeCharsArray = (charsNum: number) => {
    setCharsArray(charsNum);
  };
  const changeIntRandom = (int: number) => {
    setIntRandom(int);
  };
  const changeCalcScore = (scoreArr: number[]) => {
    setCalcScore(scoreArr);
    console.log(calcScore); //レンダリング無限ループ中動かず
  };
  const judgeTyping = () => {
    if (isLastChar(charsStateLR)) {
      calcScore[intRandom] = !charsStateLR.includes(2)
        ? randomLevel[intRandom]
        : 0;
      changeCalcScore(calcScore);
    }
  };
  const resetTyping = () => {
    if (calcScore.length !== 10 && charsStateLR.length === 1) {
      let tmpCharsState = [];
      for (let n = 0; n < randomWord[intRandom].split("").length; n++) {
        tmpCharsState.push(0);
      }
      changeCharsState(tmpCharsState);
    }
  };
  const insertTyping = (keyName: string) => {
    if (keyName === randomWord[intRandom].split("")[charsArray]) {
      charsStateLR[charsArray] = 1;
    } else {
      charsStateLR[charsArray] = 2;
    }
    changeCharsArray(charsArray + 1);
    changeCharsState(charsStateLR);
  };
  const deleteTyping = () => {
    if (charsArray > 0) {
      charsStateLR[charsArray] = 0;
      changeCharsArray(charsArray - 1);
      changeCharsState(charsStateLR);
    }
  };
  const changeTyping = () => {
    if (isLastChar(charsStateLR)) {
      changeIntRandom(intRandom + 1);
      changeCharsArray(0);
      changeCharsState([0]);
      resetTyping();
    }
  };
  judgeTyping();
  changeTyping();
  resetTyping();
  console.log(charsStateL);

  // Capture and display!
  if (
    calcScore.length === randomLevel.length &&
    (charsStateLR[charsStateLR.length - 1] === 1 ||
      charsStateLR[charsStateLR.length - 1] === 2)
  ) {
    return (
      <TypingGameResult
        calculatingScore={calcScore}
        randomLevel={randomLevel}
      />
    );
  } else {
    return (
      <div className={styles.TypingGameComponent}>
        <h1
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
            let state = charsStateLR[index];
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
        <p className={styles.words__option}>LEVEL: {randomLevel[intRandom]}</p>
        <p className={styles.words__option}>{randomMean[intRandom]}</p>
      </div>
    );
  }
};
export default TypingGameComponent;
