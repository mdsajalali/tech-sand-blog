import About from "@/pages/about/About";
import AboutThree from "@/pages/about/AboutThree";
import AboutTwo from "@/pages/about/AboutTwo";
import Footer from "@/pages/Footer";
import JoinUs from "@/pages/JoinUs";
import Navbar from "@/pages/Navbar";
import StrategicPartnerships from "@/pages/StrategicPartnerships";
import WorkTestimonial from "@/pages/WorkTestimonial";

export default function page() {
  return (
    <>
      <Navbar />
      <About />
      <AboutTwo />
      <AboutThree />
      <StrategicPartnerships />
      <WorkTestimonial />
      <JoinUs />
      <Footer />
    </>
  );
}
