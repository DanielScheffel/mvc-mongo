const mongoose = require('mongoose');

const connectionDB = async() => {
    try{
        await mongoose.connect(
            'mongodb+srv://danioliveira8292:KrlQHelQ9wftbUgI@cluster2.12n7msj.mongodb.net/?retryWrites=true&w=majority'
        );
        console.log('Conectou com o MongoDB Atlas!!!');
    } catch (error){
        console.log("Erro na conexão", error)
    }
}

module.exports = connectionDB;