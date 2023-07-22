const user = require('../controllers/userController');
const route = require('express').Router();

route.get('/', user.getUser);
route.post('/add', user.addUser);
route.delete('/:id', user.deleteUser)

module.exports = route;
