$(function() {
    $.each(category, function(i, option) {
        $('#sel1').append($('<option/>').attr("value", option.id).text(option.name));
    });
    giveSelection($('#sel1').val());
})

$('#sel1').on('change', function() {
  giveSelection($('#sel1').val());
});
$('#save').on('click', function() {
  var txt = $('#output').val();
  $('#output').val(txt + " " +$('#sel2').val());
});
$('#clear').on('click', function() {
  $('#output').val("");
});
$('#copy').on('click', function() {

　const inputText = document.querySelector('#output');
  inputText.select();
  document.execCommand('copy');
});
var sel2 = document.querySelector('#sel2');

function giveSelection(selValue) {
  sel2.innerHTML = '';
  for(var i = 0; i < translation.length; i++) {
    if(translation[i].dp === selValue) {
      var option = document.createElement("option");  
      option.text = translation[i].chinese;
      option.value = translation[i].korean;
      sel2.appendChild(option);
    }
  }
}


















