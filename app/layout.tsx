import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Prompt Cost Breakdown Analyzer — Track AI Costs Per Feature & User",
  description: "Break down AI prompt costs by product feature and user segment. Optimize your AI API spending with real-time dashboards and smart recommendations."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5c494f5d-4623-4d1e-86b3-b3d8bcd14472"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
