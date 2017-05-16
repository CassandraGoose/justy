$(document).ready(function(){

  var min = Math.ceil(0)
var max = Math.floor(5)


  var array = ["Kevin!","bangers and whatever mash is...","cina-butter feind","meow","did I actually stutter?!","ur totes adorbz (for a clear to see reasons)"]
  console.log("it's working");
$('#button').click(function(){
  $('#answer').empty()
console.log('button click');
$('#answer').append(array[(Math.floor(Math.random() * (max - min + 1)) + min)])
})


})
