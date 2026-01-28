import React, { useContext } from "react";
import { AccessibilityContext } from "../context/AccessibilityContext";
import "../styles/accessibility.css";

const AccessibilityToggle = () => {
  const { isGlassEffectEnabled, toggleGlassEffect } =
    useContext(AccessibilityContext);

  return (
    <div className="accessibility-toggle">
      <label className="switch">
        <input
          type="checkbox"
          checked={isGlassEffectEnabled}
          onChange={toggleGlassEffect}
        />
        <span className="slider round"></span>
      </label>
      <span>Effetto Vetro</span>
    </div>
  );
};

export default AccessibilityToggle;
