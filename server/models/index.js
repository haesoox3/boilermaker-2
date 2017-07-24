const User = require('./users');
const Puppy = require('./puppies');

Puppy.belongsTo(User);
User.hasMany(Puppy);