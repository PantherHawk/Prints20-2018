const express = require('express');
const app = express();
const config = require('../config');
const fetch = require('node-fetch');

app.get('/', (req, res) => {
	console.log('hello world')
	res.send('hello world');
})

app.get('/images', (req, res) => {
	// fetch('https://api.cloudinary.com/v1_1/prints20/resources/image', {
	//   method: 'get',
	//   headers: {
	//     'Authorization': 'Basic ' + (config.CLOUDINARY_KEY + ":" + config.CLOUDINARY_SECRET).toString('base64'),
	//   },
	// }).then(res => res.json()).then(json => res.send(json));
	fetch('https://reddit.com/r/aww.json').then(res => res.json()).then(json => res.send(json));
});


app.listen(3000, '0.0.0.0', () => {
	console.log('Server running on port 3000...')
});
