import { NewsItem, NewsResponse } from '@/app/types/news';
import Image from 'next/image';
import Link from 'next/link';

async function getNews(): Promise<NewsResponse> {
  try {
    // Use the API URL from environment variables with a fallback
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    
    // Check if API URL is available
    if (!apiUrl) {
      console.warn('NEXT_PUBLIC_API_URL is not set');
    }
    
    const res = await fetch(`${apiUrl}/api/news`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch news: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    // Return a default structure with empty items to prevent UI errors
    return {
      items: [],
      total: 0,
      page: 1,
      totalPages: 0,
      limit: 10
    };
  }
}

export default async function NewsPage() {
  // Fetch news data
  const { items: newsItems = [] } = await getNews();

  return (
    <div className="bg-[#F5F5DC] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#FF6B35]/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#8B4513] mb-4">
            Pokemon Card News & Updates
          </h1>
          <p className="text-lg text-[#8B4513]/80">
            Stay informed with the latest news, market trends, and expert analysis in the Pokemon card collecting world.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {newsItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item: NewsItem) => (
                <article key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative w-full h-48 bg-gray-200">
                    {item.image ? (
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#4A90E2]/20 flex items-center justify-center">
                        <span className="text-[#8B4513]/50">Image Unavailable</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-[#FF6B35]">{item.category}</span>
                      <span className="text-sm text-[#8B4513]/60">{item.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-[#8B4513] mb-3">
                      {item.title}
                    </h2>
                    <p className="text-[#8B4513]/70 mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link 
                        href={`/news/${item.id}`}
                        className="inline-flex items-center text-[#FF6B35] hover:text-[#FF6B35]/80"
                      >
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <span className="text-sm text-[#8B4513]/60">{item.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">No News Available</h2>
              <p className="text-[#8B4513]/70">Check back later for the latest Pokemon TCG news and updates.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#F5F5DC] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-[#8B4513] mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-[#8B4513]/70 mb-6 max-w-2xl mx-auto">
              Subscribe to receive the latest Pokemon card market news, analysis, and exclusive offers directly in your inbox.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-[#8B4513]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                required
              />
              <button
                type="submit"
                className="bg-[#FF6B35] text-white px-6 py-2 rounded-md hover:bg-[#FF6B35]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}