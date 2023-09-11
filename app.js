require('dotenv').config();

const express = require('express');
const path = require('path')
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const session = require('express-session');
const connectionDB = require('./models/database');
const multer = require('multer');

const equipaController = require('./controllers/equipaController');

const app = express();

connectionDB();

app.use(session({ secret: 'd1a2n3i4', reasve: false, saveUninitialized: true, cookie: { maxAge: 60000 } }));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressLayouts);
app.set('layout', './layouts/index.ejs');

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

app.get('/', upload.single("image"), equipaController.home);

app.get('/add', equipaController.addEquipa);
app.post('/add', upload.single("image"), equipaController.postEquipa);

app.get('/edit/:id', equipaController.editEquipa);
app.put('/edit/:id', upload.single("image"), equipaController.editPost);
app.delete('/edit/:id', equipaController.deleteEquipa);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});