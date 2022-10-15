const mongoose = require('mongoose');

const url = process.env.MONGO_URL
// const url = 'mongodb://localhost:27017/todo';
mongoose.set('useUnifiedTopology', true);
mongoose.connect(url, { useNewUrlParser : true });

module.exports = mongoose;