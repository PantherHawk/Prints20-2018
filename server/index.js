const express = require('express');
const app = express();
const volleyball = require('volleyball');
//const config = require('../config');
const fetch = require('node-fetch');

app.use(volleyball);
app.get('/', (req, res) => {
	console.log('hello world')
	res.send('hello world');
})

app.get('/images', (req, res) => {
	fetch('https://reddit.com/r/aww.json').then(res => res.json()).then(json => res.send(json));
});


app.listen(3000, '0.0.0.0', () => {
	console.log('Server running on port 3000...')
});
