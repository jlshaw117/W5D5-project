class Clock {
  //ES 6
  constructor() {
    // 1. Create a Date object.
    const initialTime = new Date();    
    // 2. Store the hours, minutes, and seconds.

    this.hours = initialTime.getHours(); //returns 0 - 23
    this.minutes = initialTime.getMinutes(); // returns 0 - 59
    this.seconds = initialTime.getSeconds(); // returns 0 - 59
    // 3. Call printTime.
    this.printTime();
    // this == Clock object
    // 4. Schedule the tick at 1 second intervals.  
    setInterval (this._tick.bind(this), 1000);  
    
  }

  printTime() {
    // Format the time in HH:MM:SS
    
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    if (this.seconds < 60) {
      this.seconds += 1;
    } else {
      this.seconds = 0;
      if (this.minutes < 60) {
        this.minutes += 1;
      } else {
        this.minutes = 0;
        if (this.hours < 24) {
          this.hours += 1;
        } else {
          this.hours = 0;
        }
      }
    } 
    // 2. Call printTime.
    // this == window object
    this.printTime();
    
  }
}

const clock = new Clock();




