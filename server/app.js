
import express from 'express';
import BoardsService from './api/Boards.service';

const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/boards', function (req, res) {
  let boardsService = new BoardsService(req, res);
  boardsService.addBoard();
})

app.get('/api/boards', function (req, res) {
  let boardsService = new BoardsService(req, res);
  boardsService.getBoards();
})

app.get('/api/emptyBoards', function (req, res) {
  let boardsService = new BoardsService(req, res);
  boardsService.emptyBoards();
})


app.listen(3000, function () {
  console.log('Kanban Board app service listening on port 3000!');
})
