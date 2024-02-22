import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import App from './App.jsx';
import './index.css';

import { linksEn } from './translations/en/global.js';
import { linksAr } from './translations/ar/global.js';
import { linksFr } from './translations/fr/global.js';
const newLang = window.localStorage.getItem('lng');

i18next.init({
  interpolation: { escapeValue: false },
  lng: newLang,
  resources: {
    en: {
      global: linksEn,
    },
    ar: {
      global: linksAr,
    },
    fr: {
      global: linksFr,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
