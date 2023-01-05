const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

// INDEX - all bookmarks
app.get('/bookmarks', (req, res) => {
    res.send('These sites are bookmarked')
})

// DELETE 
app.delete('/bookmarks/:id', (req, res) => {
    
})

// UPDATE
app.put('/bookmarks/:id', (req, res) => {

})

// CREATE
app.post('/bookmarks', (req, res) => {
    
})


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening to the sounds of ${PORT} banshees`))