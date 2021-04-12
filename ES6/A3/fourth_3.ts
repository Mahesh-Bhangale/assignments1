console.log("Interface");
interface Printable{
    f_name : string,
    l_name :string,
    print: ()=> string
}
let circle:Printable={
    f_name:"Circle",
    l_name:'Radius',
    print:():string=>{return circle.f_name+" " +circle.l_name}
}

let employee:Printable={
    f_name:"Nikhil",
    l_name:'Chaudhari',
    print:():string=>{return employee.f_name+" " +employee.l_name}
}


function printAll(circle, employee){
    console.log(circle.print())
    console.log(employee.print())
}
printAll(circle, employee)