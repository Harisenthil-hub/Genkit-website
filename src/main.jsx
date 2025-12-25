
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/Genkit-website">  {/*Should remove base on deployment */}
      <App />
    </BrowserRouter>
)
