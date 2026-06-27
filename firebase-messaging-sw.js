// Firebase Messaging Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDo2oJO2M2EiDKvvBpY2N7b8MZ38WeO5G4",
  authDomain: "study-8820a.firebaseapp.com",
  projectId: "study-8820a",
  storageBucket: "study-8820a.firebasestorage.app",
  messagingSenderId: "599109744780",
  appId: "1:599109744780:web:ffc9c509a0557288dfa3a9"
});

const messaging = firebase.messaging();

// Background notifications
messaging.onBackgroundMessage((payload) => {
  const { title, body, icon } = payload.notification || {};
  
  self.registration.showNotification(title || 'StudyCollab', {
    body: body || 'New update!',
    icon: icon || 'logo.png',
    badge: 'logo.png',
    vibrate: [200, 100, 200],
    tag: 'studycollab-notif',
    requireInteraction: true
  });
});
