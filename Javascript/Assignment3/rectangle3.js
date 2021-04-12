class Rectangle{
    constructor(width, height){
        this.height = height
        this.width = width
    }
}

Rectangle.prototype.getArea = function getArea(){
    return this.height * this.width
}


function first(){
    var obj = new Rectangle(4, 5)
    document.getElementById('A1').innerHTML = "Height = " + obj.height + "And  Width = " + obj.width
}


function Area(){
    var obj = new Rectangle(4, 5)
    document.getElementById('A2').innerHTML = "Area = " + obj.getArea()
}


function three(){
    const r = new Rectangle(4, 5)
    r.height = 50
    document.getElementById('A3').innerHTML = "Area of " + r.width + " and Height " + r.height + " is = " + r.getArea()
}