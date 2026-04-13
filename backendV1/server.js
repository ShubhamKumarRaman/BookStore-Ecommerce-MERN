const express = require('express')
const cors = require('cors')

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4000;

const connectDB = require('./config/db')
const bookRoutes = require('./routes/book.routes')
const seedDatabase = require('./seed/seed')

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/books', bookRoutes);

seedDatabase();

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})