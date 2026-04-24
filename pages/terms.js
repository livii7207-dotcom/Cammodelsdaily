import Logo from '../components/Logo';

export default function Terms() {
  return (
    <div className="min-h-screen px-4 py-16" style={{ backgroundColor: '#07080f', color: '#e5e7eb' }}>
      <div className="max-w-3xl mx-auto">
        <a href="/" className="inline-block mb-10"><Logo size="md" /></a>
        <h1 className="text-4xl font-display font-extrabold mb-2 text-white">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: January 1, 2025</p>

        {[
          ['1. Acceptance of Terms', 'By accessing or using XCamModels.com you agree to be bound by these Terms of Service. If you do not agree, do not use this site.'],
          ['2. Eligibility', 'You must be at least 18 years of age (19 in certain jurisdictions) to register as a model or use any paid services on this platform. By registering you confirm you meet the minimum age requirement in your jurisdiction.'],
          ['3. Model Agreement', 'Models on XCamModels.com retain 85% of all earnings generated through our partner platforms. XCamModels.com retains a 15% platform fee to cover infrastructure, support, and account management. This split is calculated at payout and applied automatically.'],
          ['4. Identity Verification', 'All models must provide valid government-issued photo identification before their account is activated. Documents are handled securely and never shared publicly.'],
          ['5. Prohibited Conduct', 'You agree not to use this site for any unlawful purpose, to impersonate any person, to upload content depicting minors, or to engage in harassment of other users or staff.'],
          ['6. Content Ownership', 'Models retain ownership of their content. By uploading content to partner platforms through our service, you grant those platforms a license as described in their respective terms.'],
          ['7. Privacy', 'Your personal information is handled as described in our Privacy Policy. Real names and personal data are never exposed publicly.'],
          ['8. Limitation of Liability', 'XCamModels.com is not liable for indirect, incidental, or consequential damages arising from your use of this site or the partner platforms.'],
          ['9. Changes to Terms', 'We may update these terms at any time. Continued use of the site after changes constitutes acceptance of the revised terms.'],
          ['10. Contact', 'Questions about these terms? Email us at legal@xcammodels.com.'],
        ].map(([heading, body]) => (
          <div key={heading} className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-2">{heading}</h2>
            <p className="text-gray-400 leading-relaxed text-sm">{body}</p>
          </div>
        ))}

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <a href="/" className="text-pink-400 hover:underline text-sm">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
