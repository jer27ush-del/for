import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/600.css'
import '@fontsource/nunito/700.css'
import '@fontsource/nunito/800.css'
import '@fontsource/caveat/500.css'
import '@fontsource/caveat/700.css'
import './styles/base.css'
import './styles/components.css'
import './styles/pages.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
