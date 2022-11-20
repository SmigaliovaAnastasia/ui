var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');

var getName = (filename) => {
  return Date.now() + '-' + filename;
};

app.use(cors())
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img/games/')
  },
  filename: function (req, file, cb) {
    cb(null, getName(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('file')

app.get('/', function (req, res) {
  return res.send('Hello Server')
})

app.post('/upload', function (req, res) {
  upload(req, res, function (err) {

    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)
  })
});

app.listen(8000, function () {
  console.log('App running on port 8000');
});
