import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
