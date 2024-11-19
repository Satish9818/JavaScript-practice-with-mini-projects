

// let maxValue=Math.max(10,20)
// let minValue=Math.min(10,20)

// console.log(maxValue);
// console.log(minValue);

// let x=Math.round(10.5);
// let y=Math.floor(10.9)
// let z=Math.ceil(10.1)

// console.log(x);
// console.log(y);
// console.log(z);

// let arr=[1,4,-6,10,14,30,-30]

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));


let x=prompt("Enter first Number")
let y=prompt("Enter another number")


function add(x,y){
    return (Number(x)+Number(y))
}
function minus(x,y)
{
    return x-y;
}
function mul(x,y)
{
    return x*y;
}
function div(x,y)
{
    return x/y;
}

let addValue=add(x,y)
let minValue=minus(x,y)
let mulValue=mul(x,y)
let divValue=div(x,y)

console.log(addValue);
console.log(minValue);
console.log(mulValue);

console.log(divValue);

