let actualIndex=0;

let imageArray=document.querySelectorAll('.highlight__img');
let container=document.querySelector(".sliderContainer__dots");

let htmlDot="";
let sliderLength=imageArray.length;

let btnNext=document.querySelector(".sliderContainer__chevronRight");
let btnPrev=document.querySelector(".sliderContainer__chevronLeft");

imageArray[actualIndex].classList.add("isOn");

imageArray.forEach((element,i) => {
    console.log(element, sliderLength,i);

    htmlDot+=`<div class="sliderContainer__dots--dot"></div>`
});
container.innerHTML=htmlDot;
let dot=document.querySelectorAll(".sliderContainer__dots--dot");
dot[actualIndex].classList.add("isSlct");

btnNext.addEventListener("click", function() {
    if(actualIndex<sliderLength-1){
        actualIndex++;
        dot[actualIndex].classList.add("isSlct");
        dot[actualIndex-1].classList.remove("isSlct");
        imageArray[actualIndex].classList.add("isOn");
        imageArray[actualIndex-1].classList.remove("isOn");
     
    }else{
        dot[actualIndex].classList.remove("isSlct");
        imageArray[actualIndex].classList.remove("isOn");
        actualIndex=0;
        dot[actualIndex].classList.add("isSlct");
        imageArray[actualIndex].classList.add("isOn");
    }
});

btnPrev.addEventListener("click", ()=> {
    if(actualIndex>0){
        actualIndex--;
        dot[actualIndex].classList.add("isSlct");
        dot[actualIndex+1].classList.remove("isSlct");
        imageArray[actualIndex].classList.add("isOn");
        imageArray[actualIndex+1].classList.remove("isOn");
    }else{
        dot[actualIndex].classList.remove("isSlct");
        imageArray[actualIndex].classList.remove("isOn");
        actualIndex=sliderLength-1;
        dot[actualIndex].classList.add("isSlct");
        imageArray[actualIndex].classList.add("isOn");
    }
});

dot.forEach((element,i) => {
    element.addEventListener("click",()=>{
        imageArray[actualIndex].classList.remove("isOn");
        dot[actualIndex].classList.remove("isSlct");
        actualIndex=i
        imageArray[actualIndex].classList.add("isOn");
        dot[actualIndex].classList.add("isSlct");  
    })
});

let intervalChange=()=>{
    if(actualIndex<sliderLength-1){
        actualIndex++;
        dot[actualIndex].classList.add("isSlct");
        dot[actualIndex-1].classList.remove("isSlct");
        imageArray[actualIndex].classList.add("isOn");
        imageArray[actualIndex-1].classList.remove("isOn");
     
    }else{
        dot[actualIndex].classList.remove("isSlct");
        imageArray[actualIndex].classList.remove("isOn");
        actualIndex=0;
        dot[actualIndex].classList.add("isSlct");
        imageArray[actualIndex].classList.add("isOn");
    }
}
setInterval(intervalChange,2500);





