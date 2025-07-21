import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { HashRouter, Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Home"
console.log('🔥 App loaded on', window.location.href);
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"      element={<Home />} />
        
      </Routes>
    </HashRouter>
  )
}
