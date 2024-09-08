const express=require('express')
const app =express();
const PORT= process.env.PORT|| 5000;
const { connectedToMongoDB } =require('./configuration/dbConfig')

connectedToMongoDB().then(() => {
    app.listen(PORT, ()=> {
        console.log(`server is running on http://localhost:${PORT}`);
        
    })
})

