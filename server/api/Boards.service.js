import { connectDb, connect2 } from '../services/mongo.service';

class BoardsService {

    constructor(req, res) {
        this.req = req
        this.res = res
    }

    callback(err, result) {
        if (err) {
            this.res.status(500).json({
                status: 'error'
            })
        } else {
            this.res.status(200).json({
                status: 'success',
                data: result
            })
        }
    }

    addBoard() {
        connectDb((db) => {
            const board = this.req.body.board;
            const collection = db.collection('boards');
            collection.insertOne({
                "timestamp": (new Date()).getTime().toString(),
                "name": board
            }, (err, result) => {
                collection.find().toArray((err, result) => {
                    if (err) throw err;
                    this.callback(err, result);
                });
            });
        });
    }

    getBoards() {
        connectDb((db) => {
            const collection = db.collection('boards');
            collection.find().toArray((err, result) => {
                if (err) throw err;
                this.callback(err, result);
            });
        });
    }

    deleteBoard() {
        const timestamp = this.req.body.timestamp;
        console.log('deleteboard', timestamp);
        connectDb((db) => {
            const collection = db.collection('boards');
            collection.deleteOne({ timestamp: timestamp }, (err, result) => {
                collection.find().toArray((err, result) => {
                    if (err) throw err;
                    this.callback(err, result);
                });
            });
        });
    }

    emptyBoards() {
        connectDb((db) => {
            const collection = db.collection('boards');
            collection && collection.remove({}, (err, result) => {
                this.callback(err, result);
            })
        })
    }
}
module.exports = BoardsService
