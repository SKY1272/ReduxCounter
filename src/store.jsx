// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Import your combined reducers here

const store = createStore(rootReducer);

export default store;
