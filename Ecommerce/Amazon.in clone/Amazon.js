const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');
let n=0;
function changeSlide (){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display='block';
}
changeSlide();
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length--;
    }
    changeSlide();
})
next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length--){
        n++;
    }else{
        n=0;
    }
    changeSlide();
});

// Get the modal
let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}