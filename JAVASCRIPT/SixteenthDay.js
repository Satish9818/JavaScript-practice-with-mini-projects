

// let a=[1,2,3]
// let b=[4,5,6]

// let c=[...a,b]
// let c=[...a,...b]
// console.log(c);


//-----------------------------rest


// function x(a,b,...c)
// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// x(10,20,30,40,50,60,70,80)


//--------------------------------------------------//

let name1="satish";

let person1={

 name1,
 salary1:15000


}

let person2={
    name2:"Jagdish",
    salary2:14000
}

let skills=["Html","Css","JavaScript"]

let info={
    ...person1,
    // person2,
    // skills
    company: "Tcs"
}

console.log(person1);
// console.log(person1.name1);
// console.log(info);
// console.log(info.person1);
// console.log(info.person2);
// console.log(info.skills[1]);