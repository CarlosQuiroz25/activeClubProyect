import express, { json } from 'express';
const app = express();
import { join } from 'path';
import routes from './routes/indexRoutes';

const PORT = 3000;

app.use(express.json());
app.use(express.static(join(__dirname, 'public')));
app.use('/api', routes);

app.get('/', (req, res) => res.sendFile(join(__dirname, 'views/index.html')));
app.get('/perfil', (req, res) => res.sendFile(join(__dirname, 'views/perfil.html')));
app.get('/login', (req, res) => res.sendFile(join(__dirname, 'views/login.html')));
app.get('/register', (req, res) => res.sendFile(join(__dirname, 'views/register.html')));

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
