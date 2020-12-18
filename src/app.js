require('dotenv').config();
require('./strategies/discord');

const express = require("express");
const passport = require("passport")
const chalk = require("chalk");
const app = express();

const PORT = process.env.PORT || 3910;

const routes = require("./routes");

app.use('/api', routes);
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => console.log(chalk.green("Listening to port " + chalk.blue(PORT))));
