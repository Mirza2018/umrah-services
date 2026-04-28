import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { baseApi } from "./api/baseApi";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// ✅ Safe storage that works on ALL browsers including iOS Safari
const createSafeStorage = () => {
  const noop = {
    getItem: (_key) => Promise.resolve(null),
    setItem: (_key, value) => Promise.resolve(value),
    removeItem: (_key) => Promise.resolve(),
  };

  try {
    // Test if localStorage actually works (fails in iOS Private Mode)
    const testKey = "__redux_persist_test__";
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);

    // ✅ Return a plain object storage (NOT createWebStorage)
    // createWebStorage has Safari recursion issues
    return {
      getItem: (key) => {
        return Promise.resolve(localStorage.getItem(key));
      },
      setItem: (key, value) => {
        return Promise.resolve(localStorage.setItem(key, value));
      },
      removeItem: (key) => {
        return Promise.resolve(localStorage.removeItem(key));
      },
    };
  } catch (e) {
    // iOS Private Mode or storage blocked — use noop
    return noop;
  }
};

const storage = createSafeStorage();

const persistConfig = {
  key: "umrah-dashboard",
  storage,
  whitelist: ["auth"],
  blacklist: ["baseApi"],
};

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
};

const persistedAuthReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer),
);

export const store = configureStore({
  reducer: persistedAuthReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
