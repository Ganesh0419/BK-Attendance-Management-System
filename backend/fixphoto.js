require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const db = mongoose.connection;
    const result = await db.collection('users').updateOne(
      { fingerprint_id: "29" },
      { $set: { photo: null } }
    );
    console.log("Update result:", result);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
