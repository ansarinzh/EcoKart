import {createStore, combineReducers} from 'redux';
////
import {persistStore, persistReducer} from 'redux-persist';
import {CartReducer} from './Reducer/CartReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from 'redux-persist/lib/storage';
const reducer = combineReducers({
  CartReducer: CartReducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};
