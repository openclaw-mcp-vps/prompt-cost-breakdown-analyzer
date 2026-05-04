export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          AI Cost Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track AI Prompt Costs<br />
          <span className="text-[#58a6ff]">Per Feature &amp; User Segment</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing where your AI budget goes. Ingest API usage data, tag by product feature, and get instant cost breakdowns with optimization recommendations.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card surprises.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Webhook ingestion","CSV upload","Feature tagging","User segments","Cost alerts","Optimization tips"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>

        {/* Mini dashboard mockup */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <p className="text-xs text-[#8b949e] mb-4 uppercase tracking-wide font-semibold">Cost Breakdown — Last 30 days</p>
          <div className="space-y-3">
            {[
              { label: "Chat feature", pct: 72, cost: "$214.80" },
              { label: "Search summarizer", pct: 18, cost: "$53.70" },
              { label: "Onboarding assistant", pct: 10, cost: "$29.83" },
            ].map((row) => (
              <div key={row.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#c9d1d9]">{row.label}</span>
                  <span className="text-[#58a6ff] font-mono">{row.cost}</span>
                </div>
                <div className="h-2 rounded-full bg-[#0d1117]">
                  <div
                    className="h-2 rounded-full bg-[#58a6ff]"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#3fb950] font-medium">&#x2713; Recommendation: Cache repeated search queries — save ~$18/mo</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited webhook events",
              "CSV bulk import",
              "Unlimited feature tags",
              "User segment analytics",
              "Cost spike alerts",
              "AI optimization recommendations",
              "Export to CSV / JSON",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">&#x2713;</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which AI providers are supported?",
              a: "OpenAI, Anthropic, Cohere, and any provider that exposes token usage in its API response. Use our webhook endpoint or upload a CSV export."
            },
            {
              q: "How do I tag costs by feature?",
              a: "Send a feature_tag field in your webhook payload or add a column in your CSV. The dashboard groups and aggregates costs automatically."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-6 text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Prompt Cost Analyzer. All rights reserved.
      </footer>
    </main>
  )
}
