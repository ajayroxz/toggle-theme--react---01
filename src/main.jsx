import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Comp1 from './comp1.jsx'
import './index.css'
import App from './App.jsx'

const root=createRoot(document.getElementById('root'));
root.render(
  <Comp1/> 
)