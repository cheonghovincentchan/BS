// @ts-ignore
import 'amfe-flexible';
import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Input: {
            lineWidth: 2,
          },
          Button: {
            colorPrimary: '#2DBDB6',
          },
          Radio: {
            colorPrimary: '#2DBDB6',
          },
        },
      }}
    >
      <RecoilRoot>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </RecoilRoot>
    </ConfigProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
