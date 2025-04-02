const express = require('express');
const cookieParser = require('cookie-parser');
const db=require('./config/mongoose-connection');

const app = express();
const ownerRouter = require('./routes/ownerRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const port = 3000;

app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use("/owner",ownerRouter);
app.use("/user",userRouter);
app.use("/product",productRouter);






app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);