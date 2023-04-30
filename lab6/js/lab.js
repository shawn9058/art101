// index.js - learning Arrays and Objects
// Author: Seokho Kang 
// Date: 2023-04-30


// Define Variables
myTransport = ["walk", "bike", "car", "subway", "bus"]


// create an object for my main ride
myMainRide = {
  make: "Ford",
  model: "Taurus",
  color: "Rusty",
  year: 1995, age: function () {return 2023 - this.year}}


  // output
  document.writeln("Different types of transports that I use in general", myTransport, "</br>");

  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");