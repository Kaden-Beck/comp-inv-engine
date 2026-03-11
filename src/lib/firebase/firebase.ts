import { initializeApp } from 'firebase/app';

// This config is fine to be public
const firebaseConfig = {
  apiKey: 'AIzaSyDefISTq0PM2Sdh08JCdvGMddD5eMfEZ9I',
  authDomain: 'computer-hardware-bass.firebaseapp.com',
  projectId: 'computer-hardware-bass',
  storageBucket: 'computer-hardware-bass.firebasestorage.app',
  messagingSenderId: '897782812252',
  appId: '1:897782812252:web:fd225b1609b68804426099',
};

const firebaseApp = initializeApp(firebaseConfig);

// export app (to be used by react etc.)
export { firebaseApp };
