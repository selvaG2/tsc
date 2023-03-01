abstract class ElectricityBill{
    rate: number;
    units: number;

    constructor(rate: number, units: number) {
        this.rate = rate;
        this.units = units;
    }

    public abstract billDetails(): any;
}

class Domestic extends ElectricityBill{
    constructor(rate: number, units: number) {
        super(rate, units);
    }
    billDetails(): any{
        console.log("The bill amount is " + (this.rate * this.units));
    }
}

let d = new Domestic(5, 100);
d.billDetails();

class Commercial extends ElectricityBill{
    constructor(rate: number, units: number) {
        super(rate, units);
    }
    billDetails(): any {
        console.log("The bill amount is "+(this.rate*this.units));
    }
}

let d1 = new Commercial(10, 100);
d1.billDetails();