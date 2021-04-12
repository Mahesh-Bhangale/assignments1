console.log("Interface");
var circle = {
    f_name: "Circle",
    l_name: 'Radius',
    print: function () { return circle.f_name + " " + circle.l_name; }
};
var employee = {
    f_name: "Nikhil",
    l_name: 'Chaudhari',
    print: function () { return employee.f_name + " " + employee.l_name; }
};
function printAll(circle, employee) {
    console.log(circle.print());
    console.log(employee.print());
}
printAll(circle, employee);
