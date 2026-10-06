const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello from Backend - AWS EC2 Deployment!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});