const exoress = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');


const app = exoress();
app.use(exoress.json());
app.use(cors());
dotenv.config();


const PORT = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//API routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});