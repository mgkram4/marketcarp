import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#F5F5DC] mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#8B4513] mb-6">
                The Ultimate Platform for Pokémon Card Enthusiasts
              </h1>
              <p className="text-lg text-[#8B4513]/80 mb-8">
                Buy graded cards, analyze market trends, and make informed investment decisions 
                with our comprehensive tools and marketplace.
              </p>
              <div className="flex flex-col gap-4">
                <Link href="/shop" className="bg-[#FF6B35] text-white py-3 px-6 rounded-md text-center no-underline">
                  Browse Our Shop
                </Link>
                <Link href="/pricing" className="border border-[#FF6B35] text-[#FF6B35] py-3 px-6 rounded-md text-center no-underline">
                  Explore SaaS Platform
                </Link>
              </div>
            </div>
            <div className="relative h-80">
              <div className="absolute top-0 right-0 w-full h-full bg-[#FF6B35]/10 rounded-lg transform rotate-3"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#4A90E2]/20 rounded-lg transform -rotate-3"></div>
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="text-center p-6 bg-white rounded-lg shadow-md transform -rotate-1">
                  <p className="text-xl font-bold text-[#8B4513]">Coming Soon</p>
                  <p className="text-[#8B4513]/70">Premium Pokémon Card Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#8B4513] text-center mb-16">
            Everything You Need for Pokémon Card Business
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-[#FF6B35] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">
                E-commerce Store
              </h3>
              <p className="text-[#8B4513]/70">
                Browse and purchase professionally graded Pokémon cards and rare sealed products 
                with authentication verification.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-[#4A90E2] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">
                Market Analysis Tools
              </h3>
              <p className="text-[#8B4513]/70">
                Make data-driven decisions with our comprehensive market analysis tools, price 
                tracking, and opportunity finder.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-[#8B4513] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B4513] mb-3">
                News & Content
              </h3>
              <p className="text-[#8B4513]/70">
                Stay informed with the latest news, market trends, and expert analysis of the 
                Pokémon TCG collector market.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscription Tiers */}
      <section className="py-16 bg-[#4A90E2]/10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#8B4513] text-center mb-4">
            Subscription Plans
          </h2>
          <p className="text-[#8B4513]/70 text-center max-w-2xl mx-auto mb-16">
            Choose the plan that best fits your Pokémon card business needs.
            From casual collectors to professional dealers, we have you covered.
          </p>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Free Tier */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Free</h3>
                <p className="text-3xl font-bold text-[#8B4513] mb-4">
                  $0<span className="text-sm font-normal">/month</span>
                </p>
                <ul className="mb-6">
                  <li className="flex items-start mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8B4513]/70">Basic market trends</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8B4513]/70">Limited searches</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8B4513]/70">News access</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 border-t border-gray-100">
                <Link href="/auth/register" className="block text-center py-2 px-4 rounded-md border border-[#FF6B35] text-[#FF6B35] no-underline">
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Basic Tier */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Basic</h3>
                <p className="text-3xl font-bold text-[#8B4513] mb-4">
                  $19.99<span className="text-sm font-normal">/month</span>
                </p>
                <ul className="mb-6">
                  <li className="flex items-start mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8B4513]/70">Enhanced market analysis</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8B4513]/70">Daily alerts</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8B4513]/70">ROI calculator</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 border-t border-gray-100">
                <Link href="/pricing/basic" className="block text-center py-2 px-4 rounded-md bg-[#FF6B35] text-white no-underline">
                  Subscribe
                </Link>
              </div>
            </div>
            
            {/* Pro Tier */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-[#FF6B35] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Pro</h3>
                <p className="text-3xl font-bold text-[#8B4513] mb-4">
                  $49.99<span className="text-sm font-normal">/month</span>
                </p>
                <ul className="mb-6">
                  <li className="flex items-start mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8B4513]/70">Advanced opportunity finder</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8B4513]/70">Real-time scanning</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8B4513]/70">Unlimited alerts</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 border-t border-gray-100">
                <Link href="/pricing/pro" className="block text-center py-2 px-4 rounded-md bg-[#FF6B35] text-white no-underline">
                  Subscribe
                </Link>
              </div>
            </div>
            
            {/* Enterprise Tier */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-[#8B4513] mb-4">
                  $99.99<span className="text-sm font-normal">/month</span>
                </p>
                <ul className="mb-6">
                  <li className="flex items-start mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8B4513]/70">Full API access</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8B4513]/70">White-label options</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8B4513]/70">Data exports</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 border-t border-gray-100">
                <Link href="/pricing/enterprise" className="block text-center py-2 px-4 rounded-md bg-[#8B4513] text-white no-underline">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#FF6B35]/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#8B4513] mb-6">
                Ready to Take Your Pokémon Card Business to the Next Level?
              </h2>
              <p className="text-[#8B4513]/70 mb-8">
                Join thousands of collectors and dealers who use MarketCarp to find opportunities,
                track their inventory, and make data-driven decisions.
              </p>
              <Link href="/auth/register" className="inline-block bg-[#FF6B35] text-white py-3 px-8 rounded-md no-underline text-lg">
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}