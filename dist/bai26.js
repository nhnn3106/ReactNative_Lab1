"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(productList) {
        this.productList = productList;
    }
    calcTotalPrice() {
        return this.productList.reduce((total, currentValue) => total + currentValue.price, 0);
    }
}
exports.Order = Order;
