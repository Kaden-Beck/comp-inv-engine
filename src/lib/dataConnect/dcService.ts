import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { firebaseApp } from '../firebase/firebase.js';

// initialize data connect - explicitly pass firebaseApp to guarantee initializeApp() has run first
const dcService = getDataConnect(firebaseApp, connectorConfig);

// export data connect service to be passed in functions
export default dcService;
