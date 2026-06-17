import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1 class="text-6xl font-bold text-center">Brochure Test</h1>

  <style>
    :root {
      --colour-blue-1: #d6e4f5;
      --colour-blue-2: #a4c7df;
      --colour-blue-3: #7bb7d1;
      --colour-blue-4: #4aa0c4;
      --colour-blue-5: #1d3a6d;
    }
  </style>

  <div style="background-color: radial-gradient(circle, var(--colour-blue-1), var(--colour-blue-2) var(--colour-blue-3) var(--colour-blue-4) var(--colour-blue-5)); color: white; padding: 20px; text-align: center;">
    <p>This is a test paragraph with a blue gradient background.</p>
  </div>
`