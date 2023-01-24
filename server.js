const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
// const { urlencoded } = require("express");

// app.use(express,urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'))
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

app.listen(PORT, ()=> console.log(`Sever running on port ${PORT}`))

console.log("hello world");