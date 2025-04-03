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
          "MoveIt: Easy-to-use task management tool",
          "AGRIBS: Platform for farmers",
          "Coach: A tool for vulnerability analysis in GitHub repos",
          "Remote Control: A tool for automating Cybersecurity operations",
        ]}
      />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
