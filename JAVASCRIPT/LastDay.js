let section=document.querySelector("section")
let article=document.querySelector("article")
let div=document.querySelector("div")


section.addEventListener("click",()=>{
    section.style.backgroundColor="red"
    console.log("SECTION");
    event.stopPropagation()
})


article.addEventListener("click",()=>{
    article.style.backgroundColor="green"
    console.log("ARTICLE");
    event.stopPropagation()
})

div.addEventListener("click",()=>{
    div.style.backgroundColor="blue"
    console.log("DIV");
    event.stopPropagation()
})
