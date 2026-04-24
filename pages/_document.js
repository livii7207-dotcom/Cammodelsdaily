import { Html, Head, Main, NextScript } from 'next/document';

const SITE_URL = 'https://xcammodels.com';
const DESCRIPTION = 'Join XCamModels and keep 85% of everything you earn. Daily payouts, 8 top platforms, full privacy. Free to join.';

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
    { '@type': 'Question', name: 'What percentage do I keep?', acceptedAnswer: { '@type': 'Answer', text: 'You keep 85% of everything you earn. We take just 15% to run the platform. No hidden fees, ever.' } },
  ],
};

export default function Document() {
  const tjPublisherId = process.env.NEXT_PUBLIC_TJ_PUBLISHER_ID;
  const useExoClick = process.env.NEXT_PUBLIC_USE_EXOCLICK === 'true';

  return (
    <Html lang="en">
      <Head>
        <title>XCamModels — Earn Daily as a Cam Model</title>
        <meta name="description" content={DESCRIPTION} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="XCamModels — Earn Daily as a Cam Model" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:site_name" content="XCamModels" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@xcammodels" />
        <meta name="twitter:title" content="XCamModels — Earn Daily as a Cam Model" />
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
