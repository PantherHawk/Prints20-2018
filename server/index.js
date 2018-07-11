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
	cloudinary.v2.api.resources({type: 'upload', context: 'true'})
		.then(data => {
			console.log('data: ', data);
			res.send(data);
		})
		.catch(err => console.log("error: ", err));
});

app.get('/search', (req, res) => {
	let searchTerm = req.query.q;
	cloudinary.v2.api.resources_by_tag(searchTerm, {context: 'true'})
	  .then(data => {
			console.log('data from cloudinary tag search: ', data)
			res.send(data);
		})
		.catch(err => console.log('Err: ', err))
})

app.get('/context', (req, res) => {
	console.log('query params: ', req.query)
	let contextKey = req.query.key;
	let contextVal = req.query.value;
	if (contextKey === 'period') {
		cloudinary.v2.search
		  .expression(`${contextVal}*`)
			.with_field('context')
			.with_field('tags')
			.execute()
			.then(data => {
				console.log('data: ', data)
				res.json(data);
			})
			.then(json => {
				console.log('result: ', json)
				res.send(json);
			})
			.catch(err => console.log('Err: ', err));
  } else if (contextKey === 'subject') {
		cloudinary.v2.search
		  .expression(`resource_type:image AND tags=${contextVal}`)
			.with_field('context')
			.with_field('tags')
			.max_results(30)
			.execute()
			.then(data => {
				console.log('data: ', data);
				res.json(data);
			})
			.then(json => {
				console.log('result: ', json);
				res.send(json);
			})
			.catch(err => console.log('Err: ', err));
	} else if (contextKey === 'medium') {
	  cloudinary.v2.api.resources_by_context(`${contextKey}`, `${contextVal}`, {resource_type: 'image'})
	    .then(data => {
		  	console.log('data from period dropdown select', data)
			  res.send(data);
	  	})
		  .catch(err => console.log('Err: ', err))
	} else if (contextKey === 'artist') {
		cloudinary.v2.search
		  .expression(`folder:${contextVal}/*`)
			.with_field('context')
			.with_field('tags')
			.max_results(30)
			.execute()
			.then(data => {
				console.log('data from dropdown select: ', data)
				res.json(data)
			})
			.then(json => {
				res.send(json);
			})
	}
})

app.get('/all_artists_list', (req, res) => {
	cloudinary.v2.api.sub_folders("artists")
	  .then(data => res.send(data));
});

app.listen(3000, '0.0.0.0', () => {
	console.log('Server running on port 3000...')
});
