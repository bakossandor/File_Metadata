const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer({dest: "uploads/"});
const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.post("/upload", upload.single("file"), (req, res, next) => {
    res.json(req.file);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})