import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

// initialize data connect with connector config (generated)
const dcService = getDataConnect(connectorConfig);

// export data connect service to be passed in functions
export default dcService;
