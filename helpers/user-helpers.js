const db = require('../config/connection')
var collection = require('../config/collections')
const bcrypt = require('bcrypt')

module.exports={
  doSignup: (userData)=>{
    return new Promise(async(resolve,reject)=>{
      userData.password = await bcrypt.hash(userData.password,10)
      db.get().collection('user').insertOne(userData).then((data)=>{
        resolve(data.ops[0])
      }).catch((err)=>{
        reject(err)
      })
    })
    


  }
}