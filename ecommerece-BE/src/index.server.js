const express= require('express');
const env=require('dotenv');
const app=express();
const mongoose=require('mongoose');
const path = require('path');
const cors = require('cors');
//router
const authRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin/auth');
const categoryRoutes=require('./routes/category');
const productRoutes=require('./routes/product');
const cartRoutes=require('./routes/cart');
const initialDataRoutes=require('./routes/admin/initialData');
const pageRoutes=require('./routes/admin/page')
const addressRoutes = require("./routes/address");
mongoose.set('useFindAndModify', false);
//environment variable or you  can say constants
env.config();


//mongodb+srv://VanTay:<password>@cluster0.ye5ih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.nxpiu.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify: false 
    }
).then(()=>{
    console.log('Database connected');
});

app.use(cors());
app.use(express.json());
app.use( '/public', express.static(path.join(__dirname,'uploads')));
app.use(express.urlencoded({ 
    extended:true
}));
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.use("/api", initialDataRoutes);
app.use("/api", pageRoutes);
app.use("/api", addressRoutes);
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});