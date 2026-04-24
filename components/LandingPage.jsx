import { useState } from 'react';
import AdSlot from './AdSlot';

// ─── Replace these src paths with your AI-generated model images ──────────────
// Add images to /public/models/ and update the src values below
const MODELS = [
  { name: 'Aria', tag: 'Top Earner', earnings: '$4,200 this week', src: '/models/model1.jpg', gradient: 'from-pink-900 to-purple-900' },
  { name: 'Luna', tag: 'New & Hot', earnings: '$2,800 this week', src: '/models/model2.jpg', gradient: 'from-rose-900 to-pink-900' },
  { name: 'Nova', tag: 'Fan Favourite', earnings: '$3,600 this week', src: '/models/model3.jpg', gradient: 'from-purple-900 to-indigo-900' },
  { name: 'Sage', tag: 'Rising Star', earnings: '$1,950 this week', src: '/models/model4.jpg', gradient: 'from-fuchsia-900 to-pink-900' },
];

const PLATFORMS = [
  { name: 'StripChat', category: 'Live Stream', desc: 'Tips, privates & group shows' },
  { name: 'Chaturbate', category: 'Live Stream', desc: "World's #1 cam platform" },
  { name: 'Cam4', category: 'Live Stream', desc: 'Live shows + analytics' },
  { name: 'IWantClips', category: 'Content', desc: 'Custom clips & photo sets' },
  { name: 'ManyVids', category: 'Content', desc: 'Sell exclusive content' },
  { name: 'LoyalFans', category: 'Content', desc: 'Subscriptions & fan sales' },
  { name: 'SkyPrivate', category: 'Independent', desc: '1-on-1 video calls, your rate' },
  { name: 'CamModelDirectory', category: 'Independent', desc: 'Higher % than competitors' },
];

const STEPS = [
  { n: '01', title: 'Register', desc: 'Fill out our quick online form — takes under 5 minutes.' },
  { n: '02', title: 'Set Up Profile', desc: 'Add your payment info and ID verification.' },
  { n: '03', title: 'Pick a Platform', desc: 'Choose from 8 partner sites that fit your style.' },
  { n: '04', title: 'Earn Daily', desc: 'Go live and get paid every single day.' },
];

