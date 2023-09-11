const mongoose = require('mongoose');

const connectionDB = async() => {
    try{
        await mongoose.connect(
            process.env.MONGO_URL
        );
        console.log('Conectou com o MongoDB Atlas!!!');
    } catch (error){
        console.log("Erro na conexão", error)
    }
}

module.exports = connectionDB;