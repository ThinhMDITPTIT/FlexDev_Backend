module.exports = {
  secret: process.env.NODE_ENV === 'production' ? 'secret' : 'secret'
  // secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret'
};
