$(document).ready(function(){

var array = ["You light up a room.", "You have a heart of gold.", "I like your butt.", "You make me smile", "You mean the world to me.", "You inspire others."]
var min = Math.ceil(0)
var max = Math.floor(5)


  console.log("it's working");

$('#button').click(function(){
  $('#answer').empty()
  console.log('button click');
  $('#answer').append(array[(Math.floor(Math.random() * (max - min + 1)) + min)])
})

})