const FAQ_ITEMS = [
  { q: 'Do I need any experience?', a: 'None at all. We guide you through everything from setup to your first payout with real human support.' },
  { q: 'How does daily pay work?', a: 'Your earnings are deposited automatically every day via bank transfer, Paxum, or your preferred method — no minimums.' },
  { q: 'Will anyone find out?', a: 'Your real identity is never exposed. Your name and personal info stay completely private.' },
  { q: 'What do I need to get started?', a: 'A phone or computer, any webcam (HD preferred), decent internet, and a valid government ID.' },
  { q: 'Can couples join?', a: 'Yes — couples are welcome across all 8 platforms and often earn significantly more than solo performers.' },
  { q: 'What percentage do I keep?', a: 'You keep 85% of everything you earn. We take just 15% to run the platform. No hidden fees, ever.' },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#07080f' }}>

      {/* ── Nav ──────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-16">
          <a href="/" className="text-lg font-display font-bold gradient-text">
            CamModelsDaily
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-400">
            {[['#models', 'Models'], ['#platforms', 'Platforms'], ['#how', 'How It Works'], ['#faq', 'FAQ']].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-white transition-colors">{label}</a>
            ))}
            <a
              href="/register"
              className="px-5 py-2 rounded-full text-white font-semibold glow-btn"
              style={{ background: 'linear-gradient(135deg, #ff1493, #a855f7)' }}
            >
              Start Earning
            </a>
          </nav>
          <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden glass px-5 py-5 flex flex-col gap-4 text-sm font-medium text-gray-300 border-t border-white/5">
            {[['#models', 'Models'], ['#platforms', 'Platforms'], ['#how', 'How It Works'], ['#faq', 'FAQ']].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a href="/register" onClick={() => setMenuOpen(false)}
              className="text-center py-3 rounded-full text-white font-semibold"
              style={{ background: 'linear-gradient(135deg, #ff1493, #a855f7)' }}>
              Start Earning
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #ff1493 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-pink-400 font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            Paying models daily since 2010
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-tight mb-6">
            Earn More.{' '}
            <span className="gradient-text">Stream Smarter.</span>
            <br />Get Paid Daily.
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Join 10,000+ models earning on 8 top platforms. Keep 85% of every dollar —
            paid straight to you every single day.
          </p>
          <p className="text-sm text-gray-600 mb-10">
            Webcam · 18+ · All body types · Fully discreet · Work from home
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/register"
              className="px-8 py-4 rounded-full text-white text-lg font-bold glow-btn"
              style={{ background: 'linear-gradient(135deg, #ff1493, #a855f7)' }}>
              Apply as a Model →
            </a>
            <a href="#how"
              className="px-8 py-4 rounded-full text-white text-lg font-semibold glass card-hover">
              How It Works
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[['85%', 'You Keep'], ['Daily', 'Payouts'], ['8', 'Platforms'], ['10K+', 'Models']].map(([val, label]) => (
              <div key={label} className="glass rounded-2xl py-4 px-3 text-center card-hover">
                <div className="text-2xl font-display font-bold gradient-text">{val}</div>
                <div className="text-xs text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Model Showcase ───────────────────────────────────────── */}
      <section id="models" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-pink-500 text-sm font-semibold uppercase tracking-widest mb-3">Our Models</p>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">
              Real Women. <span className="gradient-text">Real Earnings.</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every model on our network gets daily pay, full privacy, and dedicated support.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MODELS.map(({ name, tag, earnings, src, gradient }) => (
              <div key={name}
                className="relative rounded-3xl overflow-hidden border border-white/5 card-hover group"
                style={{ height: '380px' }}>
                {/* AI-generated model image — add to /public/models/ */}
                <img src={src} alt={name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                {/* Gradient placeholder shown until real image is added */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`} />
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(255,20,147,0.3)', border: '1px solid rgba(255,20,147,0.5)', color: '#ff69b4' }}>
                    {tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)' }}>
                  <p className="font-display font-bold text-lg">{name}</p>
                  <p className="text-pink-400 text-sm">{earnings}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(255,20,147,0.12)' }}>
                  <a href="/register"
                    className="px-5 py-2 rounded-full text-white text-sm font-bold"
                    style={{ background: 'linear-gradient(135deg, #ff1493, #a855f7)' }}>
                    Join Like {name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Ad Banner ────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 py-4">
        <AdSlot
          tjZoneId={process.env.NEXT_PUBLIC_TJ_ZONE_BANNER}
          exoZoneId={process.env.NEXT_PUBLIC_EXO_ZONE_BANNER}
          height={90}
        />
      </div>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section id="how" className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-pink-500 text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">
              Start Earning in <span className="gradient-text">4 Steps</span>
            </h2>
            <p className="text-gray-500">No experience needed. We handle the rest.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map(({ n, title, desc }) => (
              <div key={n} className="glass rounded-3xl p-7 card-hover">
                <div className="text-5xl font-display font-extrabold mb-4 leading-none gradient-text">{n}</div>
                <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platforms ────────────────────────────────────────────── */}
      <section id="platforms" className="py-24 px-4 sm:px-6" style={{ background: 'rgba(255,20,147,0.025)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-pink-500 text-sm font-semibold uppercase tracking-widest mb-3">8 Partner Sites</p>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">
              One Account. <span className="gradient-text">Every Platform.</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We manage your presence across all 8 sites. You just stream and collect.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLATFORMS.map(({ name, category, desc }) => (
              <div key={name} className="glass rounded-2xl p-5 card-hover border border-white/5">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full mb-3 inline-block"
                  style={{ background: 'rgba(255,20,147,0.15)', color: '#ff69b4' }}>
                  {category}
                </span>
                <h3 className="font-display font-bold text-base mb-1">{name}</h3>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Revenue Split ────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-pink-500 text-sm font-semibold uppercase tracking-widest mb-3">Transparent Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">
            You keep <span className="gradient-text">85%</span>
          </h2>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto">
            No setup fees. No monthly charges. We take 15% to run the platform.
            Every dollar you earn gets split automatically at payout.
          </p>
          <div className="glass rounded-3xl p-8">
            <div className="flex rounded-2xl overflow-hidden h-16 mb-6 text-sm font-bold">
              <div className="flex items-center justify-center text-white"
                style={{ width: '85%', background: 'linear-gradient(135deg, #ff1493, #a855f7)' }}>
                85% — Yours
              </div>
              <div className="flex items-center justify-center text-gray-400"
                style={{ width: '15%', background: 'rgba(255,255,255,0.06)' }}>
                15%
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[['$100 earned', 'Example'], ['$85 → You', 'Daily deposit'], ['$15 → Us', 'Platform fee']].map(([val, label]) => (
                <div key={label}>
                  <p className="font-display font-bold text-white">{val}</p>
                  <p className="text-xs text-gray-600 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 px-4 sm:px-6" style={{ background: 'rgba(255,20,147,0.025)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-pink-500 text-sm font-semibold uppercase tracking-widest mb-3">Questions</p>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold">
              Got <span className="gradient-text">Questions?</span>
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map(({ q, a }, i) => (
              <div key={q} className="glass rounded-2xl overflow-hidden border border-white/5 card-hover">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left font-semibold flex justify-between items-center">
                  <span>{q}</span>
                  <span className="text-pink-500 ml-4 flex-shrink-0 transition-transform duration-200"
                    style={{ display: 'inline-block', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▾
                  </span>
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid Ad Slot ──────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 py-8 flex justify-center">
        <AdSlot
          tjZoneId={process.env.NEXT_PUBLIC_TJ_ZONE_RECT}
          exoZoneId={process.env.NEXT_PUBLIC_EXO_ZONE_RECT}
          height={250}
        />
      </div>

      {/* ── Apply CTA ────────────────────────────────────────────── */}
      <section id="apply" className="py-28 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(ellipse at center, #ff1493 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">
            Ready to Keep <span className="gradient-text">85%?</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Free to join. No lock-in. Start earning daily from your very first stream.
          </p>
          <a href="/register"
            className="inline-block px-10 py-5 rounded-full text-white text-xl font-bold glow-btn"
            style={{ background: 'linear-gradient(135deg, #ff1493, #a855f7)' }}>
            Apply as a Model
          </a>
          <p className="text-gray-600 text-sm mt-6">Must be 18+ · Government ID required · Response within 24 hours</p>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-10 px-4 sm:px-6 text-sm text-gray-600">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <span className="font-display font-bold text-white text-base">CamModelsDaily.com</span>
          <div className="flex flex-wrap justify-center gap-5">
            {[['/18usc2257', '18 USC 2257'], ['/privacy', 'Privacy Policy'], ['/terms', 'Terms of Service'],
              ['/anti-trafficking', 'Anti-Trafficking'], ['https://twitter.com/cammodelsdaily', 'Twitter']
            ].map(([href, label]) => (
              <a key={label} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-700 text-xs mt-6">
          © {new Date().getFullYear()} CamModelsDaily.com · All rights reserved · All models are 18+
        </p>
      </footer>
    </div>
  );
}
