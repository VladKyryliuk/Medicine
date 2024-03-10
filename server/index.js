const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const postRouter = require('./routes/Products')
app.use("/products", postRouter);

const postRouterPharm = require('./routes/Pharmacy')
app.use("/pharmacy", postRouterPharm);

const postRouterCart = require('./routes/Cart')
app.use("/cart", postRouterCart);

const postRouterOrder = require('./routes/Order')
app.use("/order", postRouterCart);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});



