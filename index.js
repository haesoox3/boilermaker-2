const db = require('./server/models/db.js'); 
// const envVar = require('./localSecrets.js');
// Setting environment variables
// So far Google client ID and secret
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('./localSecret'); // this will mutate the process.env object with your secrets.
}

// and our server is created in 'server/index.js'
db.sync()  // sync our database
.then(() => console.log('Database is synced'))
.then(() => require('./server')) // then start our express server