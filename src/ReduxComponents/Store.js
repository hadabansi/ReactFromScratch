import {logger} from 'redux-logger';
import { createStore,applyMiddleware} from 'redux'
import { rootreducer } from './RootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store=createStore(rootreducer,composeWithDevTools(applyMiddleware(logger,thunk)))
