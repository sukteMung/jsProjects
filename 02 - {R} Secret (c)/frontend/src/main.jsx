import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.css'
import App from './App.jsx'

import ImagesPage from "./pages/ImagesPage.jsx";
import QuotesPage from "./pages/QuotesPage.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ImagesPage" element={<ImagesPage />} />
      <Route path="/QuotesPage" element={<QuotesPage />} />
    </Routes>
  </BrowserRouter>
)
