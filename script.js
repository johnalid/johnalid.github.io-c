const tog =document.querySelector(".tog");
const hd =document.querySelector(".hide");



tog.addEventListener("click", ()=>{
    if(hd.classList.contains("active")){
        hd.classList.remove("active")
    }else{
        hd.classList.add("active")
    }
});

window.addEventListener("scroll", ()=>{
const showed = document.querySelector(".top");
showed.classList.toggle("shw", scrollY >= 40);

}) 


// for hide1


