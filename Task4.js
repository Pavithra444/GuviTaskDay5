class Uber{
    constructor(km,PricePerkm=50,waitingCharge=0)
    {
        this.km=km;
        this.PricePerkm=PricePerkm;
        this.waitingCharge=waitingCharge;
    }

getRidePrice()
{
    return (this.km*this.PricePerkm)+this.waitingCharge;
}

}

let Ride1=new Uber(0.500);
let rideRate=Ride1.getRidePrice();
console.log("Ride1 Rate = "+rideRate);

let Ride2=new Uber(27,60,200);
rideRate=Ride2.getRidePrice();
console.log("Ride2 Rate = "+rideRate);