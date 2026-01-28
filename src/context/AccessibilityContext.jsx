import React, { createContext, useState, useMemo } from "react";

export const AccessibilityContext = createContext(null);

export const AccessibilityProvider = ({ children }) => {
  const [isGlassEffectEnabled, setIsGlassEffectEnabled] = useState(true);

  const value = useMemo(
    () => ({
      isGlassEffectEnabled,
      toggleGlassEffect: () => setIsGlassEffectEnabled((prev) => !prev),
    }),
    [isGlassEffectEnabled],
  );

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};
