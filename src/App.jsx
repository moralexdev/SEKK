import * as React from 'react';

import './App.css';
import LoadingContextProvider from './context/LoadingContext';
import Page from './components/page/Page';
import Spinner from './components/spinner/Spinner';

import { createCn } from 'bem-react-classname';
const cn = createCn('app');

const App = () => (
    <LoadingContextProvider>
        <div className={cn()}>
            <Spinner/>
            <Page />
        </div>
    </LoadingContextProvider>
);

export default App;