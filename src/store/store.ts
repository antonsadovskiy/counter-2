import {combineReducers, legacy_createStore} from "redux";
import {settingsReducer} from "./settings/settingsReducer";
import {counterReducer} from "./counter/counterReducer";


const rootReducer = combineReducers({
    settings: settingsReducer,
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>