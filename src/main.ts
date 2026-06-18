import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="top-strip">
    <div class="container top-strip-content">
      <div class="brand">
        <img src="/praeventio_shield_v3.png" alt="Salus Inc logo" class="brand-logo" />
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

  <div class="container px-6 py-40 text-center">
    <h1 class="text-6xl font-bold">Praesidium</h1>
    <p class="text-2xl font-semibold">'Ship with Confidence, Recover with Certainty'.</p>
  </div>
`