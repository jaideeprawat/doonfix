import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import UserBookings from "./pages/UserBookings";
import Profile from "./pages/profile";
import ServiceDetail from "./pages/ServiceDetail";
import Booking from "./pages/Booking";
import ServicePreviewModal from "./components/ServicePreviewModal";
import AboutUs from "./pages/AboutUs";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Term from "./pages/Term";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state;
  const backgroundLocation = state?.backgroundLocation;

  return (
    <>
      <Header />

      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/userbookings" element={<UserBookings />} />
        <Route path="/about" element={<AboutUs />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Term />} />

        <Route path="/service/:slug" element={<ServiceDetail />} />
        <Route path="/book" element={<Booking />} />
<Route path="/book/:serviceId" element={<Booking />} />
<Route path="/book/:serviceId/:problemId" element={<Booking />} />

      </Routes>

      {backgroundLocation && state?.category && (
        <ServicePreviewModal
          category={state.category}
          onClose={() => navigate(-1)}
          handleViewDetailClick={(id) =>
            navigate(`/service/${id}`, { state: {fromApp:true} })
          }
          handleServiceClick={(id, pid) =>
            navigate(`/book/${id}/${pid}`, {
  state: { fromApp: true }
})

          
          }
        />
      )}
    </>
  );
}
