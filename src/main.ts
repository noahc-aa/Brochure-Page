import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="top-strip">
    <div class="container top-strip-content">
      <h1 class="text-3xl font-bold">Salus Inc</h1>
      <span class="text-lg font-semibold underline">About Us</span>
      <span class="text-lg font-semibold underline">The Product</span>
      <span class="text-lg font-semibold underline">Reviews</span>
      <span class="text-lg font-semibold underline">Contact Us</span>
    </div>
  </div>

  <div class="container px-6 py-40 text-center">
    <h1 class="text-6xl font-bold">Praeventio</h1>
    <p class="text-2xl font-semibold">Cutting edge technology saving developers hours of painstaking fixing.</p>
  </div>
`