const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use("/project1", express.static(path.join(__dirname, "../", "project1")));
app.use("/project2", express.static(path.join(__dirname, "project2")));
app.use("/project3", express.static(path.join(__dirname, "project3")));
app.use("/project4", express.static(path.join(__dirname, "project4")));

app.get("/", (req, res) => {
    res.send(`
        <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
            <a href="/Users">Users</a>
            <a href="/Login">Login</a>
            <a href="/Calculator">Calculator</a>
            <a href="/Upload">Upload</a>
        </div>
    `);
});

app.get("/Users", (req, res) => {res.sendFile(path.join(__dirname, "project1", "index.html"));});
app.get("/Login", (req, res) => {res.sendFile(path.join(__dirname, "project2", "index.html"));});
app.get("/Calculator", (req, res) => {res.sendFile(path.join(__dirname, "project3", "index.html"));});
app.get("/Upload", (req, res) => {res.sendFile(path.join(__dirname, "project4", "index.html"));});
app.listen(PORT, () => {console.log(`Server is running at http://127.0.0.1:${PORT}`);});
