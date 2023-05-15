import ReactDOM from 'react-dom/client';
import PorfolioContextProvider from './store/AppContextProvider';

import './index.css';
import App from './App';

const rootDoc = document.getElementById('root')

const root = ReactDOM.createRoot(rootDoc);
root.render(
        <PorfolioContextProvider>
            <App />
        </PorfolioContextProvider>
    );
