import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="top-strip">
    <div class="container top-strip-content">
      <div class="brand">
        <img src="/saluslogo.png" alt="Salus Inc logo" class="brand-logo" />
        <h1 class="text-3xl font-bold">Salus Inc</h1>
      </div>
      <nav class="top-strip-nav">
        <span class="text-lg font-semibold underline">About Us</span>
        <span class="text-lg font-semibold underline">The Product</span>
        <span class="text-lg font-semibold underline">Reviews</span>
        <span class="text-lg font-semibold underline">Contact Us</span>
      </nav>
    </div>
  </div>

  <section class="product container grid grid-cols-[1fr_3fr_1fr] items-center px-6 py-20">  
    <div class="col-span-1">
      <img src="/romanpillar.png" alt="Background Pillar" class="background-pillar" />
    </div>
    <div class="col-span-1">
      <h1 class="text-6xl text-center font-bold">Praesidium AI</h1>
        <h2 class="text-3xl text-center leading-loose font-semibold">'Ship with Confidence, Recover with Certainty'</h2>
    </div>
    <div class="col-span-1">
      <img src="/romanpillar.png" alt="Background Pillar" class="background-pillar" />
    </div>
  </section>

  <section class="product-split container px-6 py-20">
    <div class="split-card">
      <h3 class="text-2xl mt-2 gold-border">Before you push</h3>
      <h2 class="text-3xl font-bold">Predict</h2>
      <h3 class="text-2xl font-semibold mt-2">Don't let your next deployment become your next incident</h3>
      <p class="text-lg mt-4"> Predict maps your entire dependency graph and surfaces everything your change could affect — across services, pipelines, and consumers your test suite doesn't even know about.</p>
      <ul class="list-disc list-inside mt-4">
        <li>Identify potential risks before they become incidents</li>
        <li>Gain insights into your deployment dependencies</li>
        <li>Enhance your testing strategy with predictive analysis</li>
      </ul>
    
      </div>
    <div class="split-card">
      <h3 class="text-2xl mt-2 gold-border">When something slips through</h3>
      <h2 class="text-3xl font-bold">Trace</h2>
      <h3 class="text-2xl font-semibold mt-2">When production breaks, every minute counts</h3>
      <p class="text-lg mt-4">Trace correlates your incident timeline with recent deployments, config changes, and dependency updates to tell you exactly what caused it — in seconds, not hours.</p>
      <ul class="list-disc list-inside mt-4">
        <li>Pinpoints the most likely cause from your deployment history</li>
        <li>Cross-references logs, alerts, and config changes automatically</li>
        <li>Cuts mean time to resolution dramatically</li>
      </ul>
    </div>
  </section>
`