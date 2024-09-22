let menu = document.querySelector(".nav_items");
let openBtn = document.querySelector(".icon");
let closeBtn = document.querySelector(".close_icon");

openBtn.addEventListener('click',() => {
    menu.style.right='0%';
}) 

closeBtn.addEventListener('click',() => {
    menu.style.right='100%';
}) 


const nav = document.querySelector(".navbar");
window.addEventListener('scroll',() => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove('sticky');
    }
});

const Parallax = document.querySelector(".showcase");
window.addEventListener("scroll",function() {
    let offset = window.pageYOffset;
    Parallax.style.backgroudPositionY = offset * 0.7 + "px";
})