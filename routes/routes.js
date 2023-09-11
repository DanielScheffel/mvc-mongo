const express = require('express');
const router = express.Router();

const equipaController = require('../controllers/equipaController');

router.get('/', equipaController.home);

router.get('/add', equipaController.addEquipa);
router.post('/add', equipaController.postEquipa);

router.get('/edit/:id', equipaController.editEquipa);
router.put('/edit/:id', equipaController.editPost);
router.delete('/edit/:id', equipaController.deleteEquipa);

module.exports = router;