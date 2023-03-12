const db = require('../config/connection')
var collection = require('../config/collections')
const bcrypt = require('bcrypt')

module.exports = {
  doSignup:(userData)=>{
    return new Promise(async(resolve,reject)=>{
      userData.password = await bcrypt.hash(userData.password,10)
      db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
        resolve(userData)
      })
    })
   
    
  },
  doLogin:(userData)=>{
    return new Promise(async(resolve,reject)=>{
      let loginStatus = false
      let response = {}
      let user = await db.get().collection(collection.USER_COLLECTION).findOne({Email:userData.Email})
      if(user){
        bcrypt.compare(userData.password,user.password).then((status)=>{

          if(status){
            console.log("logged in!");
            response.user = user
            response.status = true
            resolve(response)
          }
          else{
            console.log('cannot do that');
            resolve({status:false})
          }

        })
        
      }
      else{
        console.log('Failed');
        resolve({status:false})
      }
    })
  }
}