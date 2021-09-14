const express = require('express');
const { addminMiddleware, requireSignin } = require('../../common-middleware');
const { initialData } = require('../../controller/admin/initialData');
const router = express.Router();




router.post('/initialdata',requireSignin,addminMiddleware,initialData);



module.exports = router;