"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const futbolista_model_1 = require("../models/futbolista.model");
const futbolistaRoutes = (0, express_1.Router)();
futbolistaRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const futbolista = yield futbolista_model_1.Futbolista.find();
    return res.json({
        ok: true,
        futbolista
    });
}));
futbolistaRoutes.get('/paging', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let perPage = 3;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip * perPage;
    const futbolista = yield futbolista_model_1.Futbolista.find().skip(skip).limit(perPage);
    return res.json({
        ok: true,
        futbolista
    });
}));
futbolistaRoutes.post('/', (req, res) => {
    const body = req.body;
    const futbolista = {
        Nombre: body.Nombre,
        Equipo: body.Equipo,
        Posicion: body.Posicion,
        Imagen: body.Imagen
    };
    futbolista_model_1.Futbolista.create(futbolista).then(futbolistaDb => {
        return res.json({
            ok: true,
            futbolistaDb
        });
    }).catch(err => {
        return res.json({
            ok: false,
            err
        });
    });
});
futbolistaRoutes.put('/:id', (req, res) => {
    const futbolistaId = req.params.id;
    const body = req.body;
    const futbolista = {
        Nombre: body.Nombre,
        Equipo: body.Equipo,
        Posicion: body.Posicion,
        Imagen: body.Imagen
    };
    futbolista_model_1.Futbolista.findByIdAndUpdate(futbolistaId, futbolista).then(futbolistaDB => {
        return res.json({
            ok: true,
            futbolistaDB
        });
    });
    return res.json({
        ok: true,
        msj: "Put ok"
    });
});
futbolistaRoutes.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const futbolistaId = req.query.id;
    if (!futbolistaId) {
        return res.json({
            ok: false,
            msj: "El registro solicitado no existe"
        });
    }
    futbolista_model_1.Futbolista.findByIdAndDelete(futbolistaId).then(futbolista => {
        return res.json({
            ok: true,
            msj: "Registro eliminado"
        });
    }).catch(err => {
        return res.json({
            ok: false,
            msj: "Registro eliminado"
        });
    });
}));
exports.default = futbolistaRoutes;
