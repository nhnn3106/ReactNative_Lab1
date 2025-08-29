export class Car {
  brand: string;
  model: string;
  year: number;
  constructor(brand: string, model: string, year: number) {
    this.brand = brand
    this.model = model
    this.year = year
  }
  dislayInfo(): void {
    console.log(`Car: [brand: ${this.brand}, model: ${this.model}, year: ${this.year}]`)
  }
}