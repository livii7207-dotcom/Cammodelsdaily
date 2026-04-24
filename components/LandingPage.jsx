import React, { useState } from 'react';

export default function LandingPage() {
  const [checkoutLoading, setCheckoutLoading] = useState(null);

  const handleCheckout = async (planKey) => {
    setCheckoutLoading(planKey);
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planKey }),
      });
      const { url } = await res.json();
      window.location.href = url;
    } catch {
      setCheckoutLoading(null);
    }
  };

  const affiliates = [
    {
      name: 'Chaturbate',
      commission: 'Up to $50/signup',
      desc: "World's largest cam site. Earn per model or viewer you refer.",
      url: 'https://chaturbate.com/affiliates/',
    },
    {
      name: 'Streamate',
      commission: '25% revenue share',
      desc: 'Premium platform with high-value viewers and recurring commissions.',
      url: 'https://www.streamate.com/model-program/',
    },
    {
      name: 'Stripchat',
      commission: '$25–$100/model',
      desc: 'Fast-growing platform with global reach and daily model payouts.',
      url: 'https://stripchat.com/affiliates',
    },
    {
      name: 'LiveJasmin',
      commission: 'Up to 30% lifetime',
      desc: 'High-end cam network. Top commissions for premium model referrals.',
      url: 'https://www.livejasmin.com/en/affiliates',
    },
  ];

  const plans = [
    {
      key: null,
      name: 'Starter',
      price: 'Free',
      features: ['Basic profile', 'Standard payouts', 'Community access'],
      cta: 'Get Started',
      href: '#models',
    },
    {
      key: 'pro',
      name: 'Pro',
      price: '$9.99/mo',
      features: ['Featured profile', 'Daily payouts', 'Priority support', 'Analytics dashboard'],
      cta: 'Go Pro',
      highlight: true,
    },
    {
      key: 'elite',
      name: 'Elite',
      price: '$29.99/mo',
      features: ['Top placement', 'Instant payouts', 'Dedicated manager', '75% revenue share', 'Custom branding'],
      cta: 'Go Elite',
    },
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <header className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center border-b border-gray-800">
        <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">CamModelsDaily.com</h1>
        <nav className="flex space-x-4 text-sm sm:text-base">
          <a href="#models" className="hover:text-pink-400">For Models</a>
          <a href="#affiliates" className="hover:text-pink-400">Affiliates</a>
          <a href="#pricing" className="hover:text-pink-400">Pricing</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-16 sm:py-24 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6">
          Get Paid Daily. Stream Smarter.{' '}
          <span className="text-pink-400">CamModelsDaily.com</span>
        </h2>
        <p className="text-base sm:text-lg max-w-xl mx-auto mb-8 text-gray-300">
          Join the #1 daily-pay cam network built for independent creators.
          Keep more of your earnings, withdraw when you want, and stay in control.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#models" className="px-6 py-3 rounded-2xl bg-pink-500 hover:bg-pink-600 shadow-lg font-medium">
            Apply as a Model
          </a>
          <a href="#affiliates" className="px-6 py-3 rounded-2xl bg-gray-800 hover:bg-gray-700 shadow-lg font-medium">
            Become an Affiliate
          </a>
        </div>
      </section>

      {/* Ad slot — top banner */}
      <div className="max-w-4xl mx-auto px-4 mb-10">
        <div className="bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center h-24 text-gray-500 text-xs">
          {/* Replace with your Google AdSense <ins> tag or TrafficJunky/JuicyAds embed code */}
          Advertisement
        </div>
      </div>

      {/* Stats */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Active Models', value: '10,000+' },
            { label: 'Daily Payouts', value: '$500K+' },
            { label: 'Avg Earnings/Mo', value: '$3,200' },
            { label: 'Affiliate Commission', value: '30%' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-gray-800 rounded-2xl p-6">
              <div className="text-2xl font-bold text-pink-400">{value}</div>
              <div className="text-sm text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="models" className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">Why Models Choose Us</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Daily Payouts', desc: 'Withdraw every day, no minimums, no waiting.' },
              { title: 'Keep 70%+', desc: 'Industry-leading revenue share on every stream.' },
              { title: 'Top Platforms', desc: 'We partner with Chaturbate, Streamate & more.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-800 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-pink-400 mb-2">{title}</h4>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Stripe */}
      <section id="pricing" className="py-16 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2">Model Membership Plans</h3>
          <p className="text-center text-gray-400 mb-10">Unlock premium features and maximize your income</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {plans.map(({ key, name, price, features, cta, href, highlight }) => (
              <div
                key={name}
                className={`rounded-2xl p-6 flex flex-col ${
                  highlight ? 'bg-pink-600 ring-2 ring-pink-400' : 'bg-gray-800'
                }`}
              >
                <h4 className="text-xl font-bold mb-1">{name}</h4>
                <div className="text-2xl font-extrabold mb-4">{price}</div>
                <ul className="text-sm text-gray-200 space-y-2 flex-grow mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                {key ? (
                  <button
                    onClick={() => handleCheckout(key)}
                    disabled={checkoutLoading === key}
                    className="w-full py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 disabled:opacity-50"
                  >
                    {checkoutLoading === key ? 'Loading…' : cta}
                  </button>
                ) : (
                  <a
                    href={href}
                    className="w-full py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 text-center block"
                  >
                    {cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Partners */}
      <section id="affiliates" className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2">Affiliate Partners</h3>
          <p className="text-center text-gray-400 mb-10">
            Earn commissions by referring models and viewers to top platforms
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {affiliates.map(({ name, commission, desc, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors block"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold">{name}</h4>
                  <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded-full whitespace-nowrap">
                    {commission}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ad slot — bottom banner */}
      <div className="max-w-4xl mx-auto px-4 my-10">
        <div className="bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center h-24 text-gray-500 text-xs">
          {/* Replace with your ad code */}
          Advertisement
        </div>
      </div>

      {/* Footer */}
      <footer className="p-4 sm:p-6 text-center text-gray-400 border-t border-gray-800 text-sm">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} CamModelsDaily.com. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-pink-400">Privacy</a>
            <a href="/terms" className="hover:text-pink-400">Terms</a>
            <a href="mailto:support@cammodelsdaily.com" className="hover:text-pink-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
