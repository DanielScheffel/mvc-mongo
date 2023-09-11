const express = require('express');
const router = express.Router();
const multer = require('multer');

let storage = multer.diskStorage({
    filename: function(req, file, cb){
        let name = Date.now()+"-"+file.originalname
        cb(null, name)
    },

    destination: function(req, file, cb){
        let path = "./public/uploads"
        cb(null, path)
    }
})

const upload = multer({ storage })

const equipaController = require('../controllers/equipaController');

router.get('/', upload.single("image"), equipaController.home);

router.get('/add', equipaController.addEquipa);
router.post('/add', upload.single("image"), equipaController.postEquipa);

router.get('/edit/:id', equipaController.editEquipa);
router.put('/edit/:id', upload.single("image"), equipaController.editPost);
router.delete('/edit/:id', equipaController.deleteEquipa);

module.exports = router;