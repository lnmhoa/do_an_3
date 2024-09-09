import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyle from './components/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle>
                <App />
            </GlobalStyle>
        </ThemeProvider>
    </Provider>,
    // </React.StrictMode>,
);

reportWebVitals();
