import { Download, Star, CheckCircle, Clock, Users, Award, FileText, Video, BookOpen } from 'lucide-react';

interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
  reviews: number;
  downloads: string;
  type: 'pdf' | 'course' | 'bundle';
  features: string[];
  image: string;
  badge?: string;
}

const digitalProducts: DigitalProduct[] = [
  {
    id: '1',
    title: 'Complete Gluten-Free Lifestyle Guide',
    description: 'Comprehensive 200-page PDF guide covering everything from diagnosis to thriving. Includes meal plans, shopping guides, and expert interviews.',
    price: '$47',
    originalPrice: '$97',
    discount: '52% OFF',
    rating: 4.9,
    reviews: 2847,
    downloads: '15,000+',
    type: 'pdf',
    features: [
      '200+ pages of expert content',
      '30-day meal plan with recipes',
      'Complete shopping guide',
      'Restaurant dining strategies',
      'Supplement recommendations',
      'Lifetime updates included'
    ],
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'BESTSELLER'
  },
  {
    id: '2',
    title: 'Gluten-Free Mastery Course',
    description: '8-week comprehensive video course with live Q&A sessions, private community access, and personalized meal planning tools.',
    price: '$197',
    originalPrice: '$397',
    discount: '50% OFF',
    rating: 5.0,
    reviews: 892,
    downloads: '3,200+',
    type: 'course',
    features: [
      '8 weeks of video content',
      'Live weekly Q&A sessions',
      'Private Facebook community',
      'Personalized meal planner',
      'Expert guest interviews',
      '1-year access guarantee'
    ],
    image: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'LIMITED TIME'
  },
  {
    id: '3',
    title: 'Ultimate Recipe Collection Bundle',
    description: 'Over 500 tested gluten-free recipes across 5 digital cookbooks. Includes breakfast, lunch, dinner, desserts, and holiday specials.',
    price: '$67',
    originalPrice: '$147',
    discount: '54% OFF',
    rating: 4.8,
    reviews: 1456,
    downloads: '8,500+',
    type: 'bundle',
    features: [
      '500+ tested recipes',
      '5 specialized cookbooks',
      'Nutritional information',
      'Shopping lists included',
      'Video cooking tutorials',
      'Mobile-friendly format'
    ],
    image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default function DigitalProducts() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf': return FileText;
      case 'course': return Video;
      case 'bundle': return BookOpen;
      default: return Download;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'pdf': return 'from-blush-400 to-blush-500';
      case 'course': return 'from-sage-400 to-sage-500';
      case 'bundle': return 'from-cream-400 to-cream-500';
      default: return 'from-pearl-400 to-pearl-500';
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-white to-sage-50/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blush-100 to-sage-100 rounded-full px-6 py-2 mb-6">
            <span className="text-blush-600 font-light text-sm tracking-wide">DIGITAL PRODUCTS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-pearl-800 mb-6 tracking-[-0.02em]">Instant Access Library</h2>
          <p className="text-xl text-pearl-500 max-w-3xl mx-auto font-light leading-relaxed">
            Download premium guides, courses, and resources created by leading experts. Transform your gluten-free journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {digitalProducts.map((product) => {
            const TypeIcon = getTypeIcon(product.type);
            const typeColor = getTypeColor(product.type);
            
            return (
              <div key={product.id} className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-pearl-200/30 overflow-hidden hover:shadow-3xl hover:shadow-pearl-300/40 transition-all duration-500 border border-pearl-200/40 hover:scale-105 relative">
                {product.badge && (
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-sage-400 to-sage-500 text-white px-4 py-2 rounded-full text-xs font-light z-10 tracking-wide shadow-lg">
                    {product.badge}
                  </div>
                )}
                
                <div className="aspect-[4/3] bg-gradient-to-br from-cream-50 to-blush-50/30 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br ${typeColor} rounded-xl flex items-center justify-center shadow-lg`}>
                    <TypeIcon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-cream-400 fill-current' : 'text-pearl-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-pearl-500 font-light">({product.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-pearl-500 font-light">
                      <Download className="h-4 w-4" />
                      <span>{product.downloads}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-light text-pearl-800 mb-4 leading-tight">{product.title}</h3>
                  
                  <p className="text-pearl-600 mb-6 font-light leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-sage-400 to-sage-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-pearl-600 font-light text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 mb-8">
                    <div className="text-4xl font-light text-sage-500">{product.price}</div>
                    <div className="text-xl text-pearl-400 line-through font-light">{product.originalPrice}</div>
                    <div className="bg-gradient-to-r from-blush-100 to-blush-200 text-blush-600 px-3 py-1 rounded-full text-sm font-light tracking-wide">
                      {product.discount}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-sage-400 to-sage-500 text-white py-5 rounded-full text-lg font-light hover:from-sage-500 hover:to-sage-600 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl tracking-wide">
                    <Download className="h-5 w-5" />
                    <span>Instant Download</span>
                  </button>

                  <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-pearl-500 font-light">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Instant Access</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4" />
                      <span>30-Day Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-sage-50 to-blush-50 border border-sage-200/50 rounded-3xl p-12 max-w-4xl mx-auto shadow-xl shadow-pearl-200/20">
            <div className="w-16 h-16 bg-gradient-to-br from-sage-400 to-sage-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-sage-200/50">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-light text-sage-700 mb-6 tracking-wide">Join 50,000+ Happy Customers</h3>
            <p className="text-sage-600 font-light leading-relaxed text-lg mb-8">
              Our digital products have helped thousands transform their gluten-free journey. 
              All purchases include lifetime updates and our 30-day money-back guarantee.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-extralight text-sage-500 mb-2">98%</div>
                <div className="text-sage-600 font-light text-sm">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extralight text-sage-500 mb-2">50K+</div>
                <div className="text-sage-600 font-light text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extralight text-sage-500 mb-2">4.9★</div>
                <div className="text-sage-600 font-light text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}