import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDefISTq0PM2Sdh08JCdvGMddD5eMfEZ9I',
  authDomain: 'computer-hardware-bass.firebaseapp.com',
  projectId: 'computer-hardware-bass',
  storageBucket: 'computer-hardware-bass.firebasestorage.app',
  messagingSenderId: '897782812252',
  appId: '1:897782812252:web:fd225b1609b68804426099',
};

const app = initializeApp(firebaseConfig);

export default app;
