"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/socies', (req, res) => {
    let socies = [
        {
            nombre: 'Nahuel',
            apellido: 'Heredia',
            nick: "N4hu3l",
            edad: 22
        },
        {
            nombre: 'Irina',
            apellido: 'Davico',
            nick: "Irin4",
            edad: 21
        },
        {
            nombre: 'John',
            apellido: 'Maza',
            nick: "J0hny",
            edad: 20
        }
    ];
    res.json({
        ok: true,
        socies: socies
        //        mensaje: "todo ok!"
    });
});
exports.router.post('/registro', (req, res) => {
    let nombre;
    let apellido;
    if (req.body.nombre && req.body.nombre !== "") {
        nombre = req.body.nombre;
    }
    else {
        res.json({
            ok: false,
            mensaje: `Error: Falat el campo nombre`
        });
        nombre = "";
    }
    apellido = req.body.apellido ? req.body.apellido : "";
    res.json({
        ok: true,
        mensaje: `Bienvenido ${nombre} !!!`
    });
});
