// let NodeList=document.querySelectorAll(".a")
// console.log(NodeList);



// NodeList.forEach((a) => {
//     console.log(a);
// });


// console.log("=================================================");


// Array.from(NodeList).map((a)=>{
//     console.log(a);
// })

function chgColor(){
    let btn=document.getElementsByTagName("button")
    btn[0].style.backgroundColor="red"
    let x=document.querySelector("h1")
    x.style.backgroundColor="blue"
    x.innerText="JAVASCRIPT"
}