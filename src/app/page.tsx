import { FC } from "react";
import Home from "@/components/home/page";
import Projects from "@/components/projects/page";
import Header from "@/components/header/page";
import Testimonials from "@/components/testimonials/page";
import Contact from "@/components/contact/page";
import Footer from "@/components/footer/page";

const Main: FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <Projects
        projectNames={[
          "VulSca: Vulnerability scanning tool",
          "AGRIBS: Platform for farmers",
          "MEDIX: AI-Powered Medical platform",
        ]}
      />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
