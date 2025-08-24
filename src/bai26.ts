import { Product } from "./bai08";

export class Order {
    productList: Product[];
    constructor(productList: Product[]) {
        this.productList = productList
    }
    calcTotalPrice(): number {
        return this.productList.reduce(
            (total, currentValue) => total + currentValue.price,
            0
        )
    }
}