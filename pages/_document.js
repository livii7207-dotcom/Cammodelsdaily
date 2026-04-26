import { Html, Head, Main, NextScript } from 'next/document';

const SITE_URL = 'https://xcammodels.com';
const DESCRIPTION = 'Start cam modeling in 2026. Apply once, get set up on 8 top platforms — Chaturbate, OnlyFans, Stripchat and more. Free to join, daily payouts, full privacy.';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'XCamModels',
  url: SITE_URL,
  description: DESCRIPTION,
  sameAs: ['https://twitter.com/xcammodels'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do I need any experience?', acceptedAnswer: { '@type': 'Answer', text: 'None at all. We guide you through everything from setup to your first payout with real human support.' } },
    { '@type': 'Question', name: 'How does daily pay work?', acceptedAnswer: { '@type': 'Answer', text: 'Your earnings are deposited automatically every day via bank transfer, Paxum, or your preferred method — no minimums.' } },
    { '@type': 'Question', name: 'Will anyone find out?', acceptedAnswer: { '@type': 'Answer', text: 'Your real identity is never exposed. Your name and personal info stay completely private.' } },
    { '@type': 'Question', name: 'Is XCamModels free?', acceptedAnswer: { '@type': 'Answer', text: 'Completely free. We never take a percentage of your earnings. Platforms pay you directly every day. We earn a referral fee from the platforms, not from you.' } },
    { '@type': 'Question', name: 'How much can I make on Chaturbate?', acceptedAnswer: { '@type': 'Answer', text: 'Top Chaturbate models earn $3,000-$10,000+ per month. Most beginners earn $500-$2,000 in their first month while learning the platform.' } },
  ],
};

export default function Document() {
  const tjPublisherId = process.env.NEXT_PUBLIC_TJ_PUBLISHER_ID;
  const useExoClick = process.env.NEXT_PUBLIC_USE_EXOCLICK === 'true';

  return (
    <Html lang="en">
      <Head>
        <title>XCamModels — Start Cam Modeling in 2026 | Free, Daily Pay</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="how to become a cam model, cam model 2026, Chaturbate model signup, OnlyFans model, how much do cam models make, best cam sites for models, cam modeling guide" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="XCamModels — Start Cam Modeling in 2026 | Free, Daily Pay" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:site_name" content="XCamModels" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@xcammodels" />
        <meta name="twitter:title" content="XCamModels — Start Cam Modeling in 2026 | Free, Daily Pay" />
        <meta name="twitter:description" content={DESCRIPTION} />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {tjPublisherId && (
          <script async src={`https://ads.trafficjunky.net/ads/agent/${tjPublisherId}/show_ads_mq.js`} />
        )}
        {useExoClick && (
          <script async data-cfasync="false" src="https://a.magsrv.com/ad-provider.js" />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
