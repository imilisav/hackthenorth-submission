const express = require('express');
const app = express();
const users = require('./data/uesrs.json')
const recuriter = require('./data/recruiter.json');
const jobs = require('./data/jobs.json');
const matches = require('./data/matches.json');


app.use(express.static('../client/htn-app/build'));

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    for(obj in users.users) {
        if(users.users[obj].ID == req.params.id) {
            console.log('found')
            return res.json(users.users[obj])
        }
    }
    res.json({error: "user not found"})
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