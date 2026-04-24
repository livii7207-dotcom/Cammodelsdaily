import React, { useState } from 'react';
import AdSlot from './AdSlot';

export default function LandingPage() {
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

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <header className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center border-b border-gray-800">
        <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">CamModelsDaily.com</h1>
        <nav className="flex space-x-4 text-sm sm:text-base">
          <a href="#how-it-works" className="hover:text-pink-400">How It Works</a>
          <a href="#affiliates" className="hover:text-pink-400">Affiliates</a>
          <a href="#apply" className="hover:text-pink-400">Apply</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-16 sm:py-24 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6">
          Keep <span className="text-pink-400">85%</span> of Everything You Earn.
        </h2>
        <p className="text-base sm:text-lg max-w-xl mx-auto mb-8 text-gray-300">
          No flat fees. No hidden charges. We take just 15% — you keep the rest,
          paid out daily, directly to you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#apply"
            className="px-6 py-3 rounded-2xl bg-pink-500 hover:bg-pink-600 shadow-lg font-medium"
          >
            Apply as a Model
          </a>
          <a
            href="#affiliates"
            className="px-6 py-3 rounded-2xl bg-gray-800 hover:bg-gray-700 shadow-lg font-medium"
          >
            Become an Affiliate
          </a>
        </div>
      </section>

      {/* Ad slot — top leaderboard (728x90) */}
      <div className="max-w-4xl mx-auto px-4 mb-10">
        <AdSlot
          tjZoneId={process.env.NEXT_PUBLIC_TJ_ZONE_BANNER}
          exoZoneId={process.env.NEXT_PUBLIC_EXO_ZONE_BANNER}
          height={90}
        />
      </div>

      {/* Stats */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Models Keep', value: '85%' },
            { label: 'Platform Fee', value: '15%' },
            { label: 'Daily Payouts', value: '$500K+' },
            { label: 'Avg Earnings/Mo', value: '$3,200' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-gray-800 rounded-2xl p-6">
              <div className="text-2xl font-bold text-pink-400">{value}</div>
              <div className="text-sm text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works / Revenue Split */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2">How You Earn</h3>
          <p className="text-center text-gray-400 mb-10">Simple, transparent, daily.</p>

          {/* Visual split */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-10">
            <div className="flex rounded-xl overflow-hidden h-12 mb-4">
              <div
                className="bg-pink-500 flex items-center justify-center text-sm font-bold"
                style={{ width: '85%' }}
              >
                85% — Yours
              </div>
              <div
                className="bg-gray-600 flex items-center justify-center text-sm font-bold"
                style={{ width: '15%' }}
              >
                15%
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center">
              For every $100 earned, you receive <span className="text-white font-semibold">$85</span> — paid daily.
              We keep <span className="text-white font-semibold">$15</span> to run the platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'No Setup Fees', desc: 'Free to join. No upfront costs, ever.' },
              { title: 'Daily Payouts', desc: 'Withdraw your 85% every single day, no minimums.' },
              { title: 'You Set Your Rates', desc: 'Charge what you want — we just take our 15%.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-800 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-pink-400 mb-2">{title}</h4>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Partners */}
      <section id="affiliates" className="py-16 px-4 sm:px-6 bg-gray-900">
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

      {/* Ad slot — mid page rectangle (300x250) */}
      <div className="max-w-4xl mx-auto px-4 my-10 flex justify-center">
        <AdSlot
          tjZoneId={process.env.NEXT_PUBLIC_TJ_ZONE_RECT}
          exoZoneId={process.env.NEXT_PUBLIC_EXO_ZONE_RECT}
          height={250}
        />
      </div>

      {/* Apply CTA */}
      <section id="apply" className="py-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Keep 85%?</h3>
          <p className="text-gray-400 mb-8">
            Apply now — no fees, no lock-in. Start earning daily from day one.
          </p>
          <a
            href="mailto:apply@cammodelsdaily.com"
            className="inline-block px-8 py-4 rounded-2xl bg-pink-500 hover:bg-pink-600 font-semibold text-lg shadow-lg"
          >
            Apply as a Model
          </a>
        </div>
      </section>

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
