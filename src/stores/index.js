import { createStore, applyMiddleware } from "redux"
import { createLogger } from 'redux-logger'
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers"
import rootSaga from "./sagas"

const logger = createLogger({
    predicate: (getState, action) => process.env.NODE_ENV !== 'production'
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
