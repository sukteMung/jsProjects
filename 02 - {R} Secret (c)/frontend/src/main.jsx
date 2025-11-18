import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'

import ImagesPage from "./pages/ImagesPage.jsx";
import QuotesPage from "./pages/QuotesPage.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/a" element={<ImagesPage />} />
      <Route path="/b" element={<QuotesPage />} />
    </Routes>
  </BrowserRouter>
)
