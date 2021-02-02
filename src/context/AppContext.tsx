import { createContext, Dispatch } from 'react';
import { Action } from '../reducers/AppReducer';

const AppContext = createContext<Dispatch<Action> | null>(null);

export default AppContext;
