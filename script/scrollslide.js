
const con5_slider = document.querySelector(".con5_slider");
const con5_inner = document.querySelector(".con5_inner");
const div = document.querySelectorAll(".con5_inner>div");

const s_wid = con5_slider.offsetWidth;
let win_wid = window.innerWidth;
let s_move_max = (s_wid - (win_wid/2)) * -1;
let s_pos = 0;
let li_pos = 0;
let pct = 0;

let con5_inner_W = con5_inner.getBoundingClientRect().width;

con5_slider.style.height =  `${con5_inner_W}px`;
// console.log(con5_slider.style.height)

let con5_slider_top = con5_slider.getBoundingClientRect().top + window.scrollY;


let vh100 = document.querySelector(".con5_box1").clientHeight;
let footer_h = document.querySelector(".footer").clientHeight;

// let li_pos = 0;


winSize()
function winSize(){
    winW = $(window).width();
}
function resize(){
    winSize();
}

window.addEventListener("scroll",function(){
    winSize()
    let winW = this.scrollY;

    let translateX = (winW - con5_slider_top) / (con5_inner_W - vh100)*100;
    let max = Math.round(translateX);

    

    // console.log(document.querySelector("body").clientHeight)
    // console.log(con5_inner_W -vh100 + footer_h + con5_slider_top + 953)

    if(winW >= con5_slider_top){
        con5_inner.style.transform = `translateX(${-max}%)`
        con5_inner.style.position = 'fixed';       
      
    }else{
        con5_inner.style.position = 'static'
        con5_inner.style.transform = `translateX(0%)`

    }


})
