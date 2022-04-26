const randomLevelVoid= (mode: {
    word: string;
    mean: string;
    level: number;
  }[]) => {
  
      const randomLevel: number[] = [];
  
      const max = 1;
  
      const lengthJSON: number = mode.length;
      
      function numRandom(max: number) {
        return Math.floor(Math.random() * max);
      }
      
      for(let i = 0; i < max; i++){
        while(true) {
          let tmp = numRandom(lengthJSON)
          if(!randomLevel.includes(mode[tmp].level)){
            randomLevel.push(mode[tmp].level);
            break;
          }
        }
      }
      return(randomLevel);
  }
  
  export default randomLevelVoid;