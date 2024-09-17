import * as React from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";
import Custom from "./custom";
import PreMade from "./preMade";

const App: React.FC = () => {
  const [isCustom, setIsCustom] = useState(true);

  const handleToggle = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsCustom(prevState => !prevState);
  };

  return (
    <div>
      <form>
        <div className="toggle-container">
          <div 
            className={`toggle-button ${isCustom ? 'left' : 'right'}`} 
            onClick={handleToggle}
          >
            <div className="slider"></div>
          </div>
          <div className="toggle-labels">
            <span className={isCustom ? 'active' : ''}>Custom Prompt</span>
            <span className={!isCustom ? 'active' : ''}>Explore</span>
          </div>
        </div>
        {isCustom ? <Custom /> : <PreMade />}
      </form>
    </div>
  );
};

export default App;

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);