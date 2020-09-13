const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById("5f44ad1b34cd5f35c8b7c733")
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect('mongodb+srv://Abhishek:pyML8wug8lEbaeEs@cluster0.obee8.mongodb.net/shop?retryWrites=true&w=majority')
  .then(() => {
    User.findOne().then((user) => {
      if(!user) {
        const user = new User({
          name: "Abhishek",
          email: "abhishek@testmail.com",
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
    console.log('Connected!!!');
  })
  .catch(error => {
    console.log(error);
  });