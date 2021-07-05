import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import SnackbarProvider from 'react-simple-snackbar'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {store} from './Store'

ReactDOM.render(
    <Provider store={store}>
        <SnackbarProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </SnackbarProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
