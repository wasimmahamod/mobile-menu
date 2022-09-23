let sidbar = document.querySelector('.sidebar')
let btn = document.querySelector('button')
let close = document.querySelector('.close')
let show = false;


btn.addEventListener('click',function(){
    show = !show
    if(show){
        sidbar.style.left='-60%';
    }else{
        sidbar.style.left = '0%'
    }

})
close.addEventListener('click',function(){
    sidbar.style.left='-60%'
})