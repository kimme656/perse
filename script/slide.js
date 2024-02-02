
    // content4
    const content4 = document.querySelector(".content4");
    const best_slider = content4.querySelector(".best_slider");
    const best_inner = best_slider.querySelector(".best_inner");
    const b_slider = best_inner.querySelectorAll(".b_slider");
    const slider_btn = document.querySelector(".slider_btn");
    const slider_btnprev = document.querySelector(".prev");
    const slider_btnnext = document.querySelector(".next");

    let sliderCount = b_slider.length;
    let sliderWidth = document.querySelector(".b_slider").offsetWidth;
    let count = 0;
    // console.log(sliderWidth)

    function gotoslider(num){
        best_inner.style.transform = "translateX("+-sliderWidth * num+"px)";
        best_inner.style.transition = "all 0.3s";
        count = num;
    }

    function moveNext(){
        let nextIndex = (count + 1) % sliderCount;       
        console.log(nextIndex)
        gotoslider(nextIndex);
 
    }

    function movePrev(){
        
        let prevIndex = (count -1) % sliderCount;
        if(count == 0){
            prevIndex = sliderCount -1;
        }
        gotoslider(prevIndex);
    }

    slider_btnprev.addEventListener("click",movePrev)
    slider_btnnext.addEventListener("click",moveNext)
