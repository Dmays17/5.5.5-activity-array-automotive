
//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class car extends VehicleModule.Vehicle{
    constructor(make,model,year,coolor,mileage){
        super(make,model,year,coolor,mileage)
        this.maximumPassengers =5 
        this.passager = 0
        this.numberOfWheels = 4
        this.fuel = 10
        this.scheduleService = false

    }

    loadPassenger(){
        if(this.passenger + this.numberOfPassengers <= this.maximumPassengers){
            const availabeRoom =true
            this.passager+=numberOfPassengers
        }
    }
    start() {
        if(this.fuel >0) {
            this.started = true
        }
    }
    scheduleService(mileage){
        if(mileage >30000){
            this.scheduleService = true
        }
    }

}