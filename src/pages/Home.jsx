import { useNavigate, useLocation } from "react-router-dom";
import CategoryGrid from "../components/CategoryGrid";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  function openModal(category) {
    navigate("/", {
      state: {
        category,
        backgroundLocation: location,
      },
    });
  }

  return (
    <>
      <HeroSection />
      <CategoryGrid setCategory={openModal} />
      <WhyChooseUs></WhyChooseUs>
      <Footer />
    </>
  );
}
