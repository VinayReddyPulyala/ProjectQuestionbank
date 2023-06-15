import User from '../models/User.js';
export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        // console.log(users);
        res.status(200).json(users);
    }
    catch (err) {
        console.log(err);
    }
}