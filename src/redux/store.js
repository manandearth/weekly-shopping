import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from "./reducers";


const persistConfig = {
 key: 'root',
 storage: storage,
	stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
	,  blacklist: ['recipes', 'week', 'pantry'] // -> look in doc.org
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
	pReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);



//ORIGIAL STORE SETUP
// export default createStore(rootReducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
