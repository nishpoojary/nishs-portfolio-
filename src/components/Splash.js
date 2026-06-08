import React, { useEffect, useState } from "react";


function Splash() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show splash for 2.5 seconds, then fade out
    const timer = setTimeout(() => setFadeOut(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash ${fadeOut ? "fade-out" : ""}`}>
      <div className="logo-container">
        <span className="nn-logo">N</span>
      </div>
    </div>
  );
}

export default Splash;
