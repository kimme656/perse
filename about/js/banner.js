
window.onresize = function(){
    

        const banner = document.querySelector("#banner");
        const banner2 = document.querySelector(".banner");
        const video =document.querySelector(".v_wrap>.video>video");
        const banner_bottom = banner.getBoundingClientRect().bottom+ window.scrollY
        const ban_p = document.querySelector(".banner span p");
        const ban_em = document.querySelector(".banner span em");

        let vh100 = document.querySelector(".banner > .v_wrap").getBoundingClientRect().height;
        let banner_h = document.querySelector(".banner").getBoundingClientRect().height;
           
        let winW = $(window).outerWidth();
        let winH = $(window).height();
        let wScroll = window.scrollY;
        //s는 넓이값
    
        let s = (wScroll/(banner_h - vh100 - 80))*60
        // per 는 오퍼시티값을 만들어주기위한 값
            // console.log(banner_bottom)
        let per = wScroll/(banner_h - vh100 - 80)*1
    // console.log(Math.ceil(Math.ceil(s)))
            
            const content = document.querySelector("#content");
            const conclass = document.querySelector(".content");
            // content의 높이값 설정 반응형
            if(winW < 960){
                if(winW > winH){
                    let winmax = winH*2 - winW  
                    // 넓이가 높이 *2보다 클떄 // 마이너스값
                    // 넓이가 높이*2보다 작을때 // 플러스 값인거야 
                    if(winW < winH*2){
                        content.style.height = `${winH*2 + 300}px`

                        if(winW >700 && winW <721){
                        content.style.height = `${winH*1.5 + winmax}px`
                        }
                        if(winW > 960){
                            content.style.height =  `${winH*1.5 + winmax}px`
                        }
                    }else{
                        content.style.height = `${winH*3 + winmax + 250}px`   
                    }
                    // 높이가 더 클때
                }else{
                    content.style.height = "120vh"
                    if(winW > 530 && winW < 541 ){
                        content.style.height = "120vh"
                    }
                }
                // 960이상일때 
            }else if(winW < 1181){
                content.style.height = "130vw"

                if(winW < winH){
                    content.style.height = "130vh"
                }

            }else if(winW > 1190 && winW < 1370){
                content.style.height = "calc(130vh + 600px )"
            }
            // console.log(per)


        if(wScroll <= banner_bottom - vh100){
            ban_p.style.opacity= `1`
            ban_em.style.opacity= `1`
            video.style.width = ` ${40 +  Math.abs(Math.ceil(s))}vmax`
            ban_p.style.right = "2%"
            ban_em.style.left = "0%"
            if(per <= 0.63){
                if(winW < winH){
                    if(winW <= 480){
                        ban_em.style.top = `${ 23 + per*50}%`
                        console
                    }else if(winW <= 480){
                        ban_em.style.top = `${ 23 + per*50}%`
                    }else if(winW <= 600){
                        ban_em.style.top = `${ 20 + per*50}%`
                    }else if(winW <= 780){
                        ban_em.style.top = `${ 15 + per*50}%`
                    }else if(winW <= 960){
                        ban_em.style.top = `${ 10 + per*50}%`
                    }else if(winW <= 1280){
                        ban_em.style.top = `${ 7 + per*50}%`
                    }else if(winW <= 1620){
                        ban_em.style.top = `${-5 + per*50}%`
                    }else if(winW <= 1920){
                        ban_em.style.top = `${-10 + per*50}%`
                    }   
                }else{
                    if(winW <= 480){
                        ban_em.style.top = `${ 23 + per*50}%`
                        console
                    }else if(winW <= 480){
                        ban_em.style.top = `${ 23 + per*50}%`
                    }else if(winW <= 600){
                        ban_em.style.top = `${ 20 + per*50}%`
                    }else if(winW <= 780){
                        ban_em.style.top = `${ 15 + per*50}%`
                    }else if(winW <= 960){
                        ban_em.style.top = `${ 10 + per*50}%`
                    }else if(winW <= 1280){
                        ban_em.style.top = `${ 0 + per*50}%`
                    }else if(winW <= 1620){
                        ban_em.style.top = `${-5 + per*50}%`
                    }else if(winW <= 1920){
                        ban_em.style.top = `${-10 + per*50}%`
                    }   
                }
                  
            }else{
                ban_em.style.top = `43.5%`
            }
            
            if(winW <= winH){          
                video.style.width = ` ${40 +  Math.abs(Math.ceil(s))}vmin`
            }
            if(s <=60){
                video.style.transform = `translateY(${-60+Math.abs(s)}%)`
                video.style.top =  ` ${60 - Math.abs(s)}% `
            }else{
                video.style.transform = `translateY(0%)`
                video.style.top =  ` ${0}% `
            }
            if(per <=1){
                // ban_em.style.top = `50%`
                ban_em.style.color = `rgba(229, 224, 217, ${per})`
                ban_p.style.color= ` rgba(229, 224, 217, ${per})`
                banner2.style.backgroundColor = `rgba(41,63,58,${per})`
            }
        }else{
            if(wScroll >= banner_bottom - vh100 && wScroll <= banner_bottom){
                ban_p.style.right = "150%"
                ban_em.style.left = "150%"
            }
            
            ban_p.style.opacity= `0`
            if(wScroll >= banner_bottom){
                ban_p.style.display= `none`
            }else if (wScroll <= banner_bottom - 200){
                ban_p.style.display= `block`
            }
        }
           
         
}
    window.addEventListener("scroll",function(){

        const banner = document.querySelector("#banner");
        const banner2 = document.querySelector(".banner");
        const video =document.querySelector(".v_wrap>.video>video");
        const banner_bottom = banner.getBoundingClientRect().bottom+ window.scrollY
        const ban_p = document.querySelector(".banner span p");
        const ban_em = document.querySelector(".banner span em");

        let vh100 = document.querySelector(".banner > .v_wrap").getBoundingClientRect().height;
        let banner_h = document.querySelector(".banner").getBoundingClientRect().height;
           
        let winW = $(window).outerWidth();
        let winH = $(window).height();
        let wScroll = window.scrollY;
        //s는 넓이값
    
        let s = (wScroll/(banner_h - vh100 - 80))*60
        // per 는 오퍼시티값을 만들어주기위한 값
            // console.log(banner_bottom)
        let per = wScroll/(banner_h - vh100 - 80)*1
    // console.log(Math.ceil(Math.ceil(s)))
            
            const content = document.querySelector("#content");
            const conclass = document.querySelector(".content");
            // content의 높이값 설정 반응형
            if(winW < 960){
                if(winW > winH){
                    let winmax = winH*2 - winW  
                    // 넓이가 높이 *2보다 클떄 // 마이너스값
                    // 넓이가 높이*2보다 작을때 // 플러스 값인거야 
                    if(winW < winH*2){
                        content.style.height = `${winH*2 + 300}px`

                        if(winW >700 && winW <721){
                        content.style.height = `${winH*1.5 + winmax}px`
                        }
                        if(winW > 960){
                            content.style.height =  `${winH*1.5 + winmax}px`
                        }
                    }else{
                        content.style.height = `${winH*3 + winmax + 250}px`   
                    }
                    // 높이가 더 클때
                }else{
                    content.style.height = "120vh"
                    if(winW > 530 && winW < 541 ){
                        content.style.height = "120vh"
                    }
                }
                // 960이상일때 
            }else if(winW < 1181){
                content.style.height = "130vw"

                if(winW < winH){
                    content.style.height = "130vh"
                }

            }else if(winW > 1190 && winW < 1370){
                content.style.height = "calc(130vh + 600px )"
            }
            // console.log(per)


        if(wScroll <= banner_bottom - vh100){
            ban_p.style.opacity= `1`
            ban_em.style.opacity= `1`
            video.style.width = ` ${40 +  Math.abs(Math.ceil(s))}vmax`
            ban_p.style.right = "2%"
            ban_em.style.left = "0%"
            if(per <= 0.63){
                if(winW < winH){
                    if(winW <= 480){
                        ban_em.style.top = `${ 23 + per*50}%`
                        console
                    }else if(winW <= 480){
                        ban_em.style.top = `${ 23 + per*50}%`
                    }else if(winW <= 600){
                        ban_em.style.top = `${ 20 + per*50}%`
                    }else if(winW <= 780){
                        ban_em.style.top = `${ 15 + per*50}%`
                    }else if(winW <= 960){
                        ban_em.style.top = `${ 10 + per*50}%`
                    }else if(winW <= 1280){
                        ban_em.style.top = `${ 7 + per*50}%`
                    }else if(winW <= 1620){
                        ban_em.style.top = `${-5 + per*50}%`
                    }else if(winW <= 1920){
                        ban_em.style.top = `${-10 + per*50}%`
                    }   
                }else{
                    if(winW <= 480){
                        ban_em.style.top = `${ 23 + per*50}%`
                        console
                    }else if(winW <= 480){
                        ban_em.style.top = `${ 23 + per*50}%`
                    }else if(winW <= 600){
                        ban_em.style.top = `${ 20 + per*50}%`
                    }else if(winW <= 780){
                        ban_em.style.top = `${ 15 + per*50}%`
                    }else if(winW <= 960){
                        ban_em.style.top = `${ 10 + per*50}%`
                    }else if(winW <= 1280){
                        ban_em.style.top = `${ 0 + per*50}%`
                    }else if(winW <= 1620){
                        ban_em.style.top = `${-5 + per*50}%`
                    }else if(winW <= 1920){
                        ban_em.style.top = `${-10 + per*50}%`
                    }   
                }
                  
            }else{
                ban_em.style.top = `43.5%`
            }
            
            if(winW <= winH){          
                video.style.width = ` ${40 +  Math.abs(Math.ceil(s))}vmin`
            }
            if(s <=60){
                video.style.transform = `translateY(${-60+Math.abs(s)}%)`
                video.style.top =  ` ${60 - Math.abs(s)}% `
            }else{
                video.style.transform = `translateY(0%)`
                video.style.top =  ` ${0}% `
            }
            if(per <=1){
                // ban_em.style.top = `50%`
                ban_em.style.color = `rgba(229, 224, 217, ${per})`
                ban_p.style.color= ` rgba(229, 224, 217, ${per})`
                banner2.style.backgroundColor = `rgba(41,63,58,${per})`
            }
        }else{
            if(wScroll >= banner_bottom - vh100 && wScroll <= banner_bottom){
                ban_p.style.right = "150%"
                ban_em.style.left = "150%"
            }
            
            ban_p.style.opacity= `0`
            if(wScroll >= banner_bottom){
                ban_p.style.display= `none`
            }else if (wScroll <= banner_bottom - 200){
                ban_p.style.display= `block`
            }
        }
           
        
    })