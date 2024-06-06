import mysql from 'mysql';
import keys from '../keys';
"use strict";
exports.__esModule = true;
var mysql_1 = require("mysql");
var keys_1 = require("../keys");
const connection = mysql.createConnection(keys);
exports["default"] = connection;
