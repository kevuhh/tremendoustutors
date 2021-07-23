const express = require('express');
const app = express();
const serv = require('http').Server(app);
const cors = require('cors');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const fs = require('fs');

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/client/index.html');
});

app.use(fileUpload({
    createParentPath: true
}));

app.use('/client', express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post('/upload-file', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.avatar;
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv('./client/img/tutors/' + avatar.name);
			res.redirect('./client/admin.html');
            //send response
            /*res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });*/
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/stats', (req, res) => {
	const data = req.body;
	fs.writeFile('./data/stats.json', JSON.stringify(data), (err) => {
		if (err) {
			res.json({"status": "error"});
		} else {
			res.json({"status": "success"});
		}
	});
});
app.post('/feed', (req, res) => {
	const data = req.body;
	const feed = JSON.parse(data.feed);
	fs.writeFile('./data/feed.json', JSON.stringify(feed), (err) => {
		if (err) {
			res.json({"status": "error"});
		} else {
			res.json({"status": "success"});
		}
	});
});

app.post('/tutors', (req, res) => {
	const data = req.body;
	const tutors = JSON.parse(data.tutors);
	fs.writeFile('./data/tutors.json', JSON.stringify(tutors), (err) => {
		if (err) {
			res.json({"status": "error"});
		} else {
			res.json({"status": "success"});
		}
	});
});

app.post('/faqs', (req, res) => {
	const data = req.body;
	const faqs = JSON.parse(data.faqs);
	fs.writeFile('./data/faqs.json', JSON.stringify(faqs), (err) => {
		if (err) {
			res.json({"status": "error"});
		} else {
			res.json({"status": "success"});
		}
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

app.get('/getTutors', (req, res) => {
	const rawdata = fs.readFileSync('./data/tutors.json');
	const feed = JSON.parse(rawdata);
	res.json(feed);
});

app.get('/getFaqs', (req, res) => {
	const rawdata = fs.readFileSync('./data/faqs.json');
	const faqs = JSON.parse(rawdata);
	res.json(faqs);
});

serv.listen(80);
console.log("Server started.");
