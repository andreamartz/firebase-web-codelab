/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: 'AIzaSyCz33hI95Kffg8_K-kQKiMuWCWQlXI2_kc',
  authDomain: 'friendlychat-516b9.firebaseapp.com',
  projectId: 'friendlychat-516b9',
  storageBucket: 'friendlychat-516b9.appspot.com',
  messagingSenderId: '841555446845',
  appId: '1:841555446845:web:71bb2bfd5d1370669b6e54',
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
