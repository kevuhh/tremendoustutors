const mongojs = require('mongojs');
const db = mongojs('localhost:27017/myData', ['statistics', 'feed']);

