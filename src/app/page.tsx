import Footer from "@/pages/Footer";
import JoinUs from "@/pages/JoinUs";
import Navbar from "@/pages/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <h1 className="text-center py-5">Content</h1>
      <JoinUs />
      <Footer />
    </>
  );
}
