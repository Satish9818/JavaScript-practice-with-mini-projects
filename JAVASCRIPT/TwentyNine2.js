
let table=document.createElement("table")


let tr1=document.createElement("tr") 
let tr2=document.createElement("tr")

let td1=document.createElement("td")
let td2=document.createElement("td")
let td3=document.createElement("td")
let td4=document.createElement("td")

  
td1.innerText="Cell 1"
td2.innerText="Cell 2"
td3.innerText="Cell 3"
td4.innerText="Cell 4"

tr1.appendChild(td1)
 tr1.appendChild(td2)
 tr2.appendChild(td3)
tr2.appendChild(td4)

table.appendChild(tr1)
table.appendChild(tr2)

table.border=1

function a(){
    document.body.append(table)
}
function b(){
    let tr3=document.createElement("tr")

    let td5=document.createElement("td")

    let td6=document.createElement("td")

    td5.innerText="Cell 5"
    td6.innerText="Cell 6"
    tr3.appendChild(td5)
    tr3.appendChild(td6)

    table.appendChild(tr3)


}