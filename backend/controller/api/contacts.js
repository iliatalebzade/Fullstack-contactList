const User = require('../../model/User')

const getAllUsers = async (req, res) => {
    try {
        const products = await User.find({});

        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getUserById = async (req, res) => {
    try {
        const product = await User.findById(req.params.id);

        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    getAllUsers,
    getUserById
}