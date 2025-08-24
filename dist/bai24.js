"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditioner = exports.Fan = void 0;
class Appliance {
    turnOn() {
    }
}
class Fan extends Appliance {
    turnOn() {
        console.log("Fan started");
    }
}
exports.Fan = Fan;
class AirConditioner extends Appliance {
    turnOn() {
        console.log("Air conditioner started");
    }
}
exports.AirConditioner = AirConditioner;
