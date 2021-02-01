const admin = require('firebase-admin')
const serviceAccount = require("path/to/serviceAccountKey.json") 

// Initialise the admin with the credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
  "
})
