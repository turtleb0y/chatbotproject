//var speak

//var chatBot = {
//    "Hello" : "Hi there!",
//    "How are you?" : "I am great.",
//    "How's your day?" : "I don't know, I'm just sitting here all day."
//}
// I have no idea what i was doing here. . .
//function myFunction() {
//speak = document.getElementById("talkInput").value
function myFunction() {
  var input = document.getElementById("talkInput").value;
  var giveresponse = response[input]
  document.getElementById("chat-area").innerHTML += input + ": " + giveresponse + " ";
}
