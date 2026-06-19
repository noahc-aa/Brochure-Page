import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="top-strip">
    <div class="container top-strip-content">
      <div class="brand">
        <img src="/saluslogo.png" alt="Salus Inc logo" class="brand-logo" />
        <h1 class="text-3xl font-bold">Salus Inc.</h1>
      </div>
      <button class="mobile-menu-button" aria-expanded="false" aria-label="Open navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="top-strip-nav desktop-nav">
        <span class="text-lg font-semibold underline">About Us</span>
        <span class="text-lg font-semibold underline">The Product</span>
        <span class="text-lg font-semibold underline">Reviews</span>
        <span class="text-lg font-semibold underline">Contact Us</span>
      </nav>
    </div>
    <nav class="mobile-nav-dropdown" aria-hidden="true">
      <a href="#" class="mobile-nav-link">About Us</a>
      <a href="#" class="mobile-nav-link">The Product</a>
      <a href="#" class="mobile-nav-link">Reviews</a>
      <a href="#" class="mobile-nav-link">Contact Us</a>
    </nav>
  </div>

  <section class="title container grid grid-cols-[1fr_4fr_1fr] items-center px-6 py-20">
    <div class="col-span-1">
      <img src="/romanpillar.png" alt="Background Pillar" class="background-pillar" />
    </div>
    <div class="col-span-1">
      <h1 class="text-6xl text-center font-bold" style="color: white !important;">Praeventio AI</h1>
        <h2 class="text-4xl text-center leading-loose font-semibold mb-6" style="color: var(--colour-gold-5);">'Ship with Confidence, Recover with Certainty'</h2>
          <p class="text-2xl text-center leading-loose font-semibold;">The problem? Every deployment is a risk. Most teams only find out something broke after it's already broken</p>
          <p class="text-2xl text-center leading-loose font-semibold;">The solution? Praeventio maps your blast radius before you push, and finds the root cause when something slips through.</p>
    </div>
    <div class="col-span-1">
      <img src="/romanpillar.png" alt="Background Pillar" class="background-pillar" />
    </div>
  </section>

  <div class="product-header container px-6 py-20">
    <h2 class="text-3xl font-normal text-center" style="color: var(--colour-gold-5);">Two Tools, One Solution</h2>
    <h2 class="text-4xl font-bold text-center" style="color: white;">The Product</h2>
  </div>

  <section class="product-split container px-6 py-10">
    <div class="split-card">
      <h3 class="text-2xl mt-2 gold-border">Before you push</h3>
      <h2 class="text-3xl font-bold" style="color: white;">Predict</h2>
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
      <h2 class="text-3xl font-bold" style="color: white;">Trace</h2>
      <h3 class="text-2xl font-semibold mt-2">When production breaks, every minute counts</h3>
      <p class="text-lg mt-4">Trace correlates your incident timeline with recent deployments, config changes, and dependency updates to tell you exactly what caused it — in seconds, not hours.</p>
      <ul class="list-disc list-inside mt-4">
        <li>Pinpoints the most likely cause from your deployment history</li>
        <li>Cross-references logs, alerts, and config changes automatically</li>
        <li>Cuts mean time to resolution dramatically</li>
      </ul>
    </div>
  </section>

  <div class="review-header container px-6 py-20">
    <h2 class="text-3xl font-normal text-center" style="color: var(--colour-gold-5);">What Our Customers Say</h2>
    <h2 class="text-4xl font-bold text-center" style="color: white;">Reviews</h2>
  </div>

  <section class="review-split container px-6 py-10">
    <div class="split-card">
      <h3 class="text-2xl mt-2" style="color: var(--colour-gold-5);">"<h2/>
      <h2 class="text-3xl font-normal">Praeventio saved us from a major incident, love it</h2>
      <h3 class="text-2xl font-semibold mt-2" style="color: var(--colour-gold-5);">- Robert, Automated Analytics</h3>
      </div>

    <div class="split-card">
      <h3 class="text-2xl mt-2" style="color: var(--colour-gold-5);">"<h2/>
      <h2 class="text-3xl font-normal">We were able to identify a critical dependency issue before it caused downtime</h2>
      <h3 class="text-2xl font-semibold mt-2" style="color: var(--colour-gold-5);">- Ashton, Automated Analytics</h3>
    </div>
  </section>

  <section class="give-review container px-6 py-20">
    <div class="full-card">
      <h3 class="text-2xl font-semibold text-center" style="color: var(--colour-gold-5);">Give us a review</h3>
    </div>
  </section>

  <div class="about-us container px-6 py-20">
    <h2 class="text-3xl font-normal text-center" style="color: var(--colour-gold-5);">Who We Are</h2>
    <h2 class="text-4xl font-bold text-center" style="color: white;">About Us</h2>      <p class="text-lg mt-4 text-center">Salus Inc. was built by engineers who got tired of being paged at midnight for incidents that should never have happened. We believe the best incident is the one that never occurs.</p>
    <p class="text-lg mt-4 text-center">Praeventio is our answer — a deployment intelligence platform that gives software teams the visibility they need to ship with confidence and recover with certainty.</p>
    <button class="contact-us button my-8 mx-auto rounded-lg text-2xl font-semibold" style="background-color: var(--colour-blue-5); color: var(--colour-gold-5); font-family: 'Playfair Display'; ">Contact Us</button>
  </div>  

    
  <div class="bottom-strip">
    <div class="container bottom-strip-content">
      <p class="text-lg font-semibold text-left" style="color: var(--colour-blue-4);">© 2026 Salus Inc. All rights reserved.</p>
    </div>
    <div class="container bottom-strip-content">
      <nav class="bottom-strip-nav">
        <span class="text-lg font-semibold underline" style="color: var(--colour-blue-4);">@LinkedIn</span>
        <span class="text-lg font-semibold underline" style="color: var(--colour-blue-4);">@X</span>
        <span class="text-lg font-semibold underline" style="color: var(--colour-blue-4);">@Instagram</span>
      </nav>
    </div>
  </div>
`

const mobileMenuButton = document.querySelector<HTMLButtonElement>('.mobile-menu-button');
const mobileNavDropdown = document.querySelector<HTMLElement>('.mobile-nav-dropdown');

mobileMenuButton?.addEventListener('click', () => {
  const isOpen = mobileNavDropdown?.classList.toggle('open');
  mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
  mobileNavDropdown?.setAttribute('aria-hidden', String(!isOpen));
});

mobileNavDropdown?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNavDropdown.classList.remove('open');
    mobileMenuButton?.setAttribute('aria-expanded', 'false');
    mobileNavDropdown?.setAttribute('aria-hidden', 'true');
  });
});
