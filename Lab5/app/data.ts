export interface dataProp {
    id: number;
    name: string;
    price: number;
    discount: number;
    rating: number;
    reviews: number;
    image: any;
}

export const data: dataProp[] = [
    { id: 1, name: "Cáp chuyển từ Cổng USB sang PS2...", price: 69900, discount: 39, rating: 4, reviews: 15, image: require("../assets/images/giacchuyen.png") },
    { id: 2, name: "Cáp chuyển từ Cổng USB sang PS2...", price: 69900, discount: 39, rating: 4, reviews: 15, image: require("../assets/images/daynguon.png") },
    { id: 3, name: "Cáp chuyển từ Cổng USB sang PS2...", price: 69900, discount: 39, rating: 4, reviews: 15, image: require("../assets/images/dauchuyendoipsps2.png") },
    { id: 4, name: "Cáp chuyển từ Cổng USB sang PS2...", price: 69900, discount: 39, rating: 4, reviews: 15, image: require("../assets/images/dauchuyendoi.png") },
    { id: 5, name: "Cáp chuyển từ Cổng USB sang PS2...", price: 69900, discount: 39, rating: 4, reviews: 15, image: require("../assets/images/carbusbtops2.png") },
    { id: 6, name: "Cáp chuyển từ Cổng USB sang PS2...", price: 69900, discount: 39, rating: 4, reviews: 15, image: require("../assets/images/daucam.png") },
];