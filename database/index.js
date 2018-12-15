const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {
    type: Number,
    unique: true
  }, 
  name: String,
  user: {
    name: String,
    id: Number,
  },
  link: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.insertMany(repos, callback);
}

let retrieve = (callback) => {
  Repo.find()
      .sort({forks: -1})
      .limit(25)
      .find(callback)
}

module.exports = {
  save,
  retrieve
};