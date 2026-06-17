import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1 class="text-6xl font-bold text-center">Brochure Test</h1>

  <style>
    :root {
      --colour-mint-500: #3EB489;
      --colour-mint-600: #2E8B57;
      --colour-mint-700: #006400;
      --colour-mint-800: #004d40;
      --colour-mint-900: #00332c;
    }
  </style>

  <div style="background-color: var(--colour-mint-500); color: white; padding: 20px; text-align: center;">
    <p>This is a test paragraph with a mint background.</p>
  </div>
`