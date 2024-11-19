

// let arr=[10,20,30,40]

// let z=arr.filter(
//     (element)=>{
//         return element<30
//     }
// )
// console.log(z);



let arr1=[
    {name:"JAVA",price:2000 },
    {name:"JavaScript",price:1500},
    {name:"HTML",price:1000},
    {name:"React-js",price:1800}
]


let y=arr1.filter(
    (element)=>{
        return element.price<2000
    }
)
console.log(y);

let finalprice=y.reduce(
    (acc,cv)=>{
        return 
    }
)

// y.forEach(
//     (ele)=>{ console.log(ele);}
// )


// let arr2=[10,20,30,40]

// let finalvalue=arr2.reduce(
//     (acc,cv)=>{

//         return acc+cv;

//     }


// ,0)

// console.log(finalvalue);


// let arr2=[10,20,30,40]

// let finalvalue=arr2.reduce(
//     (acc,cv)=>{
//         console.log(acc);
//         return acc+cv;

//     }


// )

// console.log(finalvalue);