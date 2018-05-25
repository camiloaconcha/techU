'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/userController');
  // todoList Routes
  app.route('/users')
    .get(users.list_users)
    .post(users.create_an_user);

    app.route('/users/:userId')
    .get(users.view_user)
    .put(users.update_an_user)
    .delete(users.delete_an_user);
};