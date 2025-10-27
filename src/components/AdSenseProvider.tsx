import React, { createContext, useContext, useEffect, useState } from 'react';

interface AdSenseContextType {
  adsLoaded: boolean;
  adBlockDetected: boolean;
}

const AdSenseContext = createContext<AdSenseContextType>({
  adsLoaded: false,
  adBlockDetected: false
});

export const useAdSense = () => useContext(AdSenseContext);

interface AdSenseProviderProps {
  children: React.ReactNode;
}

export const AdSenseProvider: React.FC<AdSenseProviderProps> = ({ children }) => {
  const [adsLoaded, setAdsLoaded] = useState(false);
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    // Check if AdSense script is loaded
    const checkAdSense = () => {
      if (window.adsbygoogle) {
        setAdsLoaded(true);
      } else {
        // Detect ad blocker
        setAdBlockDetected(true);
      }
    };

    // Check immediately
    checkAdSense();

    // Check again after a delay
    const timer = setTimeout(checkAdSense, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AdSenseContext.Provider value={{ adsLoaded, adBlockDetected }}>
      {children}
    </AdSenseContext.Provider>
  );
};