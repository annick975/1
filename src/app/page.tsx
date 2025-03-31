import { FC } from "react";
import Home from "@/components/home/page";
import Projects from "@/components/projects/page";
const Main: FC = () => {
  return (
    <div>
      <Home />
      <Projects
        projectNames={[
          "VulSca: Vulnerability scanning tool",
          "AGRIBS: Platform for farmers",
          "MEDIX: AI-Powered Medical platform",
        ]}
      />
    </div>
  );
};

export default Main;
