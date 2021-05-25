const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const cors = require('cors')
const posts = require('../My_Trail_Backend/routes/posts');
const replies  = require('../My_Trail_Backend/routes/posts');

connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/posts/', posts);
app.use('/api/posts/replies', replies);

const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log(`Server started on port: ${port}`);
});


