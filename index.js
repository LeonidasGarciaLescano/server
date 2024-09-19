import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/", (req, res)=>{

    console.log("he recibido una solicitud get desde react");
    res.send("Alberto traga pene");
})

app.listen(port, ()=>{
    console.log("servidor iniciado");
})