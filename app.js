const express = require('express');

const morgan = require('morgan');

const globalErrorHandler = require('./controllers/errorController');
const voucherRouter = require('./routes/voucherRoutes');
const gameRouter = require('./routes/gameRoutes');
const AppError = require('./utils/appError');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); // express.json({limit : '10kb'})

// 3) ROUTES
app.use('/api/v1/voucher', voucherRouter);
app.use('/api/v1/game', gameRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
