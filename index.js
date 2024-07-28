const express = require('express')
const app = express()
const port =4040

app.get('/', (req,res)=>{
    res.json({message:'response from the server side'})
})

app.listen(port,()=>{
   console.log(`server running on ${port}`)
})

