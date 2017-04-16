$(document).ready(function(){

  var min = Math.ceil(0)
var max = Math.floor(5)


  var array = ["Kevin!","slag","gutter butter feind","moot","did I fuckin stutter?!","ur totes adorbz (for a cunt)"]
  console.log("it's working");
$('#button').click(function(){
  $('#answer').empty()
console.log('button click');
$('#answer').append(array[(Math.floor(Math.random() * (max - min + 1)) + min)])
})


})
