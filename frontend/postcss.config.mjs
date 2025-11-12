// // tailwind.config.ts
// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}',
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         carbon: '#333333', // deep poetic black
//         nougat: '#d8b4a0', // warm background tone
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'], // or your preferred poetic stack
//       },
//     },
//   },
//   plugins: [],
// }
// export default config

export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}