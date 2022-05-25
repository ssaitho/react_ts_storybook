import { Header } from './stories/Header'
import { Button } from './stories/Button'
import { Card } from './stories/Card'
import { Modal } from './stories/Modal'
import { Test } from './stories/Test'

const returnLibrary = () => {
    return {
        Header: Header,
        Button: Button,
        Card: Card,
        Modal: Modal,
        Test: Test
        // you can add here other components that you want to export
    }
}
export default returnLibrary()

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
