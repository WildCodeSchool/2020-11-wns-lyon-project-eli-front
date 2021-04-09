import { createContext, Dispatch } from "react";
import { Action } from "../reducers/quizReducer";

const AppContext = createContext<Dispatch<Action> | null>(null);

export default AppContext;
