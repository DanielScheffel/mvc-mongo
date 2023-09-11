const express = require('express');
const router = express.Router();
// const multer = require('multer');


// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, './uploads');
//     },

//     filename: function(req, file, cb){
//         cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//     }
// });

// const upload = multer({ storage }).single("image");

const equipaController = require('../controllers/equipaController');

router.get('/', equipaController.home);

router.get('/add', equipaController.addEquipa);
router.post('/add', equipaController.postEquipa);

router.get('/edit/:id', equipaController.editEquipa);
router.put('/edit/:id', equipaController.editPost);
router.delete('/edit/:id', equipaController.deleteEquipa);

module.exports = router;