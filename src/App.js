import Footer from "./Components/Footer";
import BeforeFooter from "./Components/DemoSection";
import WebExperience from "./Components/WebExperience";
import AdvanceFeatureMain from "./Components/AdvanceFeatureMain";
import React from "react";
import RobustWorkflowMain from "./Components/RobustWorkflowMain";

function App() {
  
  return (
    <div className="scroll-smooth ">
      <WebExperience/>     
      <RobustWorkflowMain/>
      <AdvanceFeatureMain/>
      <BeforeFooter />
      <Footer />
    </div>
  );
}

export default App;
