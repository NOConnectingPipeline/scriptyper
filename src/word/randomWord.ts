
const randomWordVoid= (mode: {
  word: string;
  mean: string;
  level: number;
}[]) => {

    const randomWord: string[] = [];

    const max = 10;

    const lengthJSON: number = mode.length;
    
    function numRandom(max: number) {
      return Math.floor(Math.random() * max);
    }
    
    for(let i = 0; i < max; i++){
      while(true) {
        let tmp = numRandom(lengthJSON)
        if(!randomWord.includes(mode[tmp].word)){
          randomWord.push(mode[tmp].word);
          break;
        }
      }
    }
    return(randomWord);
}

export default randomWordVoid;