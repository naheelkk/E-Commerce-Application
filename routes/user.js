var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name: 'Samsung S22',
      category: 'Mobile',
      description: 'This is S22',
      image: 'https://www.91-img.com/pictures/144219-v3-samsung-galaxy-s22-mobile-phone-large-1.jpg?tr=q-80'
    },
    {
      name: 'Iphone 14Pro',
      category:'Mobile',
      description: 'A16 Bionic',
      image:'https://www.myg.in/images/thumbnails/624/460/detailed/32/APPLE_iPhone_14_Pro_Deep_Purple-1.jpg'
    },
    {
      name: 'Motorola Edge 30 Fusion',
      category:'Mobile',
      description:'Color of 2023',
      image:'https://motorolain.vtexassets.com/arquivos/ids/157906-800-auto?width=800&height=auto&aspect=true'
    },
    {
      name: 'Redmi Note 12Pro+',
      category:'Mobile',
      description:'200MP Samsung Sensor',
      image:'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/r/f/-original-imaghkvuhzwge3za.jpeg?q=70'
    },
    {
      name: 'Realme GT Neo 3',
      category:'Mobile',
      description:'Reliable',
      image:'https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/mobile/p/n/u/-original-imagetmezhss8jzf.jpeg?q=70'

    }
  ]
  res.render('index', { products,admin:false});
});

module.exports = router;
