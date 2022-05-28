import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,HashRouter } from 'react-router-dom';
import  App  from './routes/App';

ReactDOM.render(<HashRouter>
    <App />
</HashRouter>, document.getElementById('root'));
