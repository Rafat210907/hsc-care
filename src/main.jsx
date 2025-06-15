// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Layout from './AllRoutes/Layout'
import {router} from './AllRoutes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>
);
