import { useState } from 'react';
import AdSlot from './AdSlot';

const PLATFORMS = {
  live: [
    {
      name: 'StripChat',
      desc: 'Tips, private shows, and group performances on one of the largest live cam platforms.',
      url: 'https://stripchat.com/affiliates',
    },
    {
      name: 'Chaturbate',
      desc: "The world's most popular cam site. Live shows, private sessions, and tip-based earnings.",
      url: 'https://chaturbate.com/affiliates/',
    },
    {
      name: 'Cam4',
      desc: 'Live shows, private sessions, and detailed analytics to help you grow your audience.',
      url: 'https://cam4.com',
    },
  ],
  content: [
    {
      name: 'IWantClips',
      desc: 'Sell custom videos, photo sets, and personalized experiences directly to fans.',
      url: 'https://iwantclips.com',
    },
    {
      name: 'ManyVids',
      desc: 'Upload and sell exclusive content to a massive community of buyers worldwide.',
      url: 'https://manyvids.com',
    },
    {
      name: 'LoyalFans',
      desc: 'Build subscriber relationships and monetize exclusive content and fan interactions.',
      url: 'https://loyalfans.com',
    },
  ],
  independent: [
    {
      name: 'SkyPrivate',
      desc: 'Premium one-on-one video calls. Set your own per-minute rate and work on your terms.',
      url: 'https://skyprivate.com',
    },
    {
      name: 'CamModelDirectory',
      desc: 'Higher percentage payouts than comparable sites with direct fan connections.',
      url: 'https://cammodeldirectory.com',
    },
  ],
};

const STEPS = [
  { num: '01', title: 'Register', desc: 'Complete the quick online form with your personal details.' },
  { num: '02', title: 'Fill Your Profile', desc: 'Add payment info and upload your verification documents.' },
  { num: '03', title: 'Choose a Website', desc: 'Pick from 8 partner platforms based on your style and goals.' },
  { num: '04', title: 'Get Daily Pay', desc: 'Automatic daily deposits straight to your account. Every day.' },
];

const BLOG_POSTS = [
  { title: "Can People Find Out You're a Cam Model?", excerpt: 'Privacy is a top concern. Here\'s exactly how to protect your identity while you earn.' },
  { title: 'Why Your Cam Show Has No Viewers', excerpt: 'The real reasons models struggle to get traffic — and what you can fix today.' },
  { title: 'How Fast Can You Start Making Money?', excerpt: 'From sign-up to first payout: a realistic timeline for new models.' },
  { title: 'Couples Cam Modeling Success Guide', excerpt: 'Everything couples need to know to build a thriving cam income together.' },
  { title: 'The Secret Psychology Behind High-Earning Cam Models', excerpt: 'Top earners think differently. Here\'s what sets them apart from the rest.' },
  { title: 'How to Crush Your First Cam Show', excerpt: 'Step-by-step prep to make your debut confident, calm, and profitable.' },
];

