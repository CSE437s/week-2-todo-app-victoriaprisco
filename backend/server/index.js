const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

const items = ["hello wordl"]

//Handles post requests

app.use(express.json());



app.get("/get-items", (req, res)=> {
    res.json({list: items})
})

app.post("/post-items", (req, res)=>{
    console.log(JSON.stringify(req.body));  
    items.push(req.body.b)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

