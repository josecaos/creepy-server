$(document).foundation();

$(document).ready(function () {


	setTimeout(function (){

		var i = 0
		var t = 1000

		setInterval(function() {

			i = i + 1
			texto_init();
			t = t - i
console.log(i)	
console.log(t)
	},t)

	},2000)

});

function texto_init() {

	var titulo = $('h1').text()

	var a = titulo.split(" ")

	shuffle(a)

	var b = a.join(" ")

	setTimeout(function() {
	$('h1').html(b)
	},450)


}

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
