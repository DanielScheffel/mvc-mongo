const Equipamento = require('../models/Equipamento');
const mongoose = require('mongoose');

async function home(req, res){
    const locals = {
        title: 'MVC'
    }

    try{
        const equipas = await Equipamento.find({}).limit(22);
        res.render('index', { locals, equipas });
    } catch (error) {
        console.log(error)
    }
}

async function addEquipa(req, res){
    const locals = {
        title: 'add Novo Equipamento - MVC'
    }

    res.render('addEquipa', locals);
}

async function postEquipa(req, res){
    console.log(req.body);

    const newEquipa = new Equipamento({

        nome: req.body.nome,
        descricao: req.body.descricao,
        num_serie: req.body.num_serie,
        // image: req.body.image

    });

    try{

        await Equipamento.create(newEquipa);
        // req.session.message = {
        //     type: "success",
        //     message: "Equipamento adicionado com sucesso!"
        // }
        return res.redirect("/");

    } catch (error){

        // res.json({ message: error.message, type: "danger" })
        console.log('Erro ao inserir dados ao banco!', error);

    }
}

async function editEquipa(req, res){
    
    try{
        const equipas = await Equipamento.findOne({ _id: req.params.id });

        const locals = {
            title: "Editar Equipamento"
        };
    
        res.render('edit', { locals, equipas });
    } catch (error){
        console.log(error)
    }
}

async function editPost(req, res){
    
    try{
        await Equipamento.findByIdAndUpdate(req.params.id,{
            nome: req.body.nome,
            descricao: req.body.descricao,
            num_serie: req.body.num_serie,
            updatedAt: Date.now()
        }).where(req.params.id);

    
        res.redirect(`/edit/${req.params.id}`);
    } catch (error){
        console.log(error)
    }
}

async function deleteEquipa(req, res){
    
    try{
        await Equipamento.deleteOne({ _id: req.params.id});
        res.redirect("/");
    } catch (error){
        console.log(error);
    }
}

module.exports = { home, addEquipa, postEquipa, editEquipa, editPost, deleteEquipa }