import express from 'express';
import indexRoutes from './routes/index.routes.js';
import { create } from 'express-handlebars';
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, '/views'));

const hbs = create({
	layoutsDir: path.join(app.get('views'), 'layouts'),
	defaultLayout: 'layout',
	extname: '.hbs',
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(indexRoutes);

export default app;
