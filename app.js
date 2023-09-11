require('dotenv').config();

const express = require('express');
const path = require('path')
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const session = require('express-session');
const connectionDB = require('./models/database');

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

app.use('/', require('./routes/routes'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});