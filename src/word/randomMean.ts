const randomMeanVoid= (mode: {
    word: string;
    mean: string;
    level: number;
  }[]) => {
  
      const randomMean: string[] = [];
  
      const max = 1;
  
      const lengthJSON: number = mode.length;
      
      function numRandom(max: number) {
        return Math.floor(Math.random() * max);
      }
      
      for(let i = 0; i < max; i++){
        while(true) {
          let tmp = numRandom(lengthJSON)
          if(!randomMean.includes(mode[tmp].mean)){
            randomMean.push(mode[tmp].mean);
            break;
          }
        }
      }
      return(randomMean);
  }
  
  export default randomMeanVoid;