const express = require('express');
const app = express();
const users = require('./data/uesrs.json')
const recuriter = require('./data/recruiter.json');
const jobs = require('./data/jobs.json');
const matches = require('./data/matches.json');


app.use(express.static('../client/htn-app/build'));

app.get('/users', (req, res) => {
    res.json(users)
});

app.get('/recruiter', (req, res) => {
    res.json(recuriter)
});

app.get('/matches', (req, res) => {
    res.json(matches)
});

app.get('/jobs', (req, res) => {
    res.json(jobs)
});

app.get('/', (req, res) => {
    res.sendFile('../client/htn-app/build/index.html')
});

app.listen(8080, () => {
    console.log('Server is running!')
})