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
        projects={[
          {
            name: "MoveIt: Easy-to-use task management tool",
            sourceCodeUrl: "https://github.com/annick975/MoveIt_updated",
            liveDemoUrl: "https://move-it-updated.vercel.app",
            description:
              "A comprehensive task management tool designed for ease of use and productivity.",
          },
          {
            name: "AGRIBS: Platform for farmers",
            sourceCodeUrl: "https://github.com/annick975/agribs",
            liveDemoUrl: "https://agribs--beige.vercel.app/",
            description:
              "A digital platform helping farmers manage their operations and connect with markets.",
          },
          {
            name: "Coach: A tool for vulnerability analysis in GitHub repos",
            sourceCodeUrl: "https://github.com/annick975/Coach",
            liveDemoUrl: "https://coach-documentation.vercel.app",
            description:
              "Security tool for analyzing and identifying vulnerabilities in GitHub repositories.",
          },
          {
            name: "Remote Control: Automating cybersecurity operations.",
            sourceCodeUrl: "https://github.com/annick975/Remote_control",
            liveDemoUrl: "https://github.com/annick975/Remote_control",
            description:
              "Automation suite for streamlining cybersecurity operations and response.",
          },
          {
            name: "Vulner: Network scanner",
            sourceCodeUrl: "https://github.com/annick975/Vulner",
            liveDemoUrl: "https://github.com/annick975/Vulner",
            description:
              "An automated tool for scanning networks, mapping vulnerabilities, and securing systems.",
          },
          {
            name: "CyDaily: Cyber Game",
            sourceCodeUrl: "https://github.com/annick975/CyDaily_web",
            liveDemoUrl: "https://github.com/annick975/CyDaily_web",
            description:
              "A gamified platform for cybersecurity awareness, daily insights, and threat detection.",
          },
        ]}
      />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
