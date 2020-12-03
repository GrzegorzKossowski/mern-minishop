// tworzenie sklepu, łączenie reducerów, wstawianie middlewarów
import { createStore, applyMiddleware } from 'redux'
// asynchronic library
import thunk from 'redux-thunk'
// redux logger
// import logger from 'redux-logger'
// chrome devtools addon
import { composeWithDevTools } from 'redux-devtools-extension'
// import root reducer
import reducer from './root.reducer'

// set initial state
const initialState = {}

// collect milddlewares
// const middleware = [thunk, logger]
const middleware = [thunk]

// create store
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

export default store;