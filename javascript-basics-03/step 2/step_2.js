
// function showhide(){
//     var show=document.querySelector('#show');
//     var hide=document.querySelector('#hide');
//     show.addEventListener('click',function(){
//         document.getElementById('texte').style.display='block';
//     })
//     hide.addEventListener('click',function(){
//         document.getElementById('texte').style.display='none';
//     })

// }


var a = document.querySelectorAll('a')
var div = document.getElementById('texte')

a.forEach((e) => {
    e.addEventListener('click', (e) => {
        if (e.target.id == 'show') {
            div.style = 'display: block;'
        } else {
            div.style = 'display: none;'
        }
    })
})