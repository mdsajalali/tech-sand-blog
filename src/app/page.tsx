import About from "@/pages/About";
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
      <StrategicPartnerships />
      <WorkTestimonial />
      <JoinUs />
      <Footer />
    </>
  );
}
