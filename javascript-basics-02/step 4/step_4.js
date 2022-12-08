var p=document.querySelector('button');
p.addEventListener('click',function(){
    if(confirm('delete all ?')){
    document.getElementById('name').value=' ';
    document.getElementById('surname').value=' ';
    document.getElementById('city').value=' ';
    }
    else{
        console.log('canceled');
    }

})
