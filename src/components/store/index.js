import { configureStore } from '@reduxjs/toolkit';

import historySlice from './reducers/historySlice';
import payloadSlice from './reducers/payloadSlice';

const store = configureStore({
  reducer: { history: historySlice.reducer, payload: payloadSlice.reducer },
});

export default store;