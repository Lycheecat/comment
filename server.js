const express = require('express');
const app = express();
const path = require("path");
const port = 3000;

const database = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get('/api/loadComment', (req, res) => {
  res.json(database);
})

app.post('/api/postComment', (req, res) => {
  const newComment = req.body;
  database.push(newComment);
  res.json({ message: "posted!", data: newComment }
  )
})

app.listen(port, () => {
  console.log(`Running service in port : ${port}`);
})