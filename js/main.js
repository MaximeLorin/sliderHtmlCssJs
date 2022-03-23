let num=120;

function fuzz(param){
    let str="";
    if(param%3===0 ){
        str+="fizz";
    }
    if(i%5===0){
        str+="buzz";
    }
    if(i%3!=0 &&!i%5!=0){
        str=param;
    }
    return str;
}

for(i=0;i<num;i++){
    console.log(fuzz(i))
}

let test=document.querySelector("h1");

console.log(test.innerText)



