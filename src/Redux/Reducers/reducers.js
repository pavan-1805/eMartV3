const initialState = {
    prodCount : 0,
    products : [
        {

            "id": 1,
            "title": "Ben Sherman Boys' Long Sleeve Button Down Collared Dress Shirt",
            "url": "https://images-na.ssl-images-amazon.com/images/I/81MxbTD-RqL._AC_UX569_.jpg"

          },
          {

            "id": 2,
            "title": "AONI Little Girls Cute Twirly Unicorn Dresses Swing Skater Cotton",
            "url": "https://m.media-amazon.com/images/I/71ycipsNwhL._MCnd_AC_UL480_FMwebp_QL65_.jpg"

          },
          {

            "id": 3,
            "title": "DOLDOA Giant Teddy Bear Soft Stuffed Animals Plush Big Bear Toy",
            "url": "https://m.media-amazon.com/images/I/91amoa7IoWL._AC_UL480_FMwebp_QL65_.jpg"

          },
          {

            "id": 4,
            "title": "2020 Apple iPod Touch (32GB) - Pink color,Kindle Fire",
            "url": "https://m.media-amazon.com/images/I/81F57cv0CnL._AC_UY327_FMwebp_QL65_.jpg"

          },
          {

            "id": 5,
            "title": "Laura Ashley Home - Charlotte Collection-Wrinkle Free ",
            "url": "https://m.media-amazon.com/images/I/A1kFVCaVUOL._AC_UL480_FMwebp_QL65_.jpg"

          },
          {

            "id": 6,
            "title": "Color Changing Star String Lights,50 LED USB Powered Star Fairy Lights",
            "url": "https://m.media-amazon.com/images/I/81FpEW8P1+L._AC_UY327_FMwebp_QL65_.jpg"

          },
          {

            "id": 7,
            "title": "Ben Sherman Boys' Long Sleeve Button Down Collared Dress Shirt",
            "url": "https://images-na.ssl-images-amazon.com/images/I/81MxbTD-RqL._AC_UX569_.jpg"

          },
          {

            "id": 8,
            "title": "AONI Little Girls Cute Twirly Unicorn Dresses Swing Skater Cotton",
            "url": "https://m.media-amazon.com/images/I/71ycipsNwhL._MCnd_AC_UL480_FMwebp_QL65_.jpg"

          },
          {

            "id": 9,
            "title": "DOLDOA Giant Teddy Bear Soft Stuffed Animals Plush Big Bear Toy",
            "url": "https://m.media-amazon.com/images/I/91amoa7IoWL._AC_UL480_FMwebp_QL65_.jpg"

          },
          {

            "id": 10,
            "title": "2020 Apple iPod Touch (32GB) - Pink color,Kindle Fire",
            "url": "https://m.media-amazon.com/images/I/81F57cv0CnL._AC_UY327_FMwebp_QL65_.jpg"

          },
          {

            "id": 11,
            "title": "Laura Ashley Home - Charlotte Collection-Wrinkle Free ",
            "url": "https://m.media-amazon.com/images/I/A1kFVCaVUOL._AC_UL480_FMwebp_QL65_.jpg"

          },
          {

            "id": 12,
            "title": "Color Changing Star String Lights,50 LED USB Powered Star Fairy Lights",
            "url": "https://m.media-amazon.com/images/I/81FpEW8P1+L._AC_UY327_FMwebp_QL65_.jpg"

          },
          {

            "id": 13,
            "title": "Ben Sherman Boys' Long Sleeve Button Down Collared Dress Shirt",
            "url": "https://images-na.ssl-images-amazon.com/images/I/81MxbTD-RqL._AC_UX569_.jpg"

          },
          {

            "id": 14,
            "title": "AONI Little Girls Cute Twirly Unicorn Dresses Swing Skater Cotton",
            "url": "https://m.media-amazon.com/images/I/71ycipsNwhL._MCnd_AC_UL480_FMwebp_QL65_.jpg"

          },
          {

            "id": 15,
            "title": "DOLDOA Giant Teddy Bear Soft Stuffed Animals Plush Big Bear Toy",
            "url": "https://m.media-amazon.com/images/I/91amoa7IoWL._AC_UL480_FMwebp_QL65_.jpg"

          },
          {

            "id": 16,
            "title": "2020 Apple iPod Touch (32GB) - Pink color,Kindle Fire",
            "url": "https://m.media-amazon.com/images/I/81F57cv0CnL._AC_UY327_FMwebp_QL65_.jpg"

          },
          {

            "id": 17,
            "title": "Laura Ashley Home - Charlotte Collection-Wrinkle Free ",
            "url": "https://m.media-amazon.com/images/I/A1kFVCaVUOL._AC_UL480_FMwebp_QL65_.jpg"

          },
          {

            "id": 18,
            "title": "Color Changing Star String Lights,50 LED USB Powered Star Fairy Lights",
            "url": "https://m.media-amazon.com/images/I/81FpEW8P1+L._AC_UY327_FMwebp_QL65_.jpg"

          }
    ]
}

const increaseProductCount = (state=initialState,action) =>{
   
    switch(action.type){        
        case "INCREMENT" : {
            console.log(action.type);
            return {
              ...state, prodCount : state.prodCount+1
            }
        }
        case "LOGOUT" : {
          console.log(action.type);
          return {
            ...state, prodCount : 0
          }
        }
        default : return state;
    }
}

export default increaseProductCount 