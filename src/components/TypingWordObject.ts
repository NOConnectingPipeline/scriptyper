const max = 10;

const numRandom = (max: number) => {
    return Math.floor(Math.random() * max);
}

const TypingWordObject = (
  mode: {
    word: string;
    mean: string;
    level: number;
  }[]) => {
    const randomInt: number[] = [];
    const lengthJSON: number = mode.length;

    for(let i = 0; i < max; i++){
        while(true) {
          let tmp = numRandom(lengthJSON)
          if(!randomInt.includes(tmp)){
            randomInt.push(tmp);
            break;
          }
        }
      }
      return(randomInt);
}

export default TypingWordObject;