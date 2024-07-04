let speed = parseInt(prompt("Enter the speed:"));
  let start = 70;
  let end = 130;
  let increment = 5;


function calculatePoint(start, end, increment, speed) {
    let message = "";
    if (speed < start) {
      message = "Okay";
    } else if (speed > end) {
      message = "Invoke licence";
    } else {
      let point = Math.ceil((speed - start) / increment);
      if ((speed - start) % increment === 0) {
        point += 1;
      }
      message = "Point " + point;
    }
  
    console.log(message);
    alert(message);
  }
  
  

  calculatePoint(start, end, increment, speed);
  