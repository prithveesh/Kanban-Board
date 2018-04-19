import { URL } from '../config/constants';
require('dotenv').config()

console.log(URL);
const MongoClient = require('mongodb').MongoClient;


export function connectDb(callback) {
    console.log('Connecting with DB');
    MongoClient.connect(URL, { native_parser: true }, function (err, client) {
        const db = client.db('kanban');
        callback(db);
    });
};