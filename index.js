const express = require('express');
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;


app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.get("/about",(req,res)=>{
    res.send("About Page");
})

app.get("/api/users",(req,res)=>{
    return res.json(users);
})


app.get("/users",(req,res)=>{
    const html = `
    <h1>Users</h1>
    <ul>
        ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})