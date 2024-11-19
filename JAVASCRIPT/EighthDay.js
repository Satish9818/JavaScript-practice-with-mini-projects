// //nested array
// //-------------
// let a=[10,['a','b',[true,'hello'],'c'],30]
// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[1][0]);
// console.log(a[1][1]);
// console.log(a[1][2][0]);
// console.log(a[1][2][1]);
// console.log(a[1][3]);
// console.log(a[2]);


//objects in JS
//-----------------
let person= {
    name: 'Rudra',
    age: 20,
    gender: 'male',
    height: '50kg',
    skills:['java','sql','jdbc']
}
console.log(person.skills[1]);

//updating the person values here 
person.name='Satish'
person.age=22
person.gender='male'
person.height='59kg'
person.city='KTM'//by default it is added here 
console.log(person);
console.log(person.name); //after adding it also print here 

//deleteing the values
delete person.age
console.log(person);