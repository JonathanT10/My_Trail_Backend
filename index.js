const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const cors = require('cors')
const posts = require('./routes/posts');
const user = require('./routes/user');

connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/posts/', posts);
app.use('/api/user/', user);

const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log(`Server started on port: ${port}`);
});


