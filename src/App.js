import "./style.css";

import Card from "./Components/Card";
import Footer from "./Components/Footer";
import BeforeFooter from "./Components/DemoSection";
import {LikeTwoTone } from "@ant-design/icons";
import WebExperience from "./Components/WebExperience";
import AdvanceFeatureMain from "./Components/AdvanceFeatureMain";

function App() {
  

  const Workflow = [
    {
      title: "Robust WorkFlow",
      des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: (
        <div
          class="rounded-full w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: "#2273EA" }}
        >
          <LikeTwoTone style={{ fontSize: "25px" }} />
        </div>
      ),
    },
    {
      title: "Robust WorkFlow",
      des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: (
        <div
          class="rounded-full w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: "#2273EA" }}
        >
          <LikeTwoTone style={{ fontSize: "25px" }} />
        </div>
      ),
    },
    {
      title: "Robust WorkFlow",
      des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: (
        <div
          class="rounded-full w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: "#2273EA" }}
        >
          <LikeTwoTone style={{ fontSize: "25px" }} />
        </div>
      ),
    },
    {
      title: "Robust WorkFlow",
      des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: (
        <div
          class="rounded-full w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: "#2273EA" }}
        >
          <LikeTwoTone style={{ fontSize: "25px" }} />
        </div>
      ),
    },
    {
      title: "Robust WorkFlow",
      des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: (
        <div
          class="rounded-full w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: "#2273EA" }}
        >
          <LikeTwoTone style={{ fontSize: "25px" }} />
        </div>
      ),
    },
    {
      title: "Robust WorkFlow",
      des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: (
        <div
          class="rounded-full w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: "#2273EA" }}
        >
          <LikeTwoTone style={{ fontSize: "25px" }} />
        </div>
      ),
    },
  ];
  return (
    <div class="scroll-smooth ">
      <WebExperience/>
      <div class="grid grid-cols-3 gap-4 mx-1/4 p-8">
        {Workflow.map((item) => (
          <Card title={item.title} des={item.des} icon={item.icon} />
        ))}
      </div>

      <AdvanceFeatureMain/>
      <BeforeFooter />
      <Footer />
    </div>
  );
}

export default App;
