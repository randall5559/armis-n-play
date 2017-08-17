import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'rxjs';

import configureStore from './stores/configure-store.jsx';
import Comp from './components/index.jsx';


const store = configureStore();
const App = () => {
    return (<MuiThemeProvider>
        <Comp />
    </MuiThemeProvider>);
};


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
