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
        <a href="#about-us" class="text-lg font-semibold underline">About Us</a>
        <a href="#the-product" class="text-lg font-semibold underline">The Product</a>
        <a href="#reviews" class="text-lg font-semibold underline">Reviews</a>
        <a href="#about-us" class="text-lg font-semibold underline">Contact Us</a>
      </nav>
    </div>
    <nav class="mobile-nav-dropdown" aria-hidden="true">
      <a href="#about-us" class="mobile-nav-link" tabindex="-1">About Us</a>
      <a href="#the-product" class="mobile-nav-link" tabindex="-1">The Product</a>
      <a href="#reviews" class="mobile-nav-link" tabindex="-1">Reviews</a>
      <a href="#about-us" class="mobile-nav-link" tabindex="-1">Contact Us</a>
    </nav>
  </div>

  <section class="title container grid grid-cols-[1fr_4fr_1fr] items-center px-6 py-10">
    <div class="col-span-1 self-end">
      <img src="/romanpillar.png" alt="Background Pillar" class="background-pillar"/>
    </div>
    <div class="col-span-1">
      <h1 class="text-6xl text-center font-bold" style="color: white !important;">Praeventio AI</h1>
        <h2 class="text-4xl text-center leading-normal sm:leading-loose font-semibold mb-6 mt-6" style="color: var(--colour-gold);">'Ship with Confidence, Recover with Certainty'</h2>
          <p class="text-lg text-center leading-relaxed font-normal;">The problem? Every deployment is a risk. Most teams only find out something broke after it's already broken</p>
          <p class="text-lg text-center leading-relaxed font-normal;">The solution? Praeventio maps your blast radius before you push, and finds the root cause when something slips through.</p>
    </div>
    <div class="col-span-1 self-end">
      <img src="/romanpillar.png" alt="Background Pillar" class="background-pillar" />
    </div>
    <div class="request-demo-button col-span-3 text-center">
      <button class="request-demo button my-8 mx-auto rounded-lg text-2xl font-semibold" style="background-color: var(--colour-blue-2); color: var(--colour-gold); font-family: 'Playfair Display'; ">Request a Demo</button>
    </div>
  </section>

  <div id="the-product" class="product-header container px-6 py-20">
    <h2 class="text-3xl font-normal text-center" style="color: var(--colour-gold);">Two Tools, One Solution</h2>
    <h2 class="text-4xl font-bold text-center" style="color: white;">The Product</h2>
  </div>

  <section class="product-split container px-6 py-20">
    <div class="split-card">
      <h3 class="text-2xl mt-2" style="color: var(--colour-gold)">Before you push</h3>
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
      <h3 class="text-2xl mt-2" style="color: var(--colour-gold)">When something slips through</h3>
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

  <div id="reviews" class="review-header container px-6 py-20">
    <h2 class="text-3xl font-normal text-center" style="color: var(--colour-gold);">What Our Customers Say</h2>
    <h2 class="text-4xl font-bold text-center" style="color: white;">Reviews</h2>
  </div>

  <section class="review-split container px-6 py-10">
    <div class="split-card">
      <h3 class="text-2xl mt-2" style="color: var(--colour-gold);">"<h2/>
      <h2 class="text-3xl font-semibold">Praeventio saved us from a major incident, love it</h2>
      <h3 class="text-2xl font-normal mt-2" style="color: var(--colour-gold);">- Robert, Automated Analytics</h3>
      </div>

    <div class="split-card">
      <h3 class="text-2xl mt-2" style="color: var(--colour-gold);">"<h2/>
      <h2 class="text-3xl font-semibold">We were able to identify a critical dependency issue before it caused downtime</h2>
      <h3 class="text-2xl font-normal mt-2" style="color: var(--colour-gold);">- Ashton, Automated Analytics</h3>
    </div>
  </section>

  <section class="give-review container px-6">
    <div class="full-card"> 
      <h3 class="text-2xl font-semibold text-center" style="color: var(--colour-gold);">Give us a review</h3>
      <div class="divider my-6"></div>
      <div class="review-row">  
        <input type="text" class="review-input" placeholder="Your name here..." />
        <input type="text" class="review-input" placeholder="Your company here..." />
      </div>
      <div class="divider my-6"></div>
      <textarea class="review-input" placeholder="Your review here..." rows="6"></textarea>
    </div>
  </section>

  <div class="submit-review-container">
    <button class="submit-review button my-8 mx-auto rounded-lg text-2xl font-semibold" style="background-color: var(--colour-blue-2); color: var(--colour-gold); font-family: 'Playfair Display'; ">Submit Review</button>
  </div>

  <div id="about-us" class="container px-6 py-20">
    <h2 class="text-3xl font-normal text-center" style="color: var(--colour-gold);">Who We Are</h2>
    <h2 class="text-4xl font-bold text-center" style="color: white;">About Us</h2>
    <p class="text-lg mt-4 text-center">Salus Inc. was built by engineers who got tired of being paged at midnight for incidents that should never have happened. We believe the best incident is the one that never occurs.</p>
    <p class="text-lg mt-4 text-center">Praeventio is our answer — a deployment intelligence platform that gives software teams the visibility they need to ship with confidence and recover with certainty.</p>
    </div>

  <div id="contact-us" class="container px-6 py-20">
    <h2 class="text-3xl font-normal text-center" style="color: var(--colour-gold);">Get In Touch</h2>
    <h2 class="text-4xl font-bold text-center" style="color: white;">Contact Us</h2>
    <p class="text-lg mt-4 text-center">Email: noahc@salusinc.co.uk</p>
    <p class="text-lg text-center">Phone Number: 07329 982397</p>
    <p class="text-lg text-center">LinkedIn: @Salus Inc.</p>
    </div>

    
  <div class="bottom-strip">
    <div class="container bottom-strip-content">
    <nav class="bottom-strip-nav">
        <span class="text-lg font-semibold underline" style="color: var(--colour-blue-1);">@LinkedIn</span>
        <span class="text-lg font-semibold underline" style="color: var(--colour-blue-1);">@X</span>
        <span class="text-lg font-semibold underline" style="color: var(--colour-blue-1);">@Instagram</span>
      </nav>
    <p class="text-lg font-semibold text-left" style="color: var(--colour-blue-1);">© 2026 Salus Inc. All rights reserved.</p>
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
