let inputs= document.querySelectorAll("input")
let create=document.querySelector("button")
let myTable=document.querySelector(".myTable")
let warning=document.querySelector("#warning")


let formHandle=()=>{

   

    let userName=inputs[0].value
    let userSalary=inputs[1].value
    let userCompany=inputs[2].value

    if(userName==""||userSalary==""||userCompany==""){
        // alert("dont leave input empty")
        warning.innerText="Please fill all the fields"
        warning.style.color="red"
        warning.style.textAlign="center"
   }
   else if(userName.length>=10){


    warning.innerText=""

  
    let tr1=document.createElement("tr")
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")

    td1.innerText=userName
    td2.innerText=userSalary
    td3.innerText=userCompany

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)

    myTable.appendChild(tr1)
    

    inputs[0].value=""
    inputs[1].value=""
    inputs[2].value=""
   }
   else{
    warning.innerText="Fill the Name with proper Characters"
    warning.style.color="red"
    warning.style.textAlign="center"
   }
    
}

