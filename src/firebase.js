import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyAzWIzPraKkGVrp_oeuO0aL7U_iXixipv4',
   authDomain: 'desire-app-e9e94.firebaseapp.com',
   projectId: 'desire-app-e9e94',
   storageBucket: 'desire-app-e9e94.appspot.com',
   messagingSenderId: '615584927407',
   appId: '1:615584927407:web:3d2741647a48c26d928e5a',
};

let app;

if (!firebase.apps.length) {
   app = firebase.initializeApp(firebaseConfig);
} else {
   app = firebase.app();
}

export const db = app.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore;