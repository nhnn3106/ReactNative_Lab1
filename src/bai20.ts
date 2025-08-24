interface Vehicle {
    runBy: string
}

export class Car implements Vehicle {
    runBy = "fossil fuel";

}
export class Bike implements Vehicle {
    runBy = "human force";

}