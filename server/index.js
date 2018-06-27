const express = require('express');
const app = express();
const volleyball = require('volleyball');
const { CLOUDINARY_KEY, CLOUDINARY_SECRET } = require('../config');
const fetch = require('node-fetch');
const cloudinary = require('cloudinary');

app.use(volleyball);
app.get('/', (req, res) => {
	console.log('hello world')
	res.send('hello world');
})

cloudinary.config({
	cloud_name: 'prints20',
	api_key: CLOUDINARY_KEY,
	api_secret: CLOUDINARY_SECRET
})

app.put('/images', (req, res) => {
	let url = req.body.url;
	let title = req.body.title;
	let artist = req.body.artist;
	cloudinary.image(url, {alt: title, className: artist})
	  .then(data => {
			console.log('put data: ', data);
			res.send(data);
		})
		.catch(err => console.log('error: ', err));
});

app.get('/images', (req, res) => {
	cloudinary.v2.api.resources({type: 'upload'})
		.then(data => {
			console.log('data: ', data);
			res.send(data);
		})
		.catch(err => console.log("error: ", err));
});

app.get('/search', (req, res) => {
	let searchTerm = req.query.q;
	cloudinary.v2.api.resources_by_tag(searchTerm)
	  .then(data => {
			console.log('data from cloudinary tag search: ', data)
			res.send(data);
		})
		.catch(err => console.log('Err: ', err))
})

app.listen(3000, '0.0.0.0', () => {
	console.log('Server running on port 3000...')
});
