import React from 'react';
import AdBanner from './AdBanner';
import { useAdSense } from './AdSenseProvider';

interface AdPlacementProps {
  position: 'header' | 'sidebar' | 'content' | 'footer' | 'mobile';
  className?: string;
}

const AdPlacement: React.FC<AdPlacementProps> = ({ position, className = "" }) => {
  const { adsLoaded, adBlockDetected } = useAdSense();

  // Ad slot configurations for different positions
  const adConfigs = {
    header: {
      slot: "1234567890",
      format: "horizontal" as const,
      style: { minHeight: '90px' }
    },
    sidebar: {
      slot: "2345678901",
      format: "vertical" as const,
      style: { minHeight: '250px', width: '300px' }
    },
    content: {
      slot: "3456789012",
      format: "rectangle" as const,
      style: { minHeight: '250px' }
    },
    footer: {
      slot: "4567890123",
      format: "horizontal" as const,
      style: { minHeight: '90px' }
    },
    mobile: {
      slot: "5678901234",
      format: "auto" as const,
      style: { minHeight: '50px' }
    }
  };

  const config = adConfigs[position];

  if (adBlockDetected) {
    return (
      <div className={`ad-fallback bg-gradient-to-r from-sage-50 to-blush-50 border border-sage-200/50 rounded-lg p-6 text-center ${className}`}>
        <p className="text-sage-600 font-light mb-4">Support Our Community</p>
        <button className="bg-gradient-to-r from-sage-400 to-sage-500 text-white px-6 py-2 rounded-full text-sm font-light hover:from-sage-500 hover:to-sage-600 transition-all duration-300">
          Disable Ad Blocker
        </button>
      </div>
    );
  }

  return (
    <div className={`ad-placement ${className}`}>
      <AdBanner 
        slot={config.slot}
        format={config.format}
        style={config.style}
        className="w-full"
      />
    </div>
  );
};

export default AdPlacement;