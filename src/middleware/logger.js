export const logger = store => next => action => {
  if (process.env.NODE_ENV !== "production") {
    console.log(action);
  }

  return next(action);
};
