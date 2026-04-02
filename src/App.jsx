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
import Popup from "./popup";
import BookingForm from "./booking-form";
import ThankYou from "./thank-you";

function App() {
  return (
    <BrowserRouter>  
     <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <AdminPage />
            <SecondPage />
            <ThirdPage />
            {/* <Clients /> */}
            <Animate />
            <FixthPage />
            <Popup/>
            <SixthPage />
            <SeventhPage />
            <ResponsiveSection />
            <FaqPage />
          </>
        } />
        <Route path="/thankyou" element={<ThankYou/>}/>
        <Route path="/form" element={<BookingForm/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;