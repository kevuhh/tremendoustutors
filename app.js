const express = require('express');
const app = express();
const serv = require('http').Server(app);
const bodyParser = require('body-parser');
const fs = require('fs');

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());



app.post('/stats', (req, res) => {
	const data = req.body;
	fs.writeFile('./data/stats.json', JSON.stringify(data), () => {

	});
});
app.post('/feed', (req, res) => {
	const data = req.body;
	const feed = JSON.parse(data.feed);
	fs.writeFile('./data/feed.json', JSON.stringify(feed), () => {

	});
});

app.get('/getStats', (req, res) => {
	const rawdata = fs.readFileSync('./data/stats.json');
	const stats = JSON.parse(rawdata);
	res.json(stats);
});

app.get('/getFeed', (req, res) => {
	const rawdata = fs.readFileSync('./data/feed.json');
	const feed = JSON.parse(rawdata);
	res.json(feed);
});



serv.listen(2000);
console.log("Server started.");