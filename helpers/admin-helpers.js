const db = require('../config/connection')
var collection = require('../config/collections')
const bcrypt = require('bcrypt')

doLogin: adminData => {
  return new Promise(async (resolve, reject) => {
    let loginStatus = false
    let response = {}
    let admin = await db
      .get()
      .collection(collection.ADMIN_COLLECTION)
      .findOne({ Email: adminData.Email })
    if (admin) {
      bcrypt.compare(adminData.password, admin.password).then(status => {
        if (status) {
          console.log('logged in!')
          response.admin = admin
          response.status = true
          resolve(response)
        } else {
          console.log('cannot do that')
          resolve({ status: false })
        }
      })
    } else {
      console.log('Failed')
      resolve({ status: false })
    }
  })
}