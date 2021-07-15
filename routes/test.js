const express = require('express');
const multer = require('multer');
const path = require('path/posix');

const router = express.Router();
const upload = multer({dest: path.join(__dirname, '../public/uploads')});
router.post('/', upload.single('person'), (req, res) => {
    console.log('file:', req.file);
    console.log('body:', req.body);
    res.json({status: 'ok'});
});

module.exports = router;