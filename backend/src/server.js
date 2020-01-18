const express = require("express");

const app = express();

app.get('/', (Request, response) => {
    return response.json({ message: 'hello!' });
});

app.listen(3333);