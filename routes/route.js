const user = require('../controllers/userController');
const route = require('express').Router();

route.get('/', user.getUser);
route.post('/', user.addUser);

module.exports = route;
