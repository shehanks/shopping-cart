import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index';

const strore = configureStore({
    reducer: reducers,
    devTools: true,
    preloadedState: {}
});

export default strore;