const FAQ = [
  { q: 'Do I need experience?', a: 'No experience needed. We support new models from day one with onboarding guidance and real human support.' },
  { q: 'How do I get paid?', a: 'You get paid every single day via bank transfer, Paxum, or other supported methods. No minimums, no delays.' },
  { q: 'Is my identity protected?', a: 'Yes. Your real name and personal details are never shared or displayed publicly. Privacy is a top priority.' },
  { q: 'What equipment do I need?', a: 'A computer or smartphone (i7 processor and 3GB RAM recommended), any webcam (HD preferred), and a stable internet connection.' },
  { q: 'Can couples join?', a: 'Absolutely. Couples are welcome across all 8 partner platforms.' },
  { q: 'What countries are accepted?', a: 'We accept models from most countries. You must be 18+ (19+ in Canada). Government ID verification is required.' },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ── Sticky Nav ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
          <a href="/" className="text-xl font-bold text-pink-600">CamModelsDaily.com</a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#platforms" className="hover:text-pink-600 transition-colors">Network Sites</a>
            <a href="#payouts" className="hover:text-pink-600 transition-colors">Sites &amp; Payouts</a>
            <a href="#about" className="hover:text-pink-600 transition-colors">About Us</a>
            <a href="#blog" className="hover:text-pink-600 transition-colors">Blog</a>
            <a href="#faq" className="hover:text-pink-600 transition-colors">FAQ</a>
            <a
              href="mailto:apply@cammodelsdaily.com"
              className="px-4 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition-colors font-semibold"
            >
              Register
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
            <a href="#platforms" onClick={() => setMenuOpen(false)}>Network Sites</a>
            <a href="#payouts" onClick={() => setMenuOpen(false)}>Sites &amp; Payouts</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a
              href="mailto:apply@cammodelsdaily.com"
              className="text-center py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-pink-50 to-white py-20 sm:py-28 px-4 sm:px-6 text-center">
        <p className="text-pink-600 font-semibold text-sm uppercase tracking-widest mb-4">
          Operating since 2010
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          The Safest Way to Earn Daily<br className="hidden sm:block" /> as a Webcam Model
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-3">
          Flexible daily pay job from home. All you need is a webcam and to be 18+&nbsp;(19+ in Canada).
        </p>
        <p className="text-gray-400 mb-10 text-sm">
          Real human support &nbsp;·&nbsp; Daily pay &nbsp;·&nbsp; All body types welcome &nbsp;·&nbsp; Discreet
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:apply@cammodelsdaily.com"
            className="px-8 py-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-lg font-bold shadow-lg transition-colors"
          >
            Register Now
          </a>
          <a
            href="#platforms"
            className="px-8 py-4 rounded-xl border-2 border-pink-600 text-pink-600 hover:bg-pink-50 text-lg font-bold transition-colors"
          >
            See Platforms
          </a>
        </div>
      </section>

      {/* ── Top Ad Banner ────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <AdSlot
          tjZoneId={process.env.NEXT_PUBLIC_TJ_ZONE_BANNER}
          exoZoneId={process.env.NEXT_PUBLIC_EXO_ZONE_BANNER}
          height={90}
        />
      </div>

      {/* ── Feature Cards ────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { icon: '💰', title: 'Daily Pay Every Day', desc: 'Automatic deposits via multiple payment methods' },
            { icon: '🛡️', title: 'Privacy Protected', desc: 'Your real identity stays private at all times' },
            { icon: '🙋', title: 'Human Support', desc: 'Real people — available when you need help' },
            { icon: '📈', title: 'Advances Program', desc: 'Qualified models can access early payment advances' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Partner Platforms ────────────────────────────────────── */}
      <section id="platforms" className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2">Network Sites</h2>
          <p className="text-center text-gray-500 mb-12">
            Choose from 8 partner platforms based on your style and goals
          </p>

          <h3 className="text-xs font-bold text-pink-600 uppercase tracking-widest mb-4">Live Stream Websites</h3>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {PLATFORMS.live.map(({ name, desc, url }) => (
              <div key={name} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold mb-2">{name}</h4>
                <p className="text-sm text-gray-500 mb-4">{desc}</p>
                <a href={url} target="_blank" rel="noopener noreferrer"
                  className="text-pink-600 text-sm font-semibold hover:underline">
                  Learn more →
                </a>
              </div>
            ))}
          </div>

          <h3 className="text-xs font-bold text-pink-600 uppercase tracking-widest mb-4">Content Selling Websites</h3>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {PLATFORMS.content.map(({ name, desc, url }) => (
              <div key={name} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold mb-2">{name}</h4>
                <p className="text-sm text-gray-500 mb-4">{desc}</p>
                <a href={url} target="_blank" rel="noopener noreferrer"
                  className="text-pink-600 text-sm font-semibold hover:underline">
                  Learn more →
                </a>
              </div>
            ))}
          </div>

          <h3 className="text-xs font-bold text-pink-600 uppercase tracking-widest mb-4">Independent Shows</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {PLATFORMS.independent.map(({ name, desc, url }) => (
              <div key={name} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold mb-2">{name}</h4>
                <p className="text-sm text-gray-500 mb-4">{desc}</p>
                <a href={url} target="_blank" rel="noopener noreferrer"
                  className="text-pink-600 text-sm font-semibold hover:underline">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting Started (4 steps) ────────────────────────────── */}
      <section id="payouts" className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2">Getting Started</h2>
          <p className="text-center text-gray-500 mb-12">Four simple steps to your first daily payout</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ num, title, desc }) => (
              <div key={num} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-5xl font-extrabold text-pink-100 mb-3 leading-none">{num}</div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="mailto:apply@cammodelsdaily.com"
              className="inline-block px-8 py-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-lg font-bold shadow-lg transition-colors"
            >
              Start Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Revenue Split ────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            You don&apos;t pay us anything.<br />We pay you.
          </h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            No setup fees, no monthly charges. We take 15% to run the platform —
            you keep 85% of every dollar you earn, paid daily.
          </p>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex rounded-xl overflow-hidden h-14 mb-4 text-white font-bold text-sm">
              <div className="bg-pink-500 flex items-center justify-center" style={{ width: '85%' }}>
                85% — Yours
              </div>
              <div className="bg-gray-300 flex items-center justify-center text-gray-700" style={{ width: '15%' }}>
                15%
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              For every $100 earned → you receive <strong className="text-gray-900">$85</strong> daily ·
              we keep <strong className="text-gray-900">$15</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── Mid-page Ad ──────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-center">
        <AdSlot
          tjZoneId={process.env.NEXT_PUBLIC_TJ_ZONE_RECT}
          exoZoneId={process.env.NEXT_PUBLIC_EXO_ZONE_RECT}
          height={250}
        />
      </div>

      {/* ── About / Team ─────────────────────────────────────────── */}
      <section id="about" className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2">About Us</h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            We&apos;ve been supporting webcam models since 2010. Our team is led by former models
            who know what fair treatment looks like — and built this platform to deliver it.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'Katy', role: 'Owner / CFO', email: 'katy@cammodelsdaily.com' },
              { name: 'Raelynn', role: 'Program Manager', email: 'raelynn@cammodelsdaily.com' },
              { name: 'Support Team', role: 'Accounts &amp; Support', email: 'support@cammodelsdaily.com' },
            ].map(({ name, role, email }) => (
              <div key={name} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-pink-100 mx-auto mb-4 flex items-center justify-center text-2xl">
                  👤
                </div>
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-sm text-gray-500 mb-2" dangerouslySetInnerHTML={{ __html: role }} />
                <a href={`mailto:${email}`} className="text-pink-600 text-xs hover:underline">{email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog ─────────────────────────────────────────────────── */}
      <section id="blog" className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2">Blog</h2>
          <p className="text-center text-gray-500 mb-12">Tips, guides, and insights for cam models</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map(({ title, excerpt }) => (
              <div key={title} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 leading-snug">{title}</h3>
                <p className="text-sm text-gray-500 mb-4">{excerpt}</p>
                <a href="#blog" className="text-pink-600 text-sm font-semibold hover:underline">Read more →</a>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#blog" className="text-pink-600 font-semibold hover:underline">All Posts →</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">FAQ</h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }, i) => (
              <div key={q} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {q}
                  <span className={`text-pink-600 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-5 text-gray-500 text-sm">{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 text-sm">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <span className="text-white font-bold text-lg">CamModelsDaily.com</span>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/18usc2257" className="hover:text-white transition-colors">18 USC 2257</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/anti-trafficking" className="hover:text-white transition-colors">Anti-Trafficking Policy</a>
            <a
              href="https://twitter.com/cammodelsdaily"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
        <p className="text-center text-gray-600 text-xs mt-6">
          © {new Date().getFullYear()} CamModelsDaily.com. All rights reserved. All models are 18+.
        </p>
      </footer>
    </div>
  );
}
