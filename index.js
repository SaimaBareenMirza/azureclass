import express from 'express';
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Welcome to Azure cicd class");
})

app.get("/about", (req,res) => {
    res.json({
        message: "This is simple node app",
        developer: "Saima Mirza",
    })
});

app.listen(PORT, '0.0.0.0',() => {
    console.log(`Server running on ${PORT}`);
})