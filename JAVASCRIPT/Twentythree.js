// let divs=document.getElementsByClassName("a")


// let checkDivs=Array.isArray(divs)
// console.log(checkDivs);


// let pureArray=Array.from(divs)
// console.log(pureArray);


// pureArray.forEach((x)=>{
//     x.style.backgroundColor="red"
// })


// let x=Array.isArray(pureArray)
// console.log(x);


let divs=document.getElementsByTagName("div")
Array.from(divs).forEach((x)=>{
    console.log(x);
    x.style.backgroundColor="grey"
})
