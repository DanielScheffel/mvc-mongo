const mongoose = require('mongoose');
const { Schema } = mongoose;

const Equipamento = new Schema({

    nome: {
        type: String,
        // required: true
    },

    descricao: {
        type: String,
        // required: true
    },

    num_serie: {
        type: String,
        // required: true
    },

    image: {
        type: String,
        // required: true
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    updatedAt: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Equipamento', Equipamento);