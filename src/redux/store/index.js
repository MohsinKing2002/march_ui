import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import session from '@/redux/reducer/session';
import navigation from '@/redux/reducer/navigation';

const persistConfig = {
  key: 'taskfollow',
  storage
};

const rootReducer = combineReducers({
  session,
  navigation
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store);
