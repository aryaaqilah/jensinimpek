setTimeout(() => {
const dehyaBanner = document.getElementById('dehya')
const mikaBanner = document.getElementById('mika')
const containerBannerChar = document.getElementById('bannerChar')
const karakternyaJS = document.querySelectorAll(".karakternya")

const dropMenu = document.querySelector(".navbar .menu-icon");
const dropMenuList = document.querySelector(".dropMenu")

dropMenu.addEventListener('click', () => {
    if (dropMenu.dataset.active) {
        dropMenuList.style.top = "25px"
        dropMenuList.style.left = "-1000px"
        delete dropMenu.dataset.active
    }
    else {
        dropMenuList.style.top = "25px"
        dropMenuList.style.left = "0"
        dropMenu.dataset.active = true
    }
})


    setInterval(() => {
        const slides = document.querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
        
        let newIndex = [...slides.children].indexOf(activeSlide) + 1
        
        if (newIndex >= 3) newIndex = 0
        
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    }, 5000)

    let mikadehya = [
        '/assets/mika.png', '/assets/dehya.png'
    ]

    let flag = 0
    mikaBanner.style.backgroundImage = 'url(' + mikadehya[0] +')'
    dehyaBanner.style.backgroundImage = 'url(' + mikadehya[1] +')'
    mikaBanner.style.filter = 'blur(5px)'
    mikaBanner.style.zIndex = 5
    dehyaBanner.style.zIndex = 6

    containerBannerChar.addEventListener("click", () => {
        if(flag == 1){
            // mikaBanner.style.backgroundImage = 'url(' + /assets/CharacterPage/sumeru1_nahida.png+')'
                    // dehyaBanner.style.backgroundImage = 'url(' +assets/dehya.png +')'
            mikaBanner.style.filter = 'blur(5px)'
            dehyaBanner.style.filter = 'blur(0px)'
            mikaBanner.style.zIndex = 5
            dehyaBanner.style.zIndex = 6
            flag = 0
        }
        else{
            mikaBanner.style.filter = 'blur(0px)'
            dehyaBanner.style.filter = 'blur(5px)'
            mikaBanner.style.zIndex = 6
            dehyaBanner.style.zIndex = 5
            flag = 1
        }
    })

    let myIndex = 0;
    carousel();

    function carousel() {
        let i;
        let x = document.getElementsByClassName("gambarTengah");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "flex";  
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }

    let myIndex2 = 0;
    carousel2();

    // function carousel2() {
    //     var i2;
    //     var x2 = document.getElementsByClassName("gambarMap");
    //     for (i2 = 0; i2 < x2.length; i2++) {
    //         x2[i2].style.display = "none";  
    //     }
    //     myIndex2++;
    //     if (myIndex2 > x2.length) {myIndex2 = 1}    
    //     x2[myIndex2-1].style.display = "flex";  
    //     setTimeout(carousel2, 2000); // Change image every 2 seconds
    // }
    
}, 100);

    