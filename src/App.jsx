import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'

import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import ProductPage from './Pages/ProductPage'
import ProductPage2 from './Pages/ProductPage2'
import ProjectPage from './Pages/ProjectPage'
import ContactUs from './Pages/ContactUs'
import Checkout from './Pages/Checkout'
import Myprofile from './Pages/Myprofile'
import Myorders from './Pages/Myorders'
import SubscriptionPage from './Pages/SubscriptionPage'
import SavedProjects from './Pages/SavedProjects'
import Support from './Pages/Support'

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#F7FF80]">
      {/* <div className="sticky top-0 z-10">
      <Navbar />
      </div> */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/productpage' element={<ProductPage />} />
          <Route path="/productpage2" element={<ProductPage2 />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/profile' element={<Myprofile />} />
          <Route path="myorders" element={<Myorders />} />
          <Route path='subscriptions' element={<SubscriptionPage />} />
          <Route path="savedprojects" element={<SavedProjects />} />
          <Route path="support" element={<Support />} />
        </Routes>
      </div>
      {/* <Footer /> */}
      </div>
      </>
  )
}

export default App