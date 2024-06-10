import './index.css';
import React from "react";
import ReactDom from 'react-dom/client';
import App from "./App";
import { BooksProvider } from './context/BooksContext';

const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);

root.render(
    <BooksProvider value={5} >
        <App />
    </BooksProvider>
);