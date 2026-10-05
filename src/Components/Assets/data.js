import p1_img from './product_1.png';
import p1_img2 from './product_1_back.png';
import p2_img from './product_2.png';
import p2_img2 from './product_2_back.png';
import p3_img from './product_3.png'
import p4_img from './product_4.png'
import p4_img2 from './product_4_back.png'

let data_product = [
  {
    id:1,
    name:"Eye of Insight Sweatshirt",
    image:[p1_img, p1_img2],
    new_price:50.00,
    old_price:80.50,
  },
  {id:2,
    name:"Peekaboo Winter Cap",
    image:[p2_img,p2_img2],
    new_price:20.00,
    old_price:30.50,
  },
  {id:3,
    name:"Pixel Drift Winter Cap",
    image:[p3_img],
    new_price:15.00,
    old_price:25.50,
  },
  {id:4,
    name:"Michaela's Swag T-Shirt",
    image:[p4_img, p4_img2],
    new_price:15.50,
    old_price:20.00,
  },
];

export default data_product;
