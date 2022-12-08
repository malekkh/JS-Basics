var Div=document.createElement('div');
Div.setAttribute('id','Mydiv');
document.body.appendChild(Div);
var displayText = document.getElementById('name');
    displayText.onchange = function() {
      document.getElementById('Mydiv').innerHTML = displayText.value;
    }