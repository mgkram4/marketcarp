import Link from 'next/link';

// Check mark component for feature list
const CheckMark = () => (
  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

// Feature item component
const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-start mb-2">
    <CheckMark />
    <span className="text-marketcarp-brown/80">{text}</span>
  </li>
);

// Price tier component
const PriceTier = ({
  name,
  price,
  popular = false,
  features,
  buttonText,
  buttonLink,
  buttonStyle,
}: {
  name: string;
  price: { monthly: string };
  popular?: boolean;
  features: string[];
  buttonText: string;
  buttonLink: string;
  buttonStyle: string;
}) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${popular ? 'border-2 border-marketcarp-orange' : ''}`}>
    {popular && (
      <div className="bg-marketcarp-orange text-white text-center py-2 text-sm font-bold">
        MOST POPULAR
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold text-marketcarp-brown mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-marketcarp-brown">{price.monthly}</span>
        <span className="text-marketcarp-brown/70 ml-1">/month</span>
      </div>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </ul>
      <Link
        href={buttonLink}
        className={`block w-full text-center py-3 px-6 rounded-md transition-colors ${buttonStyle}`}
      >
        {buttonText}
      </Link>
    </div>
  </div>
);

export default function Pricing() {
  return (
    <div className="bg-marketcarp-beige">
      {/* Header */}
      <div className="container-custom py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-marketcarp-brown mb-6">
          Pricing Plans for Every Collector
        </h1>
        <p className="text-xl text-marketcarp-brown/80 max-w-3xl mx-auto mb-8">
          Choose the plan that best fits your Pokémon card business needs. 
          From casual collectors to professional dealers, we have you covered.
        </p>
      </div>

      {/* Pricing Table */}
      <div className="container-custom pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Free Tier */}
          <PriceTier
            name="Free"
            price={{ monthly: "$0" }}
            features={[
              "Basic market trends",
              "Limited searches (10/day)",
              "News access",
              "Community forum access",
              "Card identification help"
            ]}
            buttonText="Sign Up Free"
            buttonLink="/auth/register"
            buttonStyle="border border-marketcarp-orange text-marketcarp-orange hover:bg-marketcarp-orange/5"
          />

          {/* Basic Tier */}
          <PriceTier
            name="Basic"
            price={{ monthly: "$19.99" }}
            features={[
              "Enhanced market analysis",
              "Daily price alerts",
              "ROI calculator",
              "Population report access",
              "Unlimited searches",
              "Card price history (6 months)",
              "Grade value estimator"
            ]}
            buttonText="Subscribe"
            buttonLink="/pricing/basic"
            buttonStyle="bg-marketcarp-blue text-marketcarp-brown hover:bg-marketcarp-blue/90"
          />

          {/* Pro Tier */}
          <PriceTier
            name="Pro"
            price={{ monthly: "$49.99" }}
            popular={true}
            features={[
              "Advanced opportunity finder",
              "Real-time market scanning",
              "Unlimited price alerts",
              "Card price history (full)",
              "Market arbitrage calculator",
              "Grading submission tracker",
              "Deal notification system",
              "Inventory value tracker",
              "Priority customer support"
            ]}
            buttonText="Subscribe"
            buttonLink="/pricing/pro"
            buttonStyle="bg-marketcarp-orange text-white hover:bg-marketcarp-orange/90"
          />

          {/* Enterprise Tier */}
          <PriceTier
            name="Enterprise"
            price={{ monthly: "$99.99" }}
            features={[
              "Full API access",
              "White-label options",
              "Custom data exports",
              "Bulk card analysis tools",
              "Multi-user accounts",
              "Advanced analytics dashboard",
              "Dedicated account manager",
              "Market prediction tools",
              "Custom integrations",
              "Early access to new features"
            ]}
            buttonText="Contact Sales"
            buttonLink="/pricing/enterprise"
            buttonStyle="bg-marketcarp-brown text-white hover:bg-marketcarp-brown/90"
          />
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="bg-white py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-marketcarp-brown text-center mb-12">
            Compare Features
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-marketcarp-brown bg-marketcarp-beige/50">
                    Feature
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-marketcarp-brown bg-marketcarp-beige/50">
                    Free
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-marketcarp-brown bg-marketcarp-beige/50">
                    Basic
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-marketcarp-brown bg-marketcarp-beige/50">
                    Pro
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-marketcarp-brown bg-marketcarp-beige/50">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: "Market Trends", free: true, basic: true, pro: true, enterprise: true },
                  { feature: "Card Search", free: "Limited", basic: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Price Alerts", free: false, basic: "5 active", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Historical Data", free: "7 days", basic: "6 months", pro: "Full history", enterprise: "Full history" },
                  { feature: "Opportunity Finder", free: false, basic: "Basic", pro: "Advanced", enterprise: "Advanced + Custom" },
                  { feature: "API Access", free: false, basic: false, pro: "Limited", enterprise: "Full" },
                  { feature: "Inventory Tools", free: false, basic: "Basic", pro: "Advanced", enterprise: "Advanced + Multi-user" },
                  { feature: "Custom Reports", free: false, basic: false, pro: "Basic", enterprise: "Advanced" },
                  { feature: "Support", free: "Community", basic: "Email", pro: "Priority Email", enterprise: "Dedicated Manager" },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 text-sm text-marketcarp-brown font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-marketcarp-brown">
                      {typeof row.free === 'boolean' ? (
                        row.free ? <CheckMark /> : "—"
                      ) : row.free}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-marketcarp-brown">
                      {typeof row.basic === 'boolean' ? (
                        row.basic ? <CheckMark /> : "—"
                      ) : row.basic}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-marketcarp-brown">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? <CheckMark /> : "—"
                      ) : row.pro}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-marketcarp-brown">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? <CheckMark /> : "—"
                      ) : row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-custom py-16">
        <h2 className="text-3xl font-bold text-marketcarp-brown text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-marketcarp-brown mb-3">
              Can I upgrade or downgrade my plan?
            </h3>
            <p className="text-marketcarp-brown/80">
              Yes, you can upgrade or downgrade your subscription at any time. Changes will be applied at the start of your next billing cycle.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-marketcarp-brown mb-3">
              Is there a contract or commitment?
            </h3>
            <p className="text-marketcarp-brown/80">
              No, all subscriptions are month-to-month with no long-term commitment. You can cancel at any time.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-marketcarp-brown mb-3">
              What payment methods do you accept?
            </h3>
            <p className="text-marketcarp-brown/80">
              We accept all major credit cards including Visa, Mastercard, American Express, and Discover. 
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-marketcarp-brown mb-3">
              How accurate is your market data?
            </h3>
            <p className="text-marketcarp-brown/80">
              Our data is collected from multiple trusted sources including eBay, TCGPlayer, and PSA. We update our database in real-time to ensure the most accurate information.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-marketcarp-orange/10 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-marketcarp-brown mb-6">
            Ready to Improve Your Pokémon Card Business?
          </h2>
          <p className="text-xl text-marketcarp-brown/80 max-w-3xl mx-auto mb-8">
            Join thousands of collectors and dealers making data-driven decisions with MarketCarp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/auth/register"
              className="btn-primary py-3 px-8 text-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/contact"
              className="btn-secondary py-3 px-8 text-lg"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 