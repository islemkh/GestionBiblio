import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
document.getElementById('root')
);
//serviceWorker.unregister();
