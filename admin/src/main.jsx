import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Event from './components/Event'
import Person from './components/Person'
import Layout from './components/Layout'
import CreatePerson from './components/CreatePerson'
import CreateEvent from './components/CreateEvent.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Person />} />
      <Route path='create' element={<CreatePerson />} />
      <Route path='event/createEvent' element={<CreateEvent />} />
      <Route path='event' element={<Event />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <>
   <RouterProvider router={router} />
  </>,
)
