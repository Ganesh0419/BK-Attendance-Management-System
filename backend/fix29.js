require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const db = mongoose.connection;
    const indexes = await db.collection('users').indexes();
    console.log("Indexes on users collection:");
    console.log(indexes);
    
    // Also, list EVERYTHING in users collection
    const users = await db.collection('users').find({}).toArray();
    console.log(`Found ${users.length} users.`);
    users.forEach(u => console.log(JSON.stringify(u)));
    
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
