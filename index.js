const db = require('./server/models/db.js'); 

// and our server is created in 'server.js'

db.sync()  // sync our database
.then(() => console.log('Database is synced'))
.then(() => require('./server')) // then start our express server