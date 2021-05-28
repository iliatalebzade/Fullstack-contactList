const User = require('../Model/User');

module.exports.fetchUsers = (req, res) => {
    //res.send(users)
    User.getUsers((users) => {
        res.send(users)
    })
}