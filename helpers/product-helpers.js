const db = require('../config/connection')

module.exports = {

  addProduct:(product,err,callback)=>{
    console.log(product);
    if(err){
       console.log(err)}
    else{
      db.get().collection('product').insertMany(product).then((data)=>{
      callback(true)

    })}

  }
}