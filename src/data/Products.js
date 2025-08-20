const products = {
  men: {
    categories: [
      {name:'trousers',
        image:'https://constant.myntassets.com/pwa/assets/img/f8262050-fe52-4390-98b8-21c634e09bae1559216808891-Men-category-cards_06_trousers.jpg'
      }, 
      {name:'jeans',
        image:'https://constant.myntassets.com/pwa/assets/img/1f2ab0ea-e6a3-4efe-b248-cbec95a900161559216808913-Men-category-cards_04_jeans.jpg',
       },
      {name:'shoes',
        image:'https://constant.myntassets.com/pwa/assets/img/c05e6606-cd11-4d96-895c-b1b8defc2d871559216808925-Men-category-cards_03_casual_shoes.jpg',
       },
      {name:'tshirts',
        image:'https://constant.myntassets.com/pwa/assets/img/b2d6cb61-2796-46ba-b813-bf723c8fc27e1559216808945-Men-category-cards_01_tshirts.jpg',
       },
      {name:'shirts',
        image:'https://constant.myntassets.com/pwa/assets/img/3c637a0a-0cda-45a7-8ce8-5bb212d4b6411559216808935-Men-category-cards_02_shirts.jpg',
       },
       {name: 'flipflop',
      image:'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/30/IlgrnsQG_2ccd62275792440f9d7f537eeada25a0.png'
  },],
    trousers: [
      {
        id: 'shirt1',
        name: 'Classic White Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹799',
        description: 'A timeless white shirt for every occasion.',
      },
      {
        id: 'shirt2',
        name: 'Denim Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹999',
        description: 'Stylish denim for casual wear.',
      },
      
    ],
    shoes: [
      {
        id: 'shoes1',
        name: 'Classic black shoes',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/3/paioXPum_7bbbdd2c194546c48db078ae975e880f.jpg',
        price: 'Rs799',
        oldprice:'Rs1400',
        offer:'(40%off)',
        description: 'A timeless white shirt for every occasion.',
      },
      {
        id: 'shoes2',
        name: 'Mens Formal lofars',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/27/ouJpyOjT_242efd24f928429ea79f59f691679601.jpg',
        price: 'Rs899',
         oldprice:'Rs1400',
        offer:'(40%off)',
        description: 'Stylish denim for casual wear.',
      },
      {
        id: 'shoes3',
        name: 'Mens texture Formal lofars',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23027744/2023/5/5/537dc43e-fe8e-4dfa-abe7-1397dfa94c6c1683264050670ActionDRIVE-42MensBrownSyntheticLeatherSlip-onFormalshoes1.jpg',
        price: 'Rs1999',
         oldprice:'Rs1400',
        offer:'(40%off)',
        description: 'Stylish denim for casual wear.',
      },
      {
        id: 'shoes4',
        name: 'Mens lether Formal drbys',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/APRIL/1/f1j4g1wn_6a69de93ad774ccaa75a520fd0c90a0f.jpg',
        price: 'Rs2999',
         oldprice:'Rs4400',
        offer:'(40%off)',
        description: 'Stylish denim for casual wear.',
      },
      {
        id: 'shoes5',
        name: 'Mens solid Formal lofars',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/16/Zhjbb2dW_94b73f71904a492cbddd8515289f851a.jpg',
        price: 'Rs999',
         oldprice:'rs1400',
        offer:'(32%off)',
        description: 'Stylish denim for casual wear.',
      },
      // ...add at least 15 shirt objects
    ],
    shirts: [
      {
        id: 'shirt1',
        name: 'Classic White Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹799',
        description: 'A timeless white shirt for every occasion.',
      },
      {
        id: 'shirt2',
        name: 'Denim Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹999',
        description: 'Stylish denim for casual wear.',
      },
      // ...add at least 15 shirt objects
    ],
     pants: [
      {
        id: 'pant1',
        name: 'Classic White Shirt',
        image: 'https://via.placeholder.com/150',
        price: 'Rs799',
         oldprice:'rs1400',
        offer:'(40%off)',
        description: 'A timeless white shirt for every occasion.',
      },
      {
        id: 'shirt2',
        name: 'Denim Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹999',
         oldprice:'rs1400',
        offer:'(40%off)',
        description: 'Stylish denim for casual wear.',
      },
      // ...add at least 15 shirt objects
    ],
  },
  // Add similar structure for women and kids
// -----------------------------womens section Api-----------------------------
 women: {
  categories: [
      {name:'trousers',
        image:'https://constant.myntassets.com/pwa/assets/img/f8262050-fe52-4390-98b8-21c634e09bae1559216808891-Men-category-cards_06_trousers.jpg'
      }, 
      {name:'jeans',
        image:'https://constant.myntassets.com/pwa/assets/img/1f2ab0ea-e6a3-4efe-b248-cbec95a900161559216808913-Men-category-cards_04_jeans.jpg',
       },
      {name:'shoes',
        image:'https://constant.myntassets.com/pwa/assets/img/c05e6606-cd11-4d96-895c-b1b8defc2d871559216808925-Men-category-cards_03_casual_shoes.jpg',
       },
      {name:'tshirts',
        image:'https://constant.myntassets.com/pwa/assets/img/b2d6cb61-2796-46ba-b813-bf723c8fc27e1559216808945-Men-category-cards_01_tshirts.jpg',
       },
      {name:'shirts',
        image:'https://constant.myntassets.com/pwa/assets/img/3c637a0a-0cda-45a7-8ce8-5bb212d4b6411559216808935-Men-category-cards_02_shirts.jpg',
       },
       {name: 'flipflop',
      image:'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/30/IlgrnsQG_2ccd62275792440f9d7f537eeada25a0.png'
  },],
    shirts: [
      {
        id: 'shirt1',
        name: 'Classic White Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹799',
         oldprice:'rs1400',
        offer:'(40%off)',
        description: 'A timeless white shirt for every occasion.',
      },
      {
        id: 'shirt2',
        name: 'Denim Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹999',
         oldprice:'rs1400',
        offer:'(40%off)',
        description: 'Stylish denim for casual wear.',
      },
      // ...add at least 15 shirt objects
    ],
  }, 
//   ------------------kids section Api---------------------------
  kids: {
    
      categories: [
      {name:'trousers',
        image:'https://constant.myntassets.com/pwa/assets/img/f8262050-fe52-4390-98b8-21c634e09bae1559216808891-Men-category-cards_06_trousers.jpg'
      }, 
      {name:'jeans',
        image:'https://constant.myntassets.com/pwa/assets/img/1f2ab0ea-e6a3-4efe-b248-cbec95a900161559216808913-Men-category-cards_04_jeans.jpg',
       },
      {name:'shoes',
        image:'https://constant.myntassets.com/pwa/assets/img/c05e6606-cd11-4d96-895c-b1b8defc2d871559216808925-Men-category-cards_03_casual_shoes.jpg',
       },
      {name:'tshirts',
        image:'https://constant.myntassets.com/pwa/assets/img/b2d6cb61-2796-46ba-b813-bf723c8fc27e1559216808945-Men-category-cards_01_tshirts.jpg',
       },
      {name:'shirts',
        image:'https://constant.myntassets.com/pwa/assets/img/3c637a0a-0cda-45a7-8ce8-5bb212d4b6411559216808935-Men-category-cards_02_shirts.jpg',
       },
       {name: 'flipflop',
      image:'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/30/IlgrnsQG_2ccd62275792440f9d7f537eeada25a0.png'
  },],
    shirts: [
      {
        id: 'shirt1',
        name: 'Classic White Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹799',
        description: 'A timeless white shirt for every occasion.',
      },
      {
        id: 'shirt2',
        name: 'Denim Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹999',
        description: 'Stylish denim for casual wear.',
      },
      // ...add at least 15 shirt objects
    ],
  },
   Home: {
    
     categories: [
      {name:'trousers',
        image:'https://constant.myntassets.com/pwa/assets/img/f8262050-fe52-4390-98b8-21c634e09bae1559216808891-Men-category-cards_06_trousers.jpg'
      }, 
      {name:'jeans',
        image:'https://constant.myntassets.com/pwa/assets/img/1f2ab0ea-e6a3-4efe-b248-cbec95a900161559216808913-Men-category-cards_04_jeans.jpg',
       },
      {name:'shoes',
        image:'https://constant.myntassets.com/pwa/assets/img/c05e6606-cd11-4d96-895c-b1b8defc2d871559216808925-Men-category-cards_03_casual_shoes.jpg',
       },
      {name:'tshirts',
        image:'https://constant.myntassets.com/pwa/assets/img/b2d6cb61-2796-46ba-b813-bf723c8fc27e1559216808945-Men-category-cards_01_tshirts.jpg',
       },
      {name:'shirts',
        image:'https://constant.myntassets.com/pwa/assets/img/3c637a0a-0cda-45a7-8ce8-5bb212d4b6411559216808935-Men-category-cards_02_shirts.jpg',
       },
       {name: 'flipflop',
      image:'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/30/IlgrnsQG_2ccd62275792440f9d7f537eeada25a0.png'
  },],
    shirts: [
      {
        id: 'shirt1',
        name: 'Classic White Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹799',
        description: 'A timeless white shirt for every occasion.',
      },
      {
        id: 'shirt2',
        name: 'Denim Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹999',
        description: 'Stylish denim for casual wear.',
      },
      // ...add at least 15 shirt objects
    ],
  },
   Beauty: {
    
     categories: [
      {name:'trousers',
        image:'https://constant.myntassets.com/pwa/assets/img/f8262050-fe52-4390-98b8-21c634e09bae1559216808891-Men-category-cards_06_trousers.jpg'
      }, 
      {name:'jeans',
        image:'https://constant.myntassets.com/pwa/assets/img/1f2ab0ea-e6a3-4efe-b248-cbec95a900161559216808913-Men-category-cards_04_jeans.jpg',
       },
      {name:'shoes',
        image:'https://constant.myntassets.com/pwa/assets/img/c05e6606-cd11-4d96-895c-b1b8defc2d871559216808925-Men-category-cards_03_casual_shoes.jpg',
       },
      {name:'tshirts',
        image:'https://constant.myntassets.com/pwa/assets/img/b2d6cb61-2796-46ba-b813-bf723c8fc27e1559216808945-Men-category-cards_01_tshirts.jpg',
       },
      {name:'shirts',
        image:'https://constant.myntassets.com/pwa/assets/img/3c637a0a-0cda-45a7-8ce8-5bb212d4b6411559216808935-Men-category-cards_02_shirts.jpg',
       },
       {name: 'flipflop',
      image:'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/30/IlgrnsQG_2ccd62275792440f9d7f537eeada25a0.png'
  },],
    shirts: [
      {
        id: 'shirt1',
        name: 'Classic White Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹799',
        description: 'A timeless white shirt for every occasion.',
      },
      {
        id: 'shirt2',
        name: 'Denim Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹999',
        description: 'Stylish denim for casual wear.',
      },
      // ...add at least 15 shirt objects
    ],
  },
   Genz: {
    
     categories: [
      {name:'trousers',
        image:'https://constant.myntassets.com/pwa/assets/img/f8262050-fe52-4390-98b8-21c634e09bae1559216808891-Men-category-cards_06_trousers.jpg'
      }, 
      {name:'jeans',
        image:'https://constant.myntassets.com/pwa/assets/img/1f2ab0ea-e6a3-4efe-b248-cbec95a900161559216808913-Men-category-cards_04_jeans.jpg',
       },
      {name:'shoes',
        image:'https://constant.myntassets.com/pwa/assets/img/c05e6606-cd11-4d96-895c-b1b8defc2d871559216808925-Men-category-cards_03_casual_shoes.jpg',
       },
      {name:'tshirts',
        image:'https://constant.myntassets.com/pwa/assets/img/b2d6cb61-2796-46ba-b813-bf723c8fc27e1559216808945-Men-category-cards_01_tshirts.jpg',
       },
      {name:'shirts',
        image:'https://constant.myntassets.com/pwa/assets/img/3c637a0a-0cda-45a7-8ce8-5bb212d4b6411559216808935-Men-category-cards_02_shirts.jpg',
       },
       {name: 'flipflop',
      image:'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/30/IlgrnsQG_2ccd62275792440f9d7f537eeada25a0.png'
  },],
    shirts: [
      {
        id: 'shirt1',
        name: 'Classic White Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹799',
        description: 'A timeless white shirt for every occasion.',
      },
      {
        id: 'shirt2',
        name: 'Denim Shirt',
        image: 'https://via.placeholder.com/150',
        price: '₹999',
        description: 'Stylish denim for casual wear.',
      },
      // ...add at least 15 shirt objects
    ],
  },


};

export default products;
