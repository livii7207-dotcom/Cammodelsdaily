import { useState } from 'react';
import Logo from '../components/Logo';
import LogoPinup from '../components/LogoPinup';

const SECTIONS = [
  { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
  { id: 'choosing-a-platform', title: 'Choosing a Platform', icon: '💎' },
  { id: 'your-first-week', title: 'Your First Week', icon: '📈' },
  { id: 'getting-paid', title: 'Getting Paid', icon: '💰' },
  { id: 'privacy-safety', title: 'Privacy & Safety', icon: '🔒' },
  { id: 'growing-your-audience', title: 'Growing Your Audience', icon: '🔥' }
];

const PLATFORM_LINKS = {
  Chaturbate: 'https://chaturbate.com/affiliates/',
  OnlyFans: 'https://onlyfans.com/',
  Stripchat: 'https://stripchat.com/affiliates',
  Cam4: 'https://cam4.com/',
  ManyVids: 'https://manyvids.com/',
  IWantClips: 'https://iwantclips.com/',
  LoyalFans: 'https://loyalfans.com/',
  SkyPrivate: 'https://skyprivate.com/',
};

function PlatformLink({ name }) {
  return (
    <a href={PLATFORM_LINKS[name]} target="_blank" rel="noopener noreferrer"
      className="text-pink-400 hover:text-pink-300 font-semibold underline underline-offset-2">
      {name}
    </a>
  );
}

export default function Guide() {
  const [activeTab, setActiveTab] = useState('getting-started');

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#07080f', color: '#e5e7eb' }}>
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-16">
          <a href="/" className="neon-text"><Logo size="md" /></a>
          <a href="/register"
            className="px-5 py-2 rounded-full text-white text-sm font-semibold shimmer-btn">
            Apply Now
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation - Sticky */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24 space-y-2">
              <div className="mb-8 hidden lg:block">
                <LogoPinup size="sm" showText={true} />
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-3">Table of Contents</p>
              {SECTIONS.map(s => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveTab(s.id);
                    document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                    activeTab === s.id 
                    ? 'bg-pink-500/10 text-pink-400 border border-pink-500/30 neon-border' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span>{s.icon}</span>
                  {s.title}
                </button>
              ))}
              
              <div className="mt-10 p-6 rounded-2xl rope-light glass">
                <p className="text-sm font-bold text-white mb-2">Need help?</p>
                <p className="text-xs text-gray-400 mb-4">Our team is available 24/7 to help you get started.</p>
                <a href="/register" className="block text-center py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold transition-colors">
                  Contact Support
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            {/* Hero */}
            <div className="mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-500/10 text-pink-500 text-[10px] font-bold uppercase tracking-widest mb-4 border border-pink-500/20">
                Beginner's Handbook 2026
              </span>
              <h1 className="text-4xl sm:text-6xl font-display font-extrabold mb-6 text-white leading-tight">
                How to Become a <span className="neon-text">Cam Model</span> in 2026
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
                The ultimate blueprint to starting your career. We cover equipment, platforms, earnings, and 
                how to maintain 100% privacy while earning top dollar.
              </p>
            </div>

            {/* Section 1 */}
            <section id="getting-started" className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center text-2xl neon-border">🚀</div>
                <h2 className="text-3xl font-display font-extrabold text-white">Getting Started</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="white"><path d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45z"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">The Essentials</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    You don't need a studio. Most top earners started with just a smartphone and good lighting.
                  </p>
                  <ul className="space-y-4">
                    {[
                      { item: 'Camera', desc: 'iPhone 12+ or 1080p Webcam' },
                      { item: 'Lighting', desc: 'Ring light or natural window light' },
                      { item: 'Internet', desc: '5Mbps+ upload (fast.com)' },
                      { item: 'Space', desc: 'Clean, private background' }
                    ].map(t => (
                      <li key={t.item} className="flex items-center gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                        <span className="text-white font-semibold">{t.item}:</span>
                        <span className="text-gray-400">{t.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass p-8 rounded-3xl border border-white/5 neon-border">
                  <h3 className="text-xl font-bold text-white mb-4">Identity & Age</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Every platform requires legal verification. This is strictly for age compliance and is never shared.
                  </p>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-4">
                    <p className="text-xs font-bold text-white mb-1">REQUIRED DOCUMENTS:</p>
                    <p className="text-xs text-gray-400">Valid Passport, Driver's License, or National ID.</p>
                  </div>
                  <p className="text-xs text-gray-500 italic">
                    * You must be 18+ years old. No exceptions.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="choosing-a-platform" className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-2xl neon-border" style={{ borderColor: '#a855f7' }}>💎</div>
                <h2 className="text-3xl font-display font-extrabold text-white">Choosing Your Platform</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    name: 'Chaturbate',
                    tag: 'Most Traffic',
                    desc: 'The giant of the industry. Best for those who love live interaction and tip-based earning.',
                    pros: ['Instant audience', 'Daily payouts', 'High earning potential'],
                    color: '#f47321'
                  },
                  {
                    name: 'OnlyFans',
                    tag: 'Subscription Based',
                    desc: 'Perfect for building a loyal fan base with recurring monthly revenue and PPV content.',
                    pros: ['Stable income', 'Full content control', 'Private community'],
                    color: '#00aff0'
                  },
                  {
                    name: 'Stripchat',
                    tag: 'Global Reach',
                    desc: 'Excellent tech and a massive international audience. Great for diverse performers.',
                    pros: ['Mobile friendly', 'VR support', 'Great bonus system'],
                    color: '#00b4a0'
                  }
                ].map(p => (
                  <div key={p.name} className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: p.color }}></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white"><PlatformLink name={p.name} /></h3>
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-white/10 text-gray-300">{p.tag}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
                        <div className="flex flex-wrap gap-4">
                          {p.pros.map(pro => (
                            <span key={pro} className="text-[11px] text-green-400 flex items-center gap-1.5">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                              {pro}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a href="/register" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-bold transition-all text-center">
                        Apply for {p.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 - Payouts */}
            <section id="getting-paid" className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-2xl neon-border" style={{ borderColor: '#22c55e' }}>💰</div>
                <h2 className="text-3xl font-display font-extrabold text-white">Getting Paid</h2>
              </div>
              
              <div className="rope-light rounded-3xl p-1">
                <div className="glass p-8 rounded-[calc(1.5rem-1px)]">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-4">
                      <p className="text-3xl font-bold text-white mb-1">Daily</p>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">Frequency</p>
                      <p className="mt-4 text-sm text-gray-400">Most of our partners offer daily payouts so you never wait for your money.</p>
                    </div>
                    <div className="text-center p-4 border-y md:border-y-0 md:border-x border-white/10">
                      <p className="text-3xl font-bold text-white mb-1">100%</p>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">Your Share</p>
                      <p className="mt-4 text-sm text-gray-400">XCamModels is free. You keep every cent the platform pays you.</p>
                    </div>
                    <div className="text-center p-4">
                      <p className="text-3xl font-bold text-white mb-1">Global</p>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">Methods</p>
                      <p className="mt-4 text-sm text-gray-400">Paxum, Crypto, Wire, or Check. Choose what works for you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-white/10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
              <LogoPinup size="lg" />
              <h2 className="text-4xl font-display font-extrabold text-white mt-8 mb-4">Ready to start earning?</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Join 5,000+ models who have launched their careers with XCamModels. 
                Free setup, daily pay, and 24/7 support.
              </p>
              <a href="/register" className="inline-block px-10 py-5 rounded-full text-white text-xl font-bold shimmer-btn hover:scale-105 transition-transform">
                Apply Now — It's Free
              </a>
            </div>

          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo size="sm" />
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/18usc2257" className="hover:text-white transition-colors">18 U.S.C. 2257</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 XCamModels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
