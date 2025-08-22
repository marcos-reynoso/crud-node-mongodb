import { connect } from 'mongoose';

(async () => {
	try {
		await connect('mongodb://localhost:27017/myaplication');
		console.log('Database connection successful');
	} catch (error) {
		console.error('Database connection error:', error);
	}
})();
