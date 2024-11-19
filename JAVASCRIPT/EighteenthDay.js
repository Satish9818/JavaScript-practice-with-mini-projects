

function Person(name,company,salary)
{
    this.EmpName=name
    this.EmpCompany=company
    this.EmpSalary=salary
}

let employee1=new Person("Satish","Google","150000")
let employee2=new Person("Jagdish","TCS","100000")

console.log(employee1);
console.log(employee2);