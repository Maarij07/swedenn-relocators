'use client';

import Home from '../components/Home';

// The language for /sv is now controlled globally in ClientI18nProvider
// based on the current pathname, so this page only needs to render <Home />.
export default function SvHomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Home />
    </main>
  );
}
