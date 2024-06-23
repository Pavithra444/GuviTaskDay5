class Circle{
    constructor(radius=1.0,color="red")
    {
            this.radius=radius;
            this.color=color;
    }
    Circle()
    { }
    Circle(radius)
    { }
    Circle(radius,color)
    { }
    getRadius()
    {
        return this.radius;
    }
    setRadius(radius)
    {
        this.radius=radius;
    }
    getColor()
    {
        return this.color;
    }
    setColor(color)
    {
        this.color=color;
    }
    toString()
    {
        return ("Circle[radius = " +this.radius+", Color = "+this.color+"]");
    }
    getArea()
    {
        return Number(Math.PI*this.radius*this.radius);
    }
    getCircumference()
    {
       return Number(2*Math.PI*this.radius);
    }

}

const Cir1=new Circle(5,"blue");
let Str=Cir1.toString();
let Radius=Cir1.getRadius();
let Color=Cir1.getColor();
let Area=Cir1.getArea();
let Circum=Cir1.getCircumference();
console.log(Str);
console.log("Radius = "+Radius);
console.log("Color = "+Color);
console.log("Area of the Circle = "+Area);
console.log("Circumference of the Circle= "+Circum);

const Cir2=new Circle();        //This object created to show the result of default values

Str=Cir2.toString();
Radius=Cir2.getRadius();
Color=Cir2.getColor();
Area=Cir2.getArea();
Circum=Cir2.getCircumference();

console.log(Str);
console.log("Radius = "+Radius);
console.log("Color = "+Color);
console.log("Area of the Circle = "+Area);
console.log("Circumference of the Circle= "+Circum);