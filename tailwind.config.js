const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(),],
}




// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js", // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Add this line
  ],
}





// position: fixed;
// bottom: 0;
// left: 0;
// width: 100%;
// height: 200px; /* Adjust height for a more oval look */
// background: radial-gradient(ellipse at center, rgba(255, 153, 0, 0.35) 0%, transparent 80%);
// border-top-left-radius: 100% 100%;
// border-top-right-radius: 100% 100%;
// /* z-index: 0; */
// animation: blink-glow 3s ease-in-out infinite;
// pointer-events: none; /* Prevent interference with UI */
// }