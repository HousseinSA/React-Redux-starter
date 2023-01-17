import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./style.css"
import { Provider } from "react-redux"
import {applyMiddleware , createStore} from "redux"
import thunkMiddleware  from "redux-thunk"
import Reducers from "./Reducers"
import {composeWithDevTools} from "redux-devtools-extension"
import logger from "redux-logger"
const store = createStore(Reducers ,  composeWithDevTools(applyMiddleware(logger , thunkMiddleware))  )
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)
