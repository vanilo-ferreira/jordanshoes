import { Produtos } from "../interfaces/IProdutos";

import jordan1 from "../assets/jordan1.svg";
import jordan2 from "../assets/jordan2.svg";
import jordan3 from "../assets/jordan3.svg";
import jordan4 from "../assets/jordan4.svg";
import jordan5 from "../assets/jordan5.svg";
import jordan6 from "../assets/jordan6.svg";

export const produtos: Array<Produtos> = [
    { name: 'Air Jordan 1 Mid Dutch Green', description: "Tênis Air Jordan" , value: 1199.99, image: jordan1},
    { name: 'Air Jordan 1 High Zoom CMFT Tropical Twist', description: "Tênis Air Jordan" , value: 1049.00, image: jordan2},
    { name: 'Air Jordan 1 Mid Dutch Lilac', description: "Tênis Air Jordan" , value: 1350.00, image: jordan3},
    { name: 'Air Jordan 1 Mid GS "Light Smoke Grey"', description: "Tênis Air Jordan" , value: 1585.00, image: jordan4},
    { name: 'Air Jordan 1 Mid SE Bright Citrus', description: "Tênis Air Jordan" , value: 949.99, image: jordan5},
    { name: 'Air Jordan 1 Mid Grey Camo', description: "Tênis Air Jordan" , value: 999.99, image: jordan6}
];