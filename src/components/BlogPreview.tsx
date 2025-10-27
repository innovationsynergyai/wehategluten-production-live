import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Complete Guide to Gluten-Free Meal Prep for Busy Professionals',
    excerpt: 'Master the art of gluten-free meal preparation with our comprehensive guide featuring 50+ recipes, shopping lists, and time-saving strategies.',
    author: 'Dr. Sarah Mitchell',
    date: '2025-01-15',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Meal Planning',
    slug: 'complete-guide-gluten-free-meal-prep'
  },
  {
    id: '2',
    title: 'Hidden Gluten Sources: 47 Surprising Foods to Avoid in 2025',
    excerpt: 'Discover the latest hidden gluten sources that even experienced gluten-free individuals miss. Updated with 2025 food industry changes.',
    author: 'Maria Rodriguez, RD',
    date: '2025-01-12',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Education',
    slug: 'hidden-gluten-sources-2025'
  },
  {
    id: '3',
    title: 'Restaurant Dining Confidence: Your Complete Gluten-Free Guide',
    excerpt: 'Navigate restaurants with confidence using our proven strategies, conversation scripts, and restaurant database of 10,000+ verified locations.',
    author: 'Chef Michael Torres',
    date: '2025-01-10',
    readTime: '15 min read',
    image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Dining Out',
    slug: 'restaurant-dining-confidence-guide'
  }
];

export default function BlogPreview() {
  return (
    <section className="py-32 bg-gradient-to-br from-cream-50/30 to-pearl-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-sage-100 to-blush-100 rounded-full px-6 py-2 mb-6">
            <span className="text-sage-600 font-light text-sm tracking-wide">EXPERT INSIGHTS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-pearl-800 mb-6 tracking-[-0.02em]">Latest from Our Blog</h2>
          <p className="text-xl text-pearl-500 max-w-3xl mx-auto font-light leading-relaxed">
            Evidence-based articles, expert interviews, and practical guides to elevate your gluten-free lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl shadow-pearl-200/20 border border-pearl-200/30 hover:shadow-2xl hover:shadow-pearl-300/30 transition-all duration-500 hover:scale-105">
              <div className="aspect-[4/3] bg-gradient-to-br from-cream-50 to-blush-50/30 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-sage-400 to-sage-500 text-white px-4 py-2 rounded-full text-sm font-light tracking-wide">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-pearl-500 mb-4 font-light">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-pearl-800 mb-4 leading-tight group-hover:text-sage-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-pearl-600 mb-6 font-light leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="group/btn flex items-center space-x-2 text-sage-600 hover:text-sage-700 font-light transition-colors duration-300">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-sage-400 to-sage-500 text-white px-12 py-5 rounded-full text-lg font-light hover:from-sage-500 hover:to-sage-600 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-sage-200/40 tracking-wide">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}