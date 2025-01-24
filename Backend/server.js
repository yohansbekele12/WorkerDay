import express from 'express';
import dotenv from 'dotenv';
import sequelize from './src/config/DBconfig.js';
import register from './src/routes/register.js';
import bodyParser from 'body-parser';
import Auth from './src/routes/Auth.js';
import employees from './src/routes/api/employees.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Api routes

//Auth routes
app.use('/api/register', register);
app.use('/api/auth', Auth);

//resorce routes

app.use('/api/employees', employees);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
