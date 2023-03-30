var express = require("express");
var router = express.Router();
var productHelper = require('../helpers/product-helpers')
var adminHelpers = require('../helpers/admin-helpers')

router.get("/", function (req, res, next) {
  productHelper.getAllProducts().then((products)=>{
    res.render("admin/view-products", { admin: true, products });
  })
});

router.get("/admin-login",(req,res)=>{
  res.render("/admin/login")
})

// router.get("/admin-login", (req, res, next) => {
//   if(req.session.admin){
//     res.redirect("/");
//   }
//   else{
//     res.render("admin/login",{loginErr: req.session.adminLoginErr})
//     req.session.adminLoginErr = false;
//   }
// });

// router.post("/admin-login",(req,res)=>{
//   adminHelpers.doLogin(req.body).then((response)=>{
//     if(response.status){
//       req.session.admin = response.admin
//       req.session.admin.loggedIn = true;
//       res.redirect("admin/view-products")
//     }
//     else{
//       req.session.adminLoginErr = true;
//       res.redirect("/admin-login")
//     }
//   })
// })


router.get("/add-product", function (req, res) {
  res.render("admin/add-product");
});

router.post("/add-product", (req, res) => {
  productHelper.addProduct(req.body,(id)=>{
    let image = req.files.image
    console.log(id);
    image.mv('./public/images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-product')
      }else{
        console.log(err);      }
    })
    
  })
});

router.get('/delete-product/:id',(req,res)=>{
  let proId = req.params.id
  console.log(proId);
  productHelper.deleteProduct(proId).then((response)=>{
    res.redirect('/admin/')
  })
})

router.get('/edit-product/:id',async(req,res)=>{
  let product = await productHelper.getProductDetails(req.params.id)
  console.log(product);
  res.render("admin/edit-products",{product})
})

router.post('/edit-product/:id',(req,res)=>{
  productHelper.updateProduct(req.params.id,req.body).then(()=>{
    res.redirect('/admin')
    if(req.files.Image){
      let id = req.params.id
      let image = req.files.Image
      image.mv('./public/images/'+id+'.jpg')
    }
  })
})

module.exports = router;
