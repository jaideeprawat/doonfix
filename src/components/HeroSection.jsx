import { useNavigate } from "react-router-dom";
import bannerImg from "../assets/images/banner.jpeg"
export 
default function HeroSection() {
    const navigate = useNavigate();
  return (
    <section className="w-full bg-white overflow-hidden">

      {/* Image Wrapper */}
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px]">
        <img
          src={bannerImg}
          alt="Home service"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
          {/* <h1 className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
            Trusted home services in Banjarawala
          </h1>

          <p className="mt-2 text-white/90 text-sm sm:text-base">
            Serving Kargi, Bangali Kothi & Mothorowala (within 5 km)
          </p> */}

          {/* CTA Button */}
          <button
  onClick={() =>
    navigate("/book/", { state: { fromApp: true } })
  }
  className="
    relative overflow-hidden
    mt-4
    bg-green-500 hover:bg-green-600
    text-white
    px-6 py-2
    rounded-lg
    text-sm sm:text-base
    font-medium
    shadow-md
  "
>
  {/* SHINE */}
  <span className="shine-layer"></span>

  {/* BUTTON TEXT */}
  <span className="relative z-10">
    Book a Service
  </span>
</button>

        </div>
      </div>

    </section>
  );
}
