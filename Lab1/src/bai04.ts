export class Rectangle {
    width: number;
    height: number;
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }    
  calcArea(): number {
    return this.width * this.height;
  }
  calcPerimeter(): number {
    return (this.width + this.height) * 2
  }
  
}