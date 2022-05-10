import React from "react";
import styles from "./TypingGameComponent.module.scss";

type TypingGameResultProps = {
  randomLevel: number[];
  calculatingScore: number[];
};

const TypingGameResult: React.FC<TypingGameResultProps> = ({
  calculatingScore,
  randomLevel,
}) => {
  let result: number = 0;
  for (let i = 0; i < calculatingScore.length; i++) {
    result += calculatingScore[i];
  }
  return (
    <div className={styles.dialog__back}>
      <div className={styles.dialog__block}>
        <ul className={styles.dialog__block__nav}>
          {calculatingScore.map((num: number, index: number) => {
            let judge: string = num !== 0 ? "Y" : "N";
            return (
              <li key={index} className={styles.dialog__block__nav__li}>
                {index + 1}:
                <span className={styles.char__true}>
                  {randomLevel[index]}Lv
                </span>
                ,
                <span
                  className={
                    judge === "Y" ? styles.char__true : styles.char__false__txt
                  }
                >
                  {judge}
                </span>
                , POINT=<span className={styles.char__true}>{num}</span>
              </li>
            );
          })}
        </ul>
        <h1>合計点:<span className={styles.char__true}>{result}</span></h1>
      </div>
    </div>
  );
};

export default TypingGameResult;
