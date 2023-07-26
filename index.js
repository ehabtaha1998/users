import express from 'express'
import dbConnection from './databases/dbConnection.js'
import userRouter from './src/modules/users/user.router.js'
const app = express()
const port = 3000
app.use(json())
app.use('/users', userRouter)


app.listen(port, () => console.log(`i iam live :(`))