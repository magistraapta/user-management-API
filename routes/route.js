const user = require('../controllers/userController');
const route = require('express').Router();

route.get('/', user.getUser);
route.get('/:id', user.getUserById)
route.post('/add', user.addUser);
route.delete('/:id', user.deleteUser);
route.put('/edit/:id', user.editUser)

module.exports = route;
