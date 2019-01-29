const Sequelize = require('sequelize');
const express = require('express');
const currencies = express();

function onHttpStart() {

    console.log("Express http server listening on: " + 8080);
  
  }

var sequelize = new Sequelize('PRJ666Group09', 'postgres', 'Sergey@321',{
    host : "localhost",
    dialect : "postgres",
    port : 5432
});
sequelize
.authenticate()
.then(function() {
    console.log('Connection has been established successfully.');
})
.catch(function(err) {
    console.log('Unable to connect to the database:', err);
});

const Currency = sequelize.define("Currency", {
    updatedAt: Sequelize.DATE,
    country: Sequelize.STRING,

 exchangerate: Sequelize.INTEGER,

 createdAt: Sequelize.DATE
});

// Initial get everything route
currencies.get('/', (req, res, next) => {
    Currency
     .findAll()
     .then((data) => {
      return res.json(data);
      })
     .catch((err) => {
       console.log(err);
       return err;
      })
   });
  currencies.get('/:id', async (req, res, next) => {
      try {
        const currency = await Currency.scope(req.query['scope'])
        .findById(req.params['id']);
        res.json(currency);
      } catch (e) {
        next(e);
      }
    });
  // post
  currencies.post('/', async (req, res, next) => {
      try {
        console.log(req.body);
        const currency = await Currency.create(req.body);
        res.status(201).json(currency);
      } catch (e) {
        next(e);
      }
    });
  // update api/id
  currencies.put('/:id', async (req, res, next) => {
      try {
        await Currency
        .update(req.body, {where: {id: req.params['id']}});
        res.sendStatus(200);
      } catch (e) {
        next(e);
      }
    });

// Force Initialization of the models and wipe all data ///
sequelize.sync().then(() => {

    // start the server to listen on HTTP_PORT

    currencies.listen(8080, onHttpStart);

});
