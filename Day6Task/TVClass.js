// ==================================== PART A ==========================================
class TV_class
{
   constructor(brand="Sony",channel=1,price,inches,Onof,volume=50)
   {
       this.brand = brand;
       this.channel= channel;
       this.price=price;
       this.inches=inches;
       this.Onof=Onof;
       this.volume=volume;
   }
   set IncreaseVolume(val)
   {
       if(val>=0 && val<=100)
       {
           this.volume = val;
       }
   }
   set Channel(val)
   {
       if(val>0 && val<=50)
       {
           this.channel = val;
       }
   }
   resetTV()
   {
      this.channel = 1;
       this.volume =50;
   } 
   get status()
   {
    let info = this.brand + " at Channel " + this.channel + ", Volume " + this.volume;
    return info;
   }

}
let myTV = new TV_class("Samsung", 2, 43, "ON", 70);
// console.log(myTV);
myTV.IncreaseVolume = 45;
myTV.Channel=25;
// console.log(myTV);
// console.log(myTV.status);

// ==================================== PART B ==========================================

class LED_TV extends TV_class{
    constructor(scrnThickness, energy, life, reRate,viewAngle = 15, backlight = true) {
        super();
        this.scrnThickness = scrnThickness + "cm";
        this.energy = energy + "KW";
        this.life = life + "year";
        this.reRate = reRate + "seconds";
        this.viewAngle = viewAngle + "deg";
        this.backlight = backlight;
    }
    set viewingAngle(Angle) {
        this.viewAngle = Angle;
    }
    set backlit(opt) {
        if (opt === true || opt === false) {
            this.backlight = opt;
        }
    }
    get displayInfo() {
        let info = this.scrnThickness + " screen thickness with amazing refreshing rate of " + this.reRate + " having current viewing angle " + this.viewAngle + " with backlight " + this.backlight;
        return info;
    }

}

let Bravia = new LED_TV( 0.25, 35, 5, 10);
// console.log(Bravia);
// console.log(Bravia.displayInfo);

Bravia.viewingAngle = 25;
// console.log(Bravia.viewAngle);


class Plasma_TV extends TV_class{
    constructor(scrnThickness, energy, life, reRate, viewAngle = 35, backlight = true) {
        super();
        this.scrnThickness = scrnThickness + "cm";
        this.energy = energy + "KW";
        this.life = life + "year";
        this.reRate = reRate + "seconds";
        this.viewAngle = viewAngle + "deg";
        this.backlight = backlight;
    }
    set viewingAngle(Angle) {
        this.viewAngle = Angle;
    }
    set backlit(opt) {
        if (opt === true || opt === false) {
            this.backlight = opt;
        }
    }
    get displayInfo() {
        let info = this.scrnThickness + " screen thickness with amazing refreshing rate of " + this.reRate + " having current viewing angle " + this.viewAngle + " with backlight " + this.backlight;
        return info;
    }

}

let LivePlasma = new Plasma_TV(0.15, 45, 3, 7);
// console.log(LivePlasma);
// console.log(LivePlasma.displayInfo);

LivePlasma.backlit = false;
// console.log("Backlit of LivePlasma is switched to " + LivePlasma.backlight);