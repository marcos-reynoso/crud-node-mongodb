import app from './app.js';
import { connectDB } from './database.js';

connectDB();

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});
