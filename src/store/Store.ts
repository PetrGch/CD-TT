import {createStore, applyMiddleware, Store} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from "../reducer";

const loggerMiddleware = createLogger();

export default class StoreSingleton {

    private static store: Store | null = null;

    private constructor() {}

    public static getStoreInstance(preloadedState: any): Store {
        if (this.store === null) {
            this.store = this.configureStore(preloadedState);
        }

        return this.store;
    }

    private static configureStore(preloadedState: any): Store {
        const env = process.env.NODE_ENV;
        if (env === "development") {
            return createStore(
                rootReducer,
                preloadedState,
                applyMiddleware(
                    thunkMiddleware,
                    loggerMiddleware
                )
            );
        }

        return createStore(
            rootReducer,
            preloadedState,
            applyMiddleware(
                thunkMiddleware
            )
        );
    }

}