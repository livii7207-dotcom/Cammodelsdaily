import Logo from '../components/Logo';

const SECTIONS = ['Getting Started', 'Choosing a Platform', 'Your First Week', 'Getting Paid', 'Privacy & Safety', 'Growing Your Audience'];

// TODO: Replace each href with your affiliate link for that platform
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
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#07080f', color: '#e5e7eb' }}>
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-5xl mx-auto px-5 flex justify-between items-center h-16">
          <a href="/"><Logo size="md" /></a>
          <a href="/register"
            className="px-5 py-2 rounded-full text-white text-sm font-semibold shimmer-btn">
            Apply Now
          </a>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 pt-28 pb-20">
        {/* Hero */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-pink-500">Complete Beginner's Guide · 2026</span>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold mt-3 mb-4 text-white leading-tight">
            How to Become a Cam Model in 2026
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Everything you need to know to start earning as a cam model — from what equipment you need,
            which platform to start on, how much you can realistically make, and how to stay completely private.
            No experience required.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {SECTIONS.map(s => (
              <a key={s} href={`#${s.toLowerCase().replace(/ /g, '-')}`}
                className="text-xs px-3 py-1.5 rounded-full font-medium text-gray-400 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                {s}
              </a>
            ))}
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.07)', marginBottom: '3rem' }} />

        {/* Section 1 */}
        <section id="getting-started" className="mb-16">
          <h2 className="text-2xl font-display font-extrabold text-white mb-6">
            1. Getting Started — What You Actually Need
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            The barrier to entry is lower than most people expect. You don't need a professional studio,
            expensive camera equipment, or any prior experience. Thousands of successful models started
            with nothing more than a phone.
          </p>

          <h3 className="text-lg font-semibold text-white mt-8 mb-3">Equipment</h3>
          <div className="space-y-3">
            {[
              ['Camera', 'A recent smartphone (iPhone 12+ or Android equivalent) or a basic USB webcam ($40–80). HD quality is fine — 4K is not needed.'],
              ['Lighting', 'A simple ring light ($20–35 on Amazon) transforms your setup. Place it in front of you, at eye level. Natural window light also works great.'],
              ['Internet', 'Minimum 5 Mbps upload speed. Run a speed test at fast.com. Wired ethernet is more stable than WiFi for live streaming.'],
              ['Background', 'A clean wall, curtain, or hanging fabric. You can use a ring light to blur the background naturally. A green screen ($15) gives you full control.'],
              ['Sound', "The built-in mic on most webcams or phones is fine to start. A USB lav mic ($25) is a worthwhile upgrade once you're earning."],
            ].map(([item, desc]) => (
              <div key={item} className="glass rounded-xl p-4 border border-white/5">
                <span className="font-semibold text-white text-sm">{item}: </span>
                <span className="text-gray-400 text-sm">{desc}</span>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-white mt-8 mb-3">Documents Required</h3>
          <p className="text-gray-400 leading-relaxed mb-3">
            Every legitimate platform requires age verification before you can earn. This means:
          </p>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 ml-2">
            <li>A valid government-issued photo ID (passport, driver's license, or national ID card)</li>
            <li>You must be 18+ (19+ in some Canadian provinces)</li>
            <li>Some platforms also ask for a selfie holding your ID</li>
          </ul>
          <p className="text-gray-500 text-sm mt-3">
            Your ID is only used for age verification and is never shown publicly.
          </p>

          <div className="mt-8 rounded-2xl p-5" style={{ background: 'rgba(255,20,147,0.08)', border: '1px solid rgba(255,20,147,0.2)' }}>
            <p className="text-sm text-pink-200 font-medium">
              Ready to get started? Apply through XCamModels and we'll help you get set up on the right platforms for your style — completely free.
            </p>
            <a href="/register" className="inline-block mt-3 px-5 py-2 rounded-full text-white text-sm font-bold shimmer-btn">
              Apply Free →
            </a>
          </div>
        </section>

        {/* Section 2 */}
        <section id="choosing-a-platform" className="mb-16">
          <h2 className="text-2xl font-display font-extrabold text-white mb-6">
            2. Choosing Your Platform
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Not all platforms are equal — and the right one depends on what you want to do.
            Here's an honest breakdown of the major options in 2026.
          </p>

          <div className="space-y-5">
            {[
              {
                name: 'Chaturbate',
                type: 'Live Streaming',
                best: 'High-traffic live streams, tip-based income',
                pay: 'Daily via check, wire, Paxum, or crypto',
                pros: ['Largest cam site in the world by traffic', 'Massive free audience from day one', 'Tokens convert at ~$0.05–0.10 each'],
                cons: ['Competitive — takes time to build an audience', 'Free-to-view model means tips vary'],
              },
              {
                name: 'OnlyFans',
                type: 'Subscription Content',
                best: 'Recurring monthly income from subscribers',
                pay: 'Weekly via bank transfer',
                pros: ['Monthly subscription model = predictable income', 'PPV (pay-per-view) messages earn well', 'Lower competition than live cam sites'],
                cons: ['You need to bring your own audience initially', 'More content creation work (photos, videos)'],
              },
              {
                name: 'Stripchat',
                type: 'Live Streaming',
                best: 'European audience, strong tip culture',
                pay: 'Daily via Paxum, crypto, wire',
                pros: ['Large global audience, active community', 'VR streaming capability', 'Consistent tip income in privates'],
                cons: ['Interface learning curve for new models'],
              },
              {
                name: 'ManyVids',
                type: 'Clip Sales',
                best: 'Selling pre-recorded videos and custom content',
                pay: 'Weekly or bi-weekly',
                pros: ['Passive income — upload once, earn forever', 'High buyer intent (people come to buy)', 'Custom video orders at premium rates'],
                cons: ['No live streaming income', 'Takes time to build a clip library'],
              },
              {
                name: 'IWantClips',
                type: 'Custom Content',
                best: 'Custom clip requests and wish lists',
                pay: 'Bi-weekly via PayPal or check',
                pros: ['Very high average order values', 'Dedicated fan buyer community', 'Tribute and wish list features'],
                cons: ['Smaller audience than major platforms', 'Best with an existing following'],
              },
            ].map(({ name, type, best, pay, pros, cons }) => (
              <div key={name} className="glass rounded-2xl p-6 border border-white/5">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white"><PlatformLink name={name} /></h3>
                    <span className="text-xs text-gray-500">{type}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-1"><span className="text-white font-medium">Best for:</span> {best}</p>
                <p className="text-sm text-gray-400 mb-4"><span className="text-white font-medium">Paid:</span> {pay}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-green-400 mb-1.5">Pros</p>
                    <ul className="space-y-1">
                      {pros.map(p => <li key={p} className="text-xs text-gray-400 flex gap-1.5"><span className="text-green-500 flex-shrink-0">+</span>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-400 mb-1.5">Cons</p>
                    <ul className="space-y-1">
                      {cons.map(c => <li key={c} className="text-xs text-gray-400 flex gap-1.5"><span className="text-red-500 flex-shrink-0">−</span>{c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Most successful models run 2–3 platforms simultaneously. <a href="/register" className="text-pink-400 hover:underline">Apply through XCamModels</a> and we'll set you up on the combination that fits your goals.
          </p>
        </section>

        {/* Section 3 */}
        <section id="your-first-week" className="mb-16">
          <h2 className="text-2xl font-display font-extrabold text-white mb-6">
            3. Your First Week — Realistic Expectations
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            The first week is about learning, not maximizing earnings. Here's what actually happens:
          </p>
          <div className="space-y-4">
            {[
              ['Day 1–2', 'Account setup, ID verification, profile photos, room description. Most platforms approve within 24–48 hours.'],
              ['Day 3–4', 'Your first streams. Expect 0–5 viewers. This is normal. The algorithm takes time to index your room.'],
              ['Day 5–7', 'First tips start coming in. Average first week for new Chaturbate models is $50–300 depending on hours streamed.'],
              ['Week 2–4', 'The algorithm starts recommending your room. Consistent scheduling is the #1 factor. 4–5 hours/day, same time each day.'],
              ['Month 2–3', 'Regular fans, returning tippers. Average for consistent models at this stage: $800–2,500/month.'],
            ].map(([period, desc]) => (
              <div key={period} className="flex gap-4 glass rounded-xl p-4 border border-white/5">
                <div className="flex-shrink-0 text-xs font-bold text-pink-400 pt-0.5 w-20">{period}</div>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}>
            <p className="text-sm text-purple-200">
              <strong>How much do cam models make?</strong> The range is wide: $200–$500/month for casual (5–10 hrs/week) up to $5,000–$20,000/month for full-time consistent performers. The biggest variable is consistency, not looks.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="getting-paid" className="mb-16">
          <h2 className="text-2xl font-display font-extrabold text-white mb-6">
            4. Getting Paid — How Payouts Work
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Every platform pays differently. Here's the breakdown for 2026:
          </p>
          <div className="space-y-3">
            {[
              ['Chaturbate', 'Minimum $50. Daily payouts via Paxum, check, wire, Bitcoin, or ePayService.'],
              ['OnlyFans', 'Minimum $20. Weekly via bank transfer (ACH, SEPA) or manual request.'],
              ['Stripchat', 'Daily via Paxum, crypto, or wire. No minimum for Paxum.'],
              ['ManyVids', 'Bi-weekly. Via check, bank transfer, or PayPal. Minimum $100.'],
              ['IWantClips', 'Bi-weekly. PayPal or check. Minimum $50.'],
            ].map(([platform, detail]) => (
              <div key={platform} className="glass rounded-xl p-4 border border-white/5 flex gap-4">
                <span className="font-semibold text-white text-sm w-28 flex-shrink-0">{platform}</span>
                <span className="text-gray-400 text-sm">{detail}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-5">
            <strong className="text-white">Paxum</strong> is the most popular payout method for cam models — it's an e-wallet designed for adult industry payments, widely accepted and easy to withdraw from. Sign up free at paxum.com.
          </p>
        </section>

        {/* Section 5 */}
        <section id="privacy-&-safety" className="mb-16">
          <h2 className="text-2xl font-display font-extrabold text-white mb-6">
            5. Privacy & Safety — Staying 100% Anonymous
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Privacy is the #1 concern for new models — and the good news is it's completely manageable with the right setup.
          </p>
          <div className="space-y-4">
            {[
              ['Use a stage name', 'Never use your real name on any platform. Your stage name is your brand. Keep it consistent across platforms.'],
              ['Geoblocking', 'Every major platform lets you block specific countries or states from viewing your room. Block your home state/country if needed — it takes 2 minutes.'],
              ['No identifiable details', 'Cover or blur any tattoos, birthmarks, or background items (photos, mail, diplomas) that could identify you. A plain background eliminates this risk entirely.'],
              ['Watermark your content', 'Any content you sell should have your stage name watermarked. This deters piracy and identifies leaks. Apps like iWatermark ($3) work on mobile.'],
              ['Separate accounts', 'Use a dedicated email address for platforms. Never link your personal social media. Use a VPN if you want an extra layer of IP protection.'],
              ['Paxum for payments', 'Paxum doesn\'t appear as an adult transaction on bank statements. Wire transfers may — consider a separate bank account for cam income.'],
            ].map(([title, desc]) => (
              <div key={title} className="glass rounded-xl p-4 border border-white/5">
                <p className="font-semibold text-white text-sm mb-1">{title}</p>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 */}
        <section id="growing-your-audience" className="mb-16">
          <h2 className="text-2xl font-display font-extrabold text-white mb-6">
            6. Growing Your Audience
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Consistency beats everything. But here's what accelerates growth:
          </p>
          <div className="space-y-4">
            {[
              ['Stream on a schedule', 'Pick 3–5 days a week, same time each day. Your regulars will know when to find you. The algorithm rewards consistent streamers.'],
              ['Cross-promote between platforms', 'Your Chaturbate fans can become your OnlyFans subscribers. Mention your other platforms at the end of streams.'],
              ['Twitter/X (adult-friendly)', 'Twitter/X still allows adult content promotion. A dedicated stage-name account where you post stream schedules and teasers drives real traffic.'],
              ['Reddit', 'Subreddits like r/OnlyFansPromotions and niche content communities allow self-promotion. Read each community\'s rules first.'],
              ['Engage your regulars', 'Remember names. Give shout-outs. Fan retention is more valuable than new viewers — regulars tip more and more consistently.'],
              ['Off-peak timing', 'Most models stream in the evening. Streaming in the morning or afternoon means less competition for algorithm placement — especially early in your career.'],
            ].map(([title, desc]) => (
              <div key={title} className="glass rounded-xl p-4 border border-white/5">
                <p className="font-semibold text-white text-sm mb-1">{title}</p>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(255,0,128,0.12), rgba(168,85,247,0.12))', border: '1px solid rgba(255,0,128,0.2)' }}>
          <h2 className="text-2xl font-display font-extrabold text-white mb-3">Ready to Start?</h2>
          <p className="text-gray-400 mb-6 text-sm max-w-md mx-auto">
            Apply once through XCamModels and we'll get you set up on the right platforms — completely free. No fees, no middleman on your earnings.
          </p>
          <a href="/register" className="inline-block px-8 py-4 rounded-full text-white font-bold shimmer-btn">
            Apply Free →
          </a>
          <p className="text-gray-600 text-xs mt-4">18+ · Government ID required · Response within 24 hours</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4 text-sm text-gray-600 text-center">
        <div className="flex flex-wrap justify-center gap-5 mb-4">
          {[['/terms', 'Terms'], ['/privacy', 'Privacy'], ['/disclaimer', 'Disclaimer'], ['/18usc2257', '18 USC 2257']].map(([href, label]) => (
            <a key={label} href={href} className="hover:text-white transition-colors">{label}</a>
          ))}
        </div>
        <p className="text-gray-700 text-xs">© {new Date().getFullYear()} XCamModels.com · All rights reserved · All models are 18+</p>
      </footer>
    </div>
  );
}
