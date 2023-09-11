// const { ValidationError } = require("sequelize");


export function logErrors(err, req, res, next) {
  next(err)
}

export function errorHandler(err, req, res) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

export function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err)
  }


}


export function mongooseErrorHandler(err, req, res, next) {
  if (err.name === 'ValidationError') {
    // Manejo de errores de validación de Mongoose
    return res.status(400).json({
      statusCode: 400,
      message: 'ValidationError',
      errors: err.errors,
    });
  } else if (err.name === 'CastError' && err.kind === 'ObjectId') {
    // Manejo de errores de casting de ObjectId de Mongoose
    return res.status(400).json({
      statusCode: 400,
      message: 'Id not found',
      error: err.message,
    });
  }
  next(err);
}

