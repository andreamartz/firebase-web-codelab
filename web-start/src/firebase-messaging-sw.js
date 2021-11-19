/** We'll now add support for browser notifications. The app will notify users when new messages are posted in the chat. Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably deliver messages and notifications at no cost.
 */

// The service worker simply needs to load and initialize the Firebase Cloud Messaging SDK, which will take care of displaying notifications.

// TODO: Set up Firebase Cloud Messaging service worker
// Import and configure the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging/sw';
import { getFirebaseConfig } from './firebase-config';

const firebaseApp = initializeApp(getFirebaseConfig());
getMessaging(firebaseApp);
console.info('Firebase messaging service worker is set up');
