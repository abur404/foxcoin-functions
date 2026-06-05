const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.helloWorld = functions.https.onCall((data, context) => {
  return { 
    status: "success",
    message: "FoxCoin API Working!",
    project: "foxcoin-d64e5"
  };
});
