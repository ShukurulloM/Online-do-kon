import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Card from './pages/Card';

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Card />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App