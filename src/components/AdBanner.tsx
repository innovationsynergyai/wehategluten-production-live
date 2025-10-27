import React, { useState, useEffect } from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdBanner: React.FC<AdBannerProps> = ({ 
  slot = "1234567890", 
  format = "auto",
  className = "",
  style = {}
}) => {
  const [visible, setVisible] = useState(true);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    try {
      // Initialize adsbygoogle array if it doesn't exist
      window.adsbygoogle = window.adsbygoogle || [];
      
      // Push ad configuration
      window.adsbygoogle.push({});
      setAdLoaded(true);
    } catch (error) {
      console.error('AdSense fallback error:', error);
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  const defaultStyle = {
    display: 'block',
    minHeight: '90px',
    ...style
  };

  return (
    <div className={`ad-container ${className}`}>
      <ins 
        className="adsbygoogle"
        style={defaultStyle}
        data-ad-client="ca-pub-9619954322348082"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
        data-ad-test={process.env.NODE_ENV === 'development' ? 'on' : undefined}
      />
      {!adLoaded && (
        <div className="ad-placeholder bg-gradient-to-r from-sage-50 to-blush-50 border border-sage-200/50 rounded-lg p-4 text-center">
          <span className="text-sage-500 text-sm font-light">Advertisement</span>
        </div>
      )}
    </div>
  );
};

export default AdBanner;