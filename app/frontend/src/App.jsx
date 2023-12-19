import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/modules/ProtectedRoute'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Navigation from './components/modules/Navigation'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [isUser, setIsUser] = useState(false)
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute auth={isUser}>
              <Home />
            </ProtectedRoute>
          } />
          <Route path='about' element={
            <ProtectedRoute auth={isUser}>
              <About />
            </ProtectedRoute>
          } />

          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </main>

      <footer>
        <ToastContainer />
      </footer>
    </>
  )
}