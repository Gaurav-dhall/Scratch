const express = require('express');
const cookieParser = require('cookie-parser');
const db=require('./config/mongoose-connection');

const app = express();
const index = require('./routes/index');
const ownerRouter = require('./routes/ownerRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const expressSession = require('express-session');
const flash = require('connect-flash');
const port = 3000;

require('dotenv').config();

app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cookieParser());

app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  
}));

app.use(flash());


    

app.use("/",index)
app.use("/owner",ownerRouter);
app.use("/users",userRouter);
app.use("/product",productRouter);








app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);