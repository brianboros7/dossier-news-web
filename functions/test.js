const admin = require('firebase-admin')
const serviceAccount = require("path/to/serviceAccountKey.json") 

// Initialise the admin with the credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "firebase-adminsdk-nfyo4@brian-boros-nextjs.iam.gserviceaccount.com"
})

const db = admin.firestore()

exports.handler = async (event, context, callback) => {
  await db.collection('COLLECTION').add({
    name: 'Test'
  })

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: `Test data added successfully`
    })
  })
}