class circle 
{
  constructor(radius,color)
  {

    this.radius = radius;
    this.color = color;

    if (this.radius === undefined && this.color === undefined) {
        console.log("I am empty");
    } else if (this.color === undefined) {
        console.log("Radius is present");
    } else {
        console.log("Radius and color both are present");
    }

  }
  get Area()
  {
      return this.radius*this.radius*Math.PI;
  }

  get Radius()
  {
      return this.radius;
  }
  
  get Color()
  {
      return this.color;
  }


  set Radius(val)
  {
      this.radius = val;
  }
   set Color(val)
   {
       this.color=val;
   }

}

var cir = new circle();
cir.Color="Green";
cir.Radius=10;
console.log(cir.Radius);
console.log(cir.Color);
console.log(cir.Area);