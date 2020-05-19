import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'))
