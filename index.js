import express, { json } from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./src/config/database.config.js";
import productRoute from "./src/route/product.route.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT


// middleware
// incoming data can be json or of form type
app.use(express.json())    // Middleware to parse JSON
app.use(express.urlencoded({extended : true})); // middleware used to parse URL-encoded data (form data) from incoming HTTP requests in Express.js.


// routes
app.use("/api/products", productRoute);


// home
app.get('/', (req, res)=>{
    res.status(200).send("This is home page")
})


// connect to database and listening to port
connectDatabase().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running on port : ${PORT || 4001}`)
    })
})













// +++++++ all the belows are broken down into route and controller++++++++++++++++



// fetch all the products
// app.get('/api/products', async (req, res)=>{
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products)
//     } catch (error) {
//         res.status(500).send(json({message : error.message}));
//         console.log("Error message : ", error)
//     }
// })


// // fetch a product by id
// app.get('/api/products/:id', async (req, res)=>{
//     try {
//         const {id} = req.params;
//         console.log(req.params);
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message : error.message})
//         console.log("Error : ", error)
//     }
// })

// // create a product
// app.post('/api/products', async (req, res)=>{
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//         console.log("Product created.")
//     } catch (error) {
//         console.log("Failed to create the product", error);
//         res.status(500).json({message : error.message});
//     }
// });

// // update a product by id
// app.put('/api/products/:id', async (req, res)=>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if(!product){
//             res.status(400).json({message : "product not found"});
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);

//     } catch (error) {
//         res.status(500).json({message : error.message});
//         console.log("Error Message : ", error);
//     }
// })

// // delete a product
// app.delete('/api/products/:id', async (req,res)=>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             res.status(404).json({message : "Product not found"});
//         }
//         res.status(200).json({message : "Product deleted successfully"});
//     } catch (error) {
//         res.status(500).json({message : error.message});
//         console.log("Error message : ", error.message);
//     }
// })


