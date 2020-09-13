const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // refer to the user model to set the relation
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);


// const mongodb = require('mongodb');
// const getDb = require('../util/database').getDb;

// class Product {
//   constructor(title, price, description, imageUrl, id, userId) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this._id = id ? new mongodb.ObjectId(id) : null;
//     this.userId = userId;
//   }

//   save() {
//     const db = getDb();
//     let dbOp;
//     if(this._id) {
//       // Update the product 
//       dbOp = db
//         .collection('products')
//         .updateOne({_id: this._id}, {$set: this});
//     } else {
//       // otherwise insert the new one
//       dbOp = db.collection('products').insertOne(this);
//     }
//     return dbOp
//       .then(result => {
//         console.log(result);
//       }).catch(error => {
//         console.log(error);
//       }); //with which collection need to work.
//   }
  
//   // MongoDB find method provides cursor/handle not promise.
//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection('products')
//       .find()
//       .toArray()
//       .then(products => {
//         console.log(products);
//         return products;
//       })
//       .catch(error => {
//         console.log(error)
//       });
//   }

//   static findById(prodId) {
//     const db = getDb();
//     return db
//       .collection('products')
//       .find({_id: new mongodb.ObjectId(prodId)})
//       .next()
//       .then(product => {
//         console.log(product);
//         return product;
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   }

//   static deleteById(prodId) {
//     const db = getDb();
//     return db
//       .collection('products')
//       .deleteOne({_id: new mongodb.ObjectId(prodId)})
//       .then(result => {
//         console.log('Deleted');
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   }
// }

// module.exports = Product;
