"use strict";
exports.__esModule = true;
exports.putPersona = exports.postPersona = exports.deletePersona = exports.getPersona = exports.getPersonas = void 0;
var connection_1 = require("../db/connection");
var getPersonas = function (req, res) {
    connection_1["default"].query('SELECT * FROM persona', function (err, data) {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getPersonas = getPersonas;
var getPersona = function (req, res) {
    var id = req.params.id;
    connection_1["default"].query('SELECT * FROM persona WHERE id = ?', id, function (err, data) {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getPersona = getPersona;
var deletePersona = function (req, res) {
    var id = req.params.id;
    connection_1["default"].query('DELETE FROM persona WHERE id = ?', id, function (err, data) {
        if (err)
            throw err;
        res.json({
            msg: 'Persona eliminada con exito'
        });
    });
};
exports.deletePersona = deletePersona;
var postPersona = function (req, res) {
    var body = req.body;
    connection_1["default"].query('INSERT INTO persona set ?', [body], function (err, data) {
        if (err)
            throw err;
        res.json({
            msg: 'Persona agregada con exito'
        });
    });
};
exports.postPersona = postPersona;
var putPersona = function (req, res) {
    var body = req.body;
    var id = req.params.id;
    connection_1["default"].query('UPDATE persona set ? WHERE id = ?', [body, id], function (err, data) {
        if (err)
            throw err;
        res.json({
            msg: 'Persona actualizada con exito'
        });
    });
};
exports.putPersona = putPersona;
