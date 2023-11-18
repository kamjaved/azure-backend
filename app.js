import express from 'express';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';

const app = express();

/*Call body-parser and cors middleware*/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*Create default route*/
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to the REST API' });
});

app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is runnig on PORT ${PORT}`);
});
