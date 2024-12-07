/* eslint-disable @typescript-eslint/no-explicit-any */
import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";
import { useRef } from "react";
import Loader from "./components/Loader";

function App() {
  const webgiViewerRef = useRef<any>();
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Navbar />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
