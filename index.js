const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/posts.model.js");
const productRoute = require("./routes/post.route.js");
const userRoute = require("./routes/user.route.js");
// const cartRoute = require("./routes/cart.route.js");
// const orderRoute = require("./routes/order.route.js");
const categoryRoute = require("./routes/category.route.js");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/posts", productRoute);
app.use("/api/users", userRoute);
// app.use("/api/cart", cartRoute);
// app.use("/api/orders", orderRoute);
app.use("/api/categories", categoryRoute);

mongoose
    .connect(process.env.DBURL)
    .then(() => {
        // console.log(process.env.DBURL);
        console.log("connected to database");

        app.listen(80, () => {
            console.log("server is running on port ${80}");
        });
    })
    .catch(() => console.log("connection failed"));





app.get("/", (req, res) => {
    res.send("hi hello")

})
