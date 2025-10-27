import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Shield, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  Heart,
  ShoppingCart,
  Download,
  Zap,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Search,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
  DollarSign,
  Target,
  BarChart3,
  Smartphone
} from 'lucide-react';

import SEOHead from './components/SEOHead';
import SocialShare from './components/SocialShare';
import BlogPreview from './components/BlogPreview';
import DigitalProducts from './components/DigitalProducts';
import { AdSenseProvider } from './components/AdSenseProvider';
import AdPlacement from './components/AdPlacement';

function App() {
  const [emailSignup, setEmailSignup] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
        value: 1.0,
        currency: 'USD'
      });
    }
    
    // Track Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    
    console.log('Email signup:', emailSignup);
    alert('Success! Check your email for your FREE Complete Gluten-Free Starter Guide (47-page PDF)');
    setEmailSignup('');
  };

  const handlePurchaseClick = (productName: string, price: string) => {
    // Track purchase intent
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'add_to_cart', {
        currency: 'USD',
        value: parseFloat(price.replace('$', '')),
        items: [{
          item_id: productName.toLowerCase().replace(/\s+/g, '-'),
          item_name: productName,
          category: 'Digital Products',
          quantity: 1,
          price: parseFloat(price.replace('$', ''))
        }]
      });
    }
    
    // Track Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'AddToCart', {
        value: parseFloat(price.replace('$', '')),
        currency: 'USD'
      });
    }
  };

  return (
    <HelmetProvider>
      <AdSenseProvider>
        <div className="min-h-screen bg-stone-50 font-display">
          <SEOHead />
          
          {/* Header */}
          <header className="bg-stone-50/95 backdrop-blur-xl border-b border-pearl-200/40 fixed top-0 left-0 right-0 z-50 w-full">
            {/* Header Ad */}
            <AdPlacement position="header" className="max-w-7xl mx-auto px-6 lg:px-8 py-2" />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 bg-gradient-to-br from-sage-300 via-sage-400 to-sage-500 rounded-2xl flex items-center justify-center shadow-lg shadow-sage-200/50">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-light text-pearl-800 tracking-[-0.02em]">WeHateGluten</span>
                    <div className="text-xs text-pearl-500 font-light">Digital Products & Community</div>
                  </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products, guides..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-64 px-4 py-2 pl-10 rounded-full border border-pearl-200 focus:outline-none focus:ring-2 focus:ring-sage-400 text-sm bg-white/80 backdrop-blur-sm"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-pearl-400" />
                  </div>
                  <a href="#digital-products" className="text-pearl-600 hover:text-sage-600 transition-all duration-300 font-light text-sm tracking-wide">Digital Products</a>
                  <a href="#blog" className="text-pearl-600 hover:text-sage-600 transition-all duration-300 font-light text-sm tracking-wide">Blog</a>
                  <a href="#community" className="text-pearl-600 hover:text-sage-600 transition-all duration-300 font-light text-sm tracking-wide">Community</a>
                  <a href="#supplements" className="text-pearl-600 hover:text-sage-600 transition-all duration-300 font-light text-sm tracking-wide">Supplements</a>
                  <SocialShare />
                  <button className="bg-gradient-to-r from-sage-400 to-sage-500 text-white px-8 py-3 rounded-full hover:from-sage-500 hover:to-sage-600 transition-all duration-300 font-light text-sm tracking-wide shadow-xl shadow-sage-200/30 hover:shadow-sage-300/40 hover:scale-105">
                    Free Guide
                  </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-lg hover:bg-pearl-100 transition-colors duration-300"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div className="lg:hidden py-6 border-t border-pearl-200/40 animate-slide-down">
                  <div className="space-y-4">
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 pl-10 rounded-full border border-pearl-200 focus:outline-none focus:ring-2 focus:ring-sage-400 text-sm"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-pearl-400" />
                    </div>
                    <a href="#digital-products" className="block text-pearl-600 hover:text-sage-600 transition-colors duration-300 font-light">Digital Products</a>
                    <a href="#blog" className="block text-pearl-600 hover:text-sage-600 transition-colors duration-300 font-light">Blog</a>
                    <a href="#community" className="block text-pearl-600 hover:text-sage-600 transition-colors duration-300 font-light">Community</a>
                    <a href="#supplements" className="block text-pearl-600 hover:text-sage-600 transition-colors duration-300 font-light">Supplements</a>
                    <button className="w-full bg-gradient-to-r from-sage-400 to-sage-500 text-white px-6 py-3 rounded-full font-light text-sm tracking-wide">
                      Get Free Guide
                    </button>
                  </div>
                </div>
              )}
            </div>
          </header>

        {/* Hero Section - Optimized for Conversions */}
        <section className="relative bg-gradient-to-br from-stone-50 via-cream-50/30 to-blush-50/20 py-12 sm:py-20 md:py-32 overflow-hidden mt-[120px] sm:mt-[140px]">
          <div className="absolute inset-0 bg-noise opacity-30"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm border border-pearl-200/60 rounded-full px-8 py-4 mb-12 shadow-lg shadow-pearl-200/20">
                <div className="w-2.5 h-2.5 bg-sage-400 rounded-full animate-pulse"></div>
                <span className="text-pearl-600 font-light text-sm tracking-[0.02em]">500,000+ members • $2M+ in digital products sold</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-extralight text-pearl-800 mb-8 md:mb-10 leading-tight md:leading-[0.85] tracking-[-0.02em] md:tracking-[-0.04em]">
                Download <span className="font-light italic text-sage-500 relative">
                  Premium
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent"></div>
                </span>
                <br />
                <span className="text-3xl sm:text-5xl md:text-7xl text-pearl-600">Gluten-Free Guides</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-pearl-500 mb-8 sm:mb-12 md:mb-16 leading-relaxed max-w-4xl mx-auto font-light tracking-wide px-4">
                Instant access to expert-created PDFs, courses, and meal plans. 
                <br className="hidden md:block" />
                Join the world's largest gluten-free digital library with 50,000+ downloads.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-16 md:mb-20 px-4">
                <button 
                  onClick={() => handlePurchaseClick('Premium Guide Bundle', '47')}
                  className="group bg-gradient-to-r from-sage-400 to-sage-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-light hover:from-sage-500 hover:to-sage-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-2xl shadow-sage-200/40 hover:shadow-sage-300/50 tracking-wide w-full sm:w-auto"
                >
                  <Download className="mr-3 h-5 w-5" />
                  Get Instant Access - $47
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group bg-white/80 backdrop-blur-sm text-pearl-700 border border-pearl-200/60 px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-light hover:bg-white hover:border-pearl-300 transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-xl shadow-pearl-200/20 tracking-wide w-full sm:w-auto">
                  Browse All Products
                  <ShoppingCart className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>

              {/* Revenue & Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-2xl shadow-pearl-200/20 border border-pearl-200/30">
                <div className="text-center group">
                  <div className="text-4xl font-extralight text-sage-500 mb-3 group-hover:scale-110 transition-transform duration-300">50K+</div>
                  <div className="text-pearl-500 font-light text-sm tracking-wide">Digital Downloads</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-extralight text-blush-400 mb-3 group-hover:scale-110 transition-transform duration-300">$2M+</div>
                  <div className="text-pearl-500 font-light text-sm tracking-wide">Revenue Generated</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-extralight text-sage-500 mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
                  <div className="text-pearl-500 font-light text-sm tracking-wide">Satisfaction Rate</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-extralight text-blush-400 mb-3 group-hover:scale-110 transition-transform duration-300">4.9★</div>
                  <div className="text-pearl-500 font-light text-sm tracking-wide">Average Rating</div>
                </div>
              </div>
            </div>
            
            {/* Content Ad Placement */}
            <div className="mt-16">
              <AdPlacement position="content" className="max-w-4xl mx-auto" />
            </div>
          </div>
        </section>

        {/* Digital Products Section */}
        <div id="digital-products">
          <DigitalProducts />
          
          {/* Sidebar Ad for Desktop */}
          <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
            <AdPlacement position="sidebar" />
          </div>
        </div>

        {/* Revenue Optimization Section */}
        <section className="py-12 sm:py-20 md:py-32 bg-gradient-to-br from-sage-400 via-sage-500 to-sage-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-20"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
                <span className="text-sage-100 font-light text-sm tracking-wide">MONETIZATION STATS</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-[-0.02em]">Revenue Dashboard</h2>
              <p className="text-xl text-sage-100 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
                Real-time performance metrics from our digital product ecosystem and community platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 text-pearl-800 shadow-2xl shadow-sage-800/20">
                <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-500 rounded-xl flex items-center justify-center mb-6">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-extralight text-sage-600 mb-2">$847K</div>
                <div className="text-sage-700 font-light text-sm mb-2">Monthly Revenue</div>
                <div className="text-xs text-sage-500 font-light">↑ 23% from last month</div>
              </div>

              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 text-pearl-800 shadow-2xl shadow-sage-800/20">
                <div className="w-12 h-12 bg-gradient-to-br from-blush-400 to-blush-500 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-extralight text-blush-600 mb-2">12.4%</div>
                <div className="text-blush-700 font-light text-sm mb-2">Conversion Rate</div>
                <div className="text-xs text-blush-500 font-light">↑ 3.2% improvement</div>
              </div>

              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 text-pearl-800 shadow-2xl shadow-sage-800/20">
                <div className="w-12 h-12 bg-gradient-to-br from-cream-400 to-cream-500 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-extralight text-cream-600 mb-2">$127</div>
                <div className="text-cream-700 font-light text-sm mb-2">Avg Order Value</div>
                <div className="text-xs text-cream-500 font-light">↑ $18 increase</div>
              </div>

              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 text-pearl-800 shadow-2xl shadow-sage-800/20">
                <div className="w-12 h-12 bg-gradient-to-br from-pearl-400 to-pearl-500 rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-extralight text-pearl-600 mb-2">67%</div>
                <div className="text-pearl-700 font-light text-sm mb-2">Mobile Sales</div>
                <div className="text-xs text-pearl-500 font-light">Mobile-optimized</div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-12 text-pearl-800 shadow-2xl shadow-sage-800/20">
              <h3 className="text-2xl font-light mb-8 tracking-wide text-center">Top Revenue Streams</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage-400 to-sage-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-light text-sage-600 mb-2">$423K</div>
                  <div className="text-sage-700 font-light mb-2">Digital Products</div>
                  <div className="text-sm text-sage-500 font-light">PDFs, Courses, Bundles</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blush-400 to-blush-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-light text-blush-600 mb-2">$287K</div>
                  <div className="text-blush-700 font-light mb-2">Memberships</div>
                  <div className="text-sm text-blush-500 font-light">Premium Community Access</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cream-400 to-cream-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-light text-cream-600 mb-2">$137K</div>
                  <div className="text-cream-700 font-light mb-2">Supplements</div>
                  <div className="text-sm text-cream-500 font-light">Affiliate & Private Label</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <div id="blog">
          <BlogPreview />
          
          {/* Mobile Ad */}
          <div className="lg:hidden mt-8">
            <AdPlacement position="mobile" className="max-w-7xl mx-auto px-6" />
          </div>
        </div>

        {/* Premium Supplements Section */}
        <section id="supplements" className="py-12 sm:py-20 md:py-32 bg-gradient-to-br from-pearl-50 to-sage-50/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-blush-100 to-sage-100 rounded-full px-6 py-2 mb-6">
                <span className="text-blush-600 font-light text-sm tracking-wide">SCIENCE-BACKED SUPPLEMENTS</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extralight text-pearl-800 mb-6 tracking-[-0.02em]">Wellness Solutions</h2>
              <p className="text-xl text-pearl-500 max-w-3xl mx-auto font-light leading-relaxed">
                Carefully formulated supplements with clinical research and expert endorsements
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl shadow-pearl-200/30 border border-pearl-200/40">
                  <div className="w-16 h-16 bg-gradient-to-br from-blush-300 to-blush-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blush-200/50">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-light text-pearl-800 mb-6 tracking-wide">GlutenGuard Pro Formula</h3>
                  <p className="text-pearl-600 mb-8 font-light leading-relaxed text-lg">
                    Clinical-strength digestive support specifically formulated for gluten sensitivity. 
                    Developed with leading gastroenterologists and validated through extensive research.
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    {[
                      "Reduces digestive discomfort by 87%",
                      "Supports healthy gut barrier function",
                      "Third-party tested for purity",
                      "90-day satisfaction guarantee"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-sage-400 to-sage-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-pearl-600 font-light">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 mb-10">
                    <div className="text-4xl font-light text-blush-500">$52</div>
                    <div className="text-xl text-pearl-400 line-through font-light">$74</div>
                    <div className="bg-gradient-to-r from-blush-100 to-blush-200 text-blush-600 px-4 py-2 rounded-full text-sm font-light tracking-wide">30% OFF</div>
                  </div>

                  <button 
                    onClick={() => handlePurchaseClick('GlutenGuard Pro Formula', '52')}
                    className="w-full bg-gradient-to-r from-blush-400 to-blush-500 text-white py-5 rounded-full text-lg font-light hover:from-blush-500 hover:to-blush-600 transition-all duration-300 tracking-wide shadow-xl hover:shadow-2xl"
                  >
                    Order Now - Limited Time
                  </button>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-pearl-200/20 border border-pearl-200/30">
                  <div className="flex items-start space-x-6">
                    <img src="https://images.pexels.com/photos/5538721/pexels-photo-5538721.jpeg?auto=compress&cs=tinysrgb&w=120" alt="Dr. Sarah Chen" className="w-20 h-20 rounded-2xl object-cover shadow-lg" />
                    <div>
                      <h4 className="font-light text-pearl-800 text-lg mb-1">Dr. Sarah Chen, MD</h4>
                      <p className="text-sm text-pearl-500 mb-4 font-light">Gastroenterologist, Mayo Clinic</p>
                      <p className="text-pearl-600 font-light leading-relaxed">"This formula represents a breakthrough in gluten sensitivity support. The clinical results are remarkable."</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-pearl-200/20 border border-pearl-200/30">
                  <div className="flex items-start space-x-6">
                    <img src="https://images.pexels.com/photos/6191411/pexels-photo-6191411.jpeg?auto=compress&cs=tinysrgb&w=120" alt="Maria Rodriguez" className="w-20 h-20 rounded-2xl object-cover shadow-lg" />
                    <div>
                      <h4 className="font-light text-pearl-800 text-lg mb-1">Maria Rodriguez</h4>
                      <p className="text-sm text-pearl-500 mb-3 font-light">Community Member since 2019</p>
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-cream-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-pearl-600 font-light leading-relaxed">"After years of struggling, this finally gave me my life back. I can dine with confidence again."</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blush-50 to-sage-50 border border-blush-200/50 rounded-2xl p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blush-400 to-blush-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blush-200/50">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-light text-blush-700 text-lg mb-3">Clinical Study Results</h4>
                  <p className="text-blush-600 font-light">89% of participants reported significant improvement in digestive comfort within 30 days of consistent use.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Lead Magnet Section */}
        <section id="community" className="py-12 sm:py-20 md:py-32 bg-gradient-to-br from-sage-400 via-sage-500 to-sage-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-20"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
                  <span className="text-sage-100 font-light text-sm tracking-wide">FREE DOWNLOAD</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-[-0.02em]">Get Your Free Guide</h2>
                <p className="text-xl text-sage-100 mb-12 leading-relaxed font-light">
                  Download our comprehensive 47-page PDF guide instantly. Join 50,000+ members who've transformed their gluten-free journey.
                </p>

                <form onSubmit={handleEmailSubmit} className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 mb-12 shadow-2xl shadow-sage-800/20">
                  <h3 className="text-2xl font-light text-pearl-800 mb-6 tracking-wide">Instant PDF Download</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={emailSignup}
                      onChange={(e) => setEmailSignup(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 rounded-full border border-pearl-200 focus:outline-none focus:ring-2 focus:ring-sage-400 text-pearl-800 font-light bg-white/80 backdrop-blur-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-sage-500 to-sage-600 text-white px-10 py-4 rounded-full font-light hover:from-sage-600 hover:to-sage-700 transition-all duration-300 flex items-center justify-center shadow-xl tracking-wide"
                    >
                      <Download className="mr-3 h-5 w-5" />
                      Get Free Guide
                    </button>
                  </div>
                  <p className="text-sm text-pearl-500 mt-4 font-light">Join 50,000+ members. No spam, ever. Instant download.</p>
                </form>

                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-6 w-6 text-sage-100" />
                    </div>
                    <div className="text-3xl font-extralight mb-2">95%</div>
                    <div className="text-sage-100 font-light text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-6 w-6 text-sage-100" />
                    </div>
                    <div className="text-3xl font-extralight mb-2">24/7</div>
                    <div className="text-sage-100 font-light text-sm">Community Support</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-12 text-pearl-800 shadow-2xl shadow-sage-800/20">
                <h3 className="text-2xl font-light mb-8 tracking-wide">What's Inside Your Free Guide:</h3>
                <div className="space-y-5">
                  {[
                    "Complete 30-day meal planning system",
                    "Hidden gluten sources checklist (2025 updated)",
                    "Restaurant dining confidence guide",
                    "Emergency symptom relief protocol",
                    "Community member success stories",
                    "Expert-approved supplement recommendations",
                    "Shopping guides for major retailers",
                    "Recipe conversion techniques"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-sage-400 to-sage-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-gradient-to-r from-sage-50 to-blush-50 rounded-2xl border border-sage-200/50">
                  <p className="text-sm text-sage-700 font-light mb-4">
                    <strong className="font-medium">Premium Members also get:</strong> Weekly expert webinars, exclusive product discounts, 
                    priority access to new digital products, and private community access.
                  </p>
                  <button className="bg-gradient-to-r from-sage-500 to-sage-600 text-white px-8 py-3 rounded-full text-sm font-light hover:from-sage-600 hover:to-sage-700 transition-all duration-300 tracking-wide shadow-lg">
                    Upgrade to Premium - $24/month
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof & Testimonials */}
        <section className="py-12 sm:py-20 md:py-32 bg-gradient-to-b from-white to-pearl-50/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-blush-100 to-cream-100 rounded-full px-6 py-2 mb-6">
                <span className="text-blush-600 font-light text-sm tracking-wide">MEMBER STORIES</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extralight text-pearl-800 mb-6 tracking-[-0.02em]">Success Stories</h2>
              <p className="text-xl text-pearl-500 font-light">Real results from our digital products and community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  name: "Jennifer Walsh",
                  role: "Marketing Executive",
                  image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300",
                  rating: 5,
                  text: "The Complete Gluten-Free Guide PDF changed everything for me. After downloading it 6 months ago, I've lost 15 pounds and feel incredible. Worth every penny!",
                  product: "Complete Gluten-Free Guide"
                },
                {
                  name: "Michael Torres",
                  role: "Small Business Owner",
                  image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
                  rating: 5,
                  text: "The Mastery Course was a game-changer. The video content and community access helped me build confidence I never had before. My energy levels are through the roof.",
                  product: "Gluten-Free Mastery Course"
                },
                {
                  name: "Sarah Kim",
                  role: "Registered Nurse",
                  image: "https://images.pexels.com/photos/2381221/pexels-photo-2381221.jpeg?auto=compress&cs=tinysrgb&w=300",
                  rating: 5,
                  text: "As a healthcare professional, I appreciate the science-backed approach. The Recipe Bundle has 500+ recipes that actually work. My family loves them all!",
                  product: "Ultimate Recipe Collection"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 text-center shadow-xl shadow-pearl-200/20 border border-pearl-200/30 hover:shadow-2xl hover:shadow-pearl-300/30 transition-all duration-500">
                  <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-2xl mx-auto mb-6 object-cover shadow-lg" />
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-cream-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-pearl-600 mb-6 italic font-light leading-relaxed">"{testimonial.text}"</p>
                  <div className="font-light text-pearl-800 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-pearl-500 font-light mb-2">{testimonial.role}</div>
                  <div className="text-xs text-sage-600 font-light bg-sage-50 px-3 py-1 rounded-full inline-block">
                    Purchased: {testimonial.product}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer with Social Media Integration */}
        <footer className="bg-gradient-to-br from-pearl-800 via-pearl-900 to-stone-900 text-white py-12 sm:py-16 md:py-20">
          {/* Footer Ad */}
          <AdPlacement position="footer" className="max-w-7xl mx-auto px-6 lg:px-8 mb-8" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-light tracking-wide">WeHateGluten</span>
                    <div className="text-xs text-pearl-300 font-light">Digital Products & Community</div>
                  </div>
                </div>
                <p className="text-pearl-300 mb-6 font-light leading-relaxed">
                  The world's largest gluten-free digital product platform with premium guides, courses, and community support.
                </p>
                <div className="flex items-center space-x-3 text-sage-300 mb-6">
                  <Users className="h-5 w-5" />
                  <span className="font-light">500,000+ Active Members</span>
                </div>
                
                {/* Social Media Links */}
                <div className="flex space-x-4">
                  <a href="https://facebook.com/wehategluten" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-sage-600 to-sage-700 rounded-full flex items-center justify-center hover:from-sage-500 hover:to-sage-600 transition-all duration-300 hover:scale-110">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://instagram.com/wehategluten" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-sage-600 to-sage-700 rounded-full flex items-center justify-center hover:from-sage-500 hover:to-sage-600 transition-all duration-300 hover:scale-110">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com/wehategluten" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-sage-600 to-sage-700 rounded-full flex items-center justify-center hover:from-sage-500 hover:to-sage-600 transition-all duration-300 hover:scale-110">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="https://youtube.com/wehategluten" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-sage-600 to-sage-700 rounded-full flex items-center justify-center hover:from-sage-500 hover:to-sage-600 transition-all duration-300 hover:scale-110">
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a href="https://tiktok.com/@wehategluten" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-sage-600 to-sage-700 rounded-full flex items-center justify-center hover:from-sage-500 hover:to-sage-600 transition-all duration-300 hover:scale-110">
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-light mb-6 text-lg tracking-wide">Digital Products</h4>
                <ul className="space-y-3 text-pearl-300 font-light">
                  <li><a href="#" className="hover:text-sage-300 transition-colors duration-300">PDF Guides</a></li>
                  <li><a href="#" className="hover:text-sage-300 transition-colors duration-300">Video Courses</a></li>
                  <li><a href="#" className="hover:text-sage-300 transition-colors duration-300">Recipe Collections</a></li>
                  <li><a href="#" className="hover:text-sage-300 transition-colors duration-300">Meal Plans</a></li>
                  <li><a href="#" className="hover:text-sage-300 transition-colors duration-300">Premium Bundles</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-light mb-6 text-lg tracking-wide">Community</h4>
                <ul className="space-y-3 text-pearl-300 font-light">
                  <li><a href="#" className="hover:text-sage-300 transition-colors duration-300">Blog Articles</a></li>
                  <li><a href="#" className="hover:text-sage-300 transition-colors duration-300">Success Stories</a></li>
                  <li><a href="#" className="hover:text-sage-300 transition-colors duration-300">Expert Interviews</a></li>
                  <li><a href="#" className="hover:text-sage-300 transition-colors duration-300">Member Forum</a></li>
                  <li><a href="#" className="hover:text-sage-300 transition-colors duration-300">Premium Access</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-light mb-6 text-lg tracking-wide">Contact & Support</h4>
                <div className="space-y-4 text-pearl-300 font-light">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <span>support@wehategluten.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <span>1-800-WELLNESS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5" />
                    <span>Austin, TX</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-sage-800/50 to-blush-800/50 rounded-2xl border border-sage-700/50">
                  <p className="text-sm text-pearl-300 font-light mb-3">Get instant support:</p>
                  <a href="https://wa.me/18009355637" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sage-300 hover:text-sage-200 transition-colors duration-300">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">WhatsApp Support</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-pearl-700 mt-16 pt-8 text-center text-pearl-400 font-light">
              <p>&copy; 2025 WeHateGluten.com. All rights reserved. | Privacy Policy | Terms of Service | Affiliate Disclosure</p>
              <p className="mt-2 text-sm">Digital products platform generating $2M+ annually • 50,000+ satisfied customers</p>
            </div>
          </div>
        </footer>
        </div>
      </AdSenseProvider>
    </HelmetProvider>
  );
}

export default App;