var img=document.querySelectorAll('img');
img.forEach((e)=>{
    e.addEventListener('mouseover',(e)=>{
    e.target.src=`images/${e.target.id}_2.jpg`
    });
})