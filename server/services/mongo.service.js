import { URL } from '../config/constants';
require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;

let db;

export function connectDb(callback) {
    if (db) {
        callback(db);
    } else {
        MongoClient.connect(URL, { native_parser: true }, function (err, client) {
            db = client.db('kanban');
            callback(db);
        });
    }
};
