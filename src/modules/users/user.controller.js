import userModel from "../../../databases/models/user.models.js"
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
    const { name, email, password, age } = req.body
    const isFound = await userModel.findOne({ email })
    if (isFound) {
        res.json({ message: "User already exist..." })
    } else {
        bcrypt.hash(password, 8, async function (err, hash) {
            const user = await userModel.insertMany({ name, email, password: hash, age })
            res.json({ message: "user added...", user })

        });
    }
}
export const signIn = async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (user) {
        const match = await bcrypt.compare(password, user.password)
        if (match) {
            res.json({ message: "login", user: user._id })
        } else {
            res.json({ message: "password is not correct" })
        }
    } else {
        res.json({ message: "User Not exist.." })
    }
}


