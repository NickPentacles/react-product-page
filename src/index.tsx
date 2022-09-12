import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalState } from './context/ModalContext';
import { BrowserRouter } from 'react-router-dom';


// Здесь мы подвязываемся к элементу root из index.html, с помощью createRoot 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Функция render используется для отрисовки наших компонентов 
// <React.StrictMode> строгий режим, нужен для разработки, но пока что мы его отключим

root.render(
  <BrowserRouter>
    <ModalState>
      <App />
    </ModalState>
  </BrowserRouter>
);


