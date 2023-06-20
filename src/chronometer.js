class Chronometer {
  constructor() {

    // Initialize 
    this.currentTime = 0;
    this.intervalId = null;
    
  }


  start(printTimeCallback) {
    
    // count
    this.intervalId = setInterval(() => {
    this.currentTime += 1;

    // Ckecks for callback and it's invokation
      if(printTimeCallback) {
        printTimeCallback();
      }

    // Seconds in ms
   }, 1000);
  
  
   
  }
  


  getMinutes() {

    // Returns 0, when the chromometer counting haven't started.
    if(this.currentTime === 0) {return 0;}

    let minutesUnrounded = this.currentTime / 60;
    let minutesRounded = Math.floor(minutesUnrounded);
    return minutesRounded;
  }

  getSeconds() {

    // Returns 0, when the currentTime counting haven't started.
    if(this.currentTime === 0) {return 0;}

    // Calculates remaining seconds
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    
    // Saves Value to a string
    const string = value.toString();

    // Add`s 0 before number, when string.length = 1
    if(string.length === 1) {
      return '0' + string;
    }

    
    else if (string.length === 2) {
      return string;
    }
    

  }

  stop() {

    // clears the intervall 
    clearInterval(this.intervalId);

  }

  reset() {

    // Sets currenTime to 0 -> reset
    this.currentTime = 0;
  }

  split() {
  
   // stores minutes and second in a variable and should change the numbers to strings
   // Dosen't work
    
    let splittedMinutes = computeTwoDigitNumber(this.getMinutes());
    let splittedSeconds = computeTwoDigitNumber(this.getSeconds());

    //Returns "mm:ss"
    return `${splittedMinutes}:${splittedSeconds}`;
  
  }
  
}
