let buttonPersonal=document.querySelector(".button-personal")
let personalContent=document.querySelector(".personal-content")
let buttonBusiness=document.querySelector(".button-business")
let businessContent=document.querySelector(".business-content")
let buttonEnterprise=document.querySelector(".button-enterprise")
let enterpriseContent=document.querySelector(".enterprise-content")
let headerContent=document.querySelector(".header-content")
let buttons= [buttonPersonal,buttonBusiness,buttonEnterprise]
let Contents= [personalContent,businessContent,enterpriseContent]
console.log(buttons)
let nav=document.querySelector("header .pages ul")
let navButton =document.querySelector("header .bar")
let iconButton =document.querySelector("header .bar i")
let navlist =document.querySelectorAll("header .pages ul li")

let mobileButtons=document.querySelectorAll("header .mobile-buttons div")
console.log(mobileButtons)

    navButton.addEventListener("click",function() {
        console.log("nkmk")
        
        navlist.forEach((e)=>{
            e.classList.remove("button-hover")
            
            
           
        })
        let statue= navButton.getAttribute("data-statue")
        if (statue==="false") {
            iconButton.classList.remove("fa-bars")
            nav.style.backgroundColor="white"
            nav.style.left="1rem"
            iconButton.classList.add("fa-xmark")
            
            navButton.setAttribute("data-statue", true);
            navlist.forEach(e => {
                e.style.transform="translateX(2%)"
                
            });
        } else {
            iconButton.classList.remove("fa-xmark")
            iconButton.classList.add("fa-bars")
            mobileButtons.forEach(e=>{
                e.style.opacity="0"
                
            })
            Contents.forEach(e=>{
                
                e.style.left="-70rem"
            })
            nav.style.backgroundColor="transparent"
            nav.style.left="-70rem"
            navlist.forEach(e => {
                e.classList.add("button-hover")
                e.style.transform="translateX(-10%)"
                
            });
            navButton.setAttribute("data-statue", false);
            
        }
        buttons.forEach((e,i)=>{
            e.addEventListener("click",function(){
                console.log(i)
                nav.style.left="-70rem"
                Contents[i].style.opacity="1"
                Contents[i].style.left="70rem "
                
                
                mobileButtons[i].style.opacity="1"
                mobileButtons.forEach((e,index) => {
                    e.addEventListener("click",()=>{
                        mobileButtons[i].style.opacity="0"
                        nav.style.left="1rem"
                        Contents[i].style.left="-70rem"
    
                    })
                });
                
            })
        })
    })
    
    let mobileUl= document.querySelectorAll(".ul-mobile")
    let ulstate= false
    
    console.log(mobileUl)
mobileUl.forEach((e)=>{
    e.addEventListener("click" ,function(){
        if(ulstate==false){
        e.parentElement.children[1].style.display="block"
        e.children[0].style.transform="rotate(180deg) !important"
        ulstate=true
    }
    else{
        e.parentElement.children[1].style.display="none"
        e.children[0].style.transform="rotate(0deg) !important"
            ulstate=false

        }
    })
})

    
const mediaQuery = window.matchMedia('(min-width: 1000px)')
// scroll animation
const observer= new IntersectionObserver((e)=>{
    e.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")

        }
    })
})
const hiddenElements=document.querySelectorAll(".hidden")
hiddenElements.forEach((e)=>{
    observer.observe(e)
})
let signButtons=document.querySelectorAll(".singin .content button")
console.log(signButtons)
signButtons.forEach((el)=>{
    el.addEventListener("click",()=>{
        if(el.classList.contains("false")){
            console.log("nikymak");
            el.classList.remove("false")
            el.classList.add("true")
        }
        else{
            el.classList.remove("true")
            el.classList.add("false")

        }
    })
})