import Footer from '@components/Footer'
import Header from '@components/Header'
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      <Header/>

      <Outlet/>

      <Footer/>
    </>
  )
}

export default App
