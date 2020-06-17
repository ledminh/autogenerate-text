function getCapChar(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
  }
  
  function getChar(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
  }
  
  function getWord(wL, cap){
    let w = cap? getCapChar(): getChar();
  
    for (let i = 1; i < wL; i++) {
      w += getChar();
      
    }
    return  w; 
  }
  
  export default function getSentence(sL, maxWL){
      let s = getWord(Math.floor(Math.random()*(maxWL - 1)) + 1, true);
  
      for (let i = 0; i < sL - 1; i++) {
        s += " " + getWord(Math.floor(Math.random()*(maxWL - 1)) + 1, false);
        
      }
  
      return s +=".";
  }