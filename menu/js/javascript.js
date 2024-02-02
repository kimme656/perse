window.addEventListener("load",function(){
    const grid = new Isotope(".section",{
        itemSelector:"article",
        columWidth:"article",
        transitionDuration:"0.5s"

        // const grid = new Isotope("부모요소명",{
        // itemSelector:"배치할요소명",
        // columWidth:"넓이값을 구할 요소명",
        // transitionDuration:"속도값"
    })

    const btns = document.querySelectorAll("main>ul>li");
    for (let el of btns){
        el.addEventListener("click",function(e){
            e.preventDefault();
            //a요소의 href 속성값을 가져와서 저장.(sort)
            const sort = e.currentTarget.querySelector("a").getAttribute("href");
            // console.log(sort)

            grid.arrange({
                filter:sort
            })

            for(let el of btns){
                el.classList.remove("on");
            }
            e.currentTarget.classList.add("on")
        })
    }
})