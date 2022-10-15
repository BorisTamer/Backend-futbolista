"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Futbolista = void 0;
const mongoose_1 = require("mongoose");
const futbolistaSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es requerido']
    },
    Equipo: {
        type: String,
    },
    Posicion: {
        type: String,
    },
    Imagen: {
        type: String,
        require: [true, 'La imagen es requerida']
    }
});
exports.Futbolista = (0, mongoose_1.model)('Futbolista', futbolistaSchema);
