// // import { useState } from 'react'
// // import './App.css'
// // import Header from './header'

// // function App() {

// //   return (
// //     <>
// //      <Header/>
// //     </>
// //   )
// // }

// // export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import SecondPage from "./second-page";
import ThirdPage from "./third-page";
import FixthPage from "./fixth-page";
import FaqPage from "./faq-page";
import ResponsiveSection from "./responsive-section";
import SixthPage from "./images";
import SeventhPage from "./seventh-page";
import Clients from "./clients";
import Animate from "./animate";
import AdminPage from "./admin-page";
import Footer from "./footer";
// import AdminPage from './admin-page'
function App() {
  return (
    <>
      <AdminPage />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <SecondPage />
              <ThirdPage />
              <Clients />
              <Animate />
              <FixthPage />
              <SixthPage />
              <SeventhPage />
              <ResponsiveSection />
              <FaqPage />
            </>
          } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
