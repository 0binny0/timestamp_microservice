import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter} from "react-router-dom";

// async function enableMocking() {
//   if (process.env.NODE_ENV !== 'development') {
//     return
//   }
//
//   const { worker } = await import('./test/mocks/browser.js')
//
//
//   return worker.start()
// }

// enableMocking().then(() => {
//     ReactDOM.createRoot(document.getElementById('root')).render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//         </React.StrictMode>
//     )
// })

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
