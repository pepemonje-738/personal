"use strict";
exports.__esModule = true;
var express_1 = require("express");
var persona_routes_1 = require("../routes/persona.routes");
var connection_1 = require("../db/connection");
var cors_1 = require("cors");
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1["default"])();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('AAAplicacion corriendo por el puerto ', _this.port);
        });
    };
    Server.prototype.middlewares = function () {
        // Parseo del body
        this.app.use(express_1["default"].json());
        // Cors
        this.app.use((0, cors_1["default"])());
    };
    Server.prototype.routes = function () {
        this.app.use('/api/personas', persona_routes_1["default"]);
    };
    Server.prototype.conectarDB = function () {
        connection_1["default"].connect(function (err) {
            if (err)
                throw err;
            console.log('Conectado a la base de datos');
        });
    };
    return Server;
}());
exports["default"] = Server;
