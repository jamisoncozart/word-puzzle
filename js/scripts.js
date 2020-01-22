$(document).ready(function () {
  $("form#input").submit(function (event) {
    event.preventDefault();
    var output1 = $("#sentence").val();
    $("#input")[0].reset();

    var vowels = ["a", "e", "i", "o", "u"]
    var sentencearray = output1.split("");
    for (var i = 0; i < sentencearray.length; i += 1) {

      vowels.forEach(function (vowel) {
        if (sentencearray[i] === vowel) {
          sentencearray[i] = "-"

        }

      })
    }

    var newstring = sentencearray.join("");
    console.log(newstring);
    $("#puzzle").text(newstring);

  })
})