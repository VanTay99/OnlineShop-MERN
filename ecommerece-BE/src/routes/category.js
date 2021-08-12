const express = require('express');
const { requireSignin, addminMiddleware } = require('../common-middleware');
const { addCategory, getCategories } = require('../controller/category');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const shortid = require('shortid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), 'uploads'))
  },
  filename: function (req, file, cb) {

    cb(null, shortid.generate() + '-' + file.originalname)
  }
});
const upload = multer({ storage });

router.post('/category/create', requireSignin, addminMiddleware, upload.single('categoryImage'), addCategory);
router.get('/category/getcategory', getCategories);
module.exports = router;
