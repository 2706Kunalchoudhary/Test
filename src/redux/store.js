import { legacy_createStore as createStore,compose, applyMiddleware,combineReducers } from "redux";
// import thunk from "redux-thunk";
import { persistStore, persistCombineReducers ,persistReducer} from "redux-persist";
import reducers from '../redux/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { thunk } from "redux-thunk";
const config = {
    key: "root",
    storage: AsyncStorage,
  };


const rootReducer1 = combineReducers({
   reducers
  })


  const persistedReducer = persistReducer(config, rootReducer1)
let middlewares = [thunk];
const store = createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(...middlewares))
  );
  
  export  const persistor = persistStore(store);    // making a store that persist the data into redux. 
  export default store;