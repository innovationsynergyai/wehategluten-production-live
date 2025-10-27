import { Share2, Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
}

export default function SocialShare({ 
  url = window.location.href, 
  title = "Check out WeHateGluten.com",
  description = "Amazing gluten-free resources and community!"
}: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  };

  const socialLinks = {
    facebook: 'https://facebook.com/wehategluten',
    instagram: 'https://instagram.com/wehategluten',
    twitter: 'https://twitter.com/wehategluten',
    youtube: 'https://youtube.com/wehategluten',
    tiktok: 'https://tiktok.com/@wehategluten'
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gradient-to-r from-sage-400 to-sage-500 text-white px-6 py-3 rounded-full hover:from-sage-500 hover:to-sage-600 transition-all duration-300 shadow-lg"
      >
        <Share2 className="h-5 w-5" />
        <span className="font-light">Share</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-pearl-200/50 p-6 min-w-[280px] z-50 animate-slide-down">
          <h4 className="font-light text-pearl-800 mb-4 text-lg">Share This Page</h4>
          
          <div className="grid grid-cols-3 gap-3 mb-6">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300 group"
            >
              <Facebook className="h-6 w-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs text-blue-700 font-light">Facebook</span>
            </a>
            
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-3 rounded-xl bg-sky-50 hover:bg-sky-100 transition-colors duration-300 group"
            >
              <Twitter className="h-6 w-6 text-sky-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs text-sky-700 font-light">Twitter</span>
            </a>
            
            <a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-3 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-300 group"
            >
              <MessageCircle className="h-6 w-6 text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs text-green-700 font-light">WhatsApp</span>
            </a>
          </div>

          <div className="border-t border-pearl-200 pt-4">
            <h5 className="font-light text-pearl-700 mb-3 text-sm">Follow Us</h5>
            <div className="flex justify-center space-x-4">
              {Object.entries(socialLinks).map(([platform, link]) => {
                const Icon = platform === 'facebook' ? Facebook : 
                           platform === 'instagram' ? Instagram :
                           platform === 'twitter' ? Twitter :
                           platform === 'youtube' ? Youtube : Share2;
                
                return (
                  <a
                    key={platform}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-sage-100 to-blush-100 rounded-full flex items-center justify-center hover:from-sage-200 hover:to-blush-200 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-5 w-5 text-sage-600" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}