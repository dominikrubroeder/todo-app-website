/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-primary-bright-blue': 'hsl(220, 98%, 61%)',
        'app-tlight-gray-100': 'hsl(0, 0%, 98%)',
        'app-tlight-gray-blue-100': 'hsl(236, 33%, 92%)',
        'app-tlight-gray-blue-300': 'hsl(233, 11%, 84%)',
        'app-tlight-gray-blue-600': 'hsl(236, 9%, 61%)',
        'app-tlight-gray-blue-800': 'hsl(235, 19%, 35%)',
        'app-tdark-blue-800': 'hsl(235, 21%, 11%)',
        'app-tdark-blue-desaturated-800': 'hsl(235, 24%, 19%)',
        'app-tdark-gray-blue-300': 'hsl(234, 39%, 85%)',
        'app-tdark-gray-blue-600': 'hsl(234, 11%, 52%)',
        'app-tdark-gray-blue-800': 'hsl(233, 14%, 35%)',
        'app-tdark-gray-blue-800-2': 'hsl(237, 14%, 26%)',
      },
      backgroundImage: {
        'app-primary-background':
          'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
        'app-bg-desktop-dark': "url('/images/bg-desktop-dark.jpg')",
        'app-bg-desktop-light': "url('/images/bg-desktop-light.jpg')",
        'app-bg-mobile-dark': "url('/images/bg-mobile-dark.jpg')",
        'app-bg-mobile-light': "url('/images/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [],
};
