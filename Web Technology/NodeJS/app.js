import express from 'express';

import students from './routes/student.js';

//import bodyParser from "body-parser";
const app = express();
app.use(express.json());
const port = 8080;
app.use('/api/students',students);
app.get('/', (req, res) => res.send("Hey Server Started"));





app.listen(port, () => console.log("Server Running on : http://localhost:" +port));