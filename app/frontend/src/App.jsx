import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/modules/ProtectedRoute'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Navigation from './components/modules/Navigation'

export default function App() {
  const [isUser, setIsUser] = useState(true)
  return (
    <Router>

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

    </Router >
  )
}