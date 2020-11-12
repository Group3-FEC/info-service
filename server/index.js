const express = require('express');
const app = express();
const port = 3000; 

app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.send('hello from server');
})

app.listen(port, () => {
    console.log(`Message listening at port http://localhost:${port}`);
})