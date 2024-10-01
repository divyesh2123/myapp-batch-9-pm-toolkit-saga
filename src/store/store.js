import {configureStore} from '@reduxjs/toolkit'
import counterslice from '../slice/counterslice';
import post from './post';
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from '../saga/rootSaga';
import userslice from '../slice/userslice';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:{
        counter: counterslice,
        post: post,
        user:userslice
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;