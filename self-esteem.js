// Require/import the HTTP module
var http = require("http");

// Define 2 ports to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;
var niceThings = [
    "That's quite a stentorian voice you have.",
    "Now THAT is some DRY code.",
    "No, YOU have a nice day!",
    "My, what big, observant eyes!"
];

var meanThings = [
    "Go and boil your bottoms, sons of a silly person!",
    "I'll blow my nose at you, so called Arthur king! You and all your silly English K-n-n-n-n-n-igits!",
    "I don't wanna talk to you no more you empty headed animal foot trough water!",
    "I fart in your general direction!",
    "Your mother was a hamster and you father smelt of elderberries!"
];

function handleRequest1(request, response) {
    // Send the below string to the client when the user visits the PORT URL
    var comment = Math.floor(Math.random()*4);
    response.end("It Works!! " + niceThings[comment] + request.url);
  }

function handleRequest2(request, response) {
    // Send the below string to the client when the user visits the PORT URL
    var comment = Math.floor(Math.random()*5);
    response.end(meanThings[comment] + request.url);
  }

// Use the Node HTTP package to create our servers.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);
server1.listen(PORT1, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT1);
  });
  
var server2 = http.createServer(handleRequest2);
server2.listen(PORT2, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT2);
  });
  
