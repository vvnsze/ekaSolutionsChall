const express = require('express');
require('dotenv').config();
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');
const apiRoutes = require('./apiRoutes');

const port = process.env.PORT || 1337
const app = express();
const compiler = webpack(webpackConfig);

app.use('api/',apiRoutes)

//For development only
if(process.env.NODE_ENV === 'development') {
  app.use(middleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }
  }));

  app.use(webpackHotMiddleware(compiler, {
    heartbeat: 2000,
    log: console.log,
  }))

  app.use(express.static(webpackConfig.output.publicPath));
}

app.listen(port, () => {
	console.log(chalk.cyan(`<Eka Solutions> is listening on ${port}`))
})
