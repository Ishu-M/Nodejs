// Imports
const express = require('express')

// Configs
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let USERS = [];

let BOOKS = [];

// Logic
app.get('/', (_req, res) => {
	res.send("Hello world!");
});

app.get('/echo/:msg', (req, res) => {
	res.send(req.params.msg);
});

app.post('/echo', (req, res) => {
	res.send(req.body);
});

app.post('/books', (req, res) => {
	let book = {
		name: req.body.name,
		price: req.body.price
	};
	book.name = req.body.name;
	book.price = req.body.price;
	BOOKS.push(book);
	res.send("Book has been added.");
})

app.get('/users', (_req, res) => {
	res.json(USERS);
});

app.post('/users', (req, res) => {
	let newUser = {
		name: req.body.name,
		age: req.body.age,
	};
	USERS.push(newUser);
	res.send("User has been added!");
});

app.put('/users', (req, res) => {
	let userToBeUpdated = USERS.find(user => user.name === req.body.name);
	userToBeUpdated = req.body;
	res.send("User has been updated");
});

app.delete('/users', (req, res) => {
	USERS.pop(user => user.name === req.body.name);
	res.send("User has been deleted.");
})

 
// Listen
app.listen(port, () => {
	console.log(`App is listening at: http://localhost:${port}`)
});
