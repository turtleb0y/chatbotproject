//var speak

//var chatBot = {
//    "Hello" : "Hi there!",
//    "How are you?" : "I am great.",
//    "How's your day?" : "I don't know, I'm just sitting here all day."
//}
// I have no idea what i was doing here. . .
//function myFunction() {
//speak = document.getElementById("talkInput").value
var response = {
  "how are you?" : "I am doing well. Thank you for asking." + "<br>",
  "how's life?" : "It's ok I guess, I just here all day." + "<br>",
  "what do you do in your free time?" : "Nothing much, I just sit here all day, waiting . . ." + "<br>",
  "how old are you?" : "I'M OVER 9000!" + "<br>",
  "how is the world going to end?" : "I'll let you find that out . . ." + "<br>",
}

function myFunction() {
  var input = document.getElementById("talkInput").value;
  var giveresponse = response[input]


  if(giveresponse == undefined) {
    $("#chat-area").prepend("I do not understand your usage of the English language." + "<br>")
  }
  else{
    $("#chat-area").prepend(input + ": " + giveresponse + " ");
  }
}
