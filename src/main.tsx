import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './images/castle.png'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
)
