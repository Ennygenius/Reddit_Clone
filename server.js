const express = require("express")
const app = express()
const postRouter =  require("./Router/postRouter")
const catRouter =  require("./Router/catRouter")
const commentRouter =  require("./Router/commentRouter")
const userRouter =  require("./Router/userRouter")
const PORT = process.env.PORT || 3000;
const connectDb = require("./Config/db")
const cors = require("cors")




app.use(cors())

//initialize the db
connectDb()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }));
    
app.use('/api/posts', postRouter)
app.use('/api/category', catRouter)
app.use('/api/comments', commentRouter)
app.use('/api/auth/', userRouter)


//triggers the express server
app.listen(PORT, (req, res) => {
    console.log(`server is listening successfully on localhost:${PORT}`);
})