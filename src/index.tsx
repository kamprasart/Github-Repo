import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Global playTrack function as per project requirements
function playTrack(name: string): void {
  alert("Preview not available yet: " + name)
}

declare global {
  interface Window {
    playTrack: (name: string) => void
  }
}
window.playTrack = playTrack

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
