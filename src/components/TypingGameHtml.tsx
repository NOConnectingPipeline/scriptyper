// import it
import React,{useState, useEffect} from "react";
import WordContainment from "../wordContainment.json";
import styles from "./TypingGameComponent.module.scss";

const randomWordHtml: string[] = [];
const randomMeanHtml: string[] = [];
const randomLevelHtml: number[] = [];

const max = 10

const lengthJSONHtml: number = WordContainment.html.length;

function numRandom(max: number) {
  return Math.floor(Math.random() * max);
}

for(let i = 0; i < max; i++){
  while(true) {
    let tmp = numRandom(lengthJSONHtml)
    if(!randomWordHtml.includes(WordContainment.html[tmp].word)){
      randomWordHtml.push(WordContainment.html[tmp].word);
      randomMeanHtml.push(WordContainment.html[tmp].mean);
      randomLevelHtml.push(WordContainment.html[tmp].level);
      break;
    }
  }
}

let result: number = 0;

// type APIWord = {
//   word: string[],
//   mean: string[],
//   level: number[],
// };

//exporting function
const TypingGameHtml = () => {

  // const [array, setArray] = useState({
  //   word: [],
  //   mean: [],
  //   level: [],
  // } as APIWord)

  // useEffect(() => {
  //   fetch(`http://scriptyper-backend:3010/api/git`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setArray(data);
  //   }).catch(err => {
  //     console.log(err)
  //   });
  // }, []);

  const [intRandom, setIntRandom] = useState(0);
  let chars: string = randomWordHtml[intRandom]

  // Call the hook
  const [charsArray, setCharsArray] = useState(0);
  const [charsState, setCharsState] = useState([0]);
  const [calculatingScore, setCalculatingScore] = useState([0]);

  const resetTyping = () => {
    if(charsState.length === 1) {
      let tmpCharsState = []
      for(let n = 0; n < chars.split("").length; n++) {
        tmpCharsState.push(0);
      }
      setCharsState(tmpCharsState);
    }
  }

  resetTyping();

  console.log(charsState);

  const insertTyping = (keyName: string) => {
    if(keyName === chars.split("")[charsArray]) {
      charsState[charsArray] = 1;
    } else {
      charsState[charsArray] = 2;
    }
    setCharsArray(charsArray + 1);
    setCharsState(charsState);
  }

  const deleteTyping = () => {
    if(charsArray > 0) {
      charsState[charsArray] = 0;
      setCharsState(charsState);
      setCharsArray(charsArray - 1);
    }
  }

  const changeTyping = () => {
    setCharsArray(0);
    setCharsState([0]);
    setIntRandom(intRandom + 1);
    chars = randomWordHtml[intRandom];
    console.log(chars)
    resetTyping();
    console.log(charsState);
  }

  const judgeTyping = () => {
    let tmpCalculatingScore = [...calculatingScore];
    if(!charsState.includes(2)) {
      tmpCalculatingScore.push(randomLevelHtml[intRandom])
      setCalculatingScore(tmpCalculatingScore);
    } else {
      tmpCalculatingScore.push(0);
      setCalculatingScore(tmpCalculatingScore);
    }
  }

  if(charsState[charsState.length - 1] === 1 || charsState[charsState.length - 1] === 2){
    judgeTyping();
    changeTyping();
    console.log(calculatingScore);
  }

  // Capture and display!
  if(calculatingScore.length === 10) {
    for(let p = 0; p < calculatingScore.length; p++) {
      result += calculatingScore[p];
    }
    console.log(result)
    return (
      <>
      <h1>合計点： {result}</h1>
      </>
    )
  } else {
  return (
    <>
    <h1
      onKeyDown={(e) => {
        const key = e.key;
        if (key === "Backspace") {
          deleteTyping();
        } else if (key.length === 1) {
          insertTyping(key);
        }
        e.preventDefault()
      }}
      tabIndex={0}
    >
      {chars.split("").map((char, index) => {
        let state = charsState[index];
        return (
          <span 
          key={char + index} 
          className={
            state === 0 ? styles.char__default : 
            state === 1 ? styles.char__true : 
            styles.char__false
          }
          >
            {char}
          </span>
        );
      })}
    </h1>
    <p>LEVEL: {randomLevelHtml[intRandom]}</p>
    <p>{randomMeanHtml[intRandom]}</p>
    </>
  );
  }
};
export default TypingGameHtml
;