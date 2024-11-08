/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
    colors: {
      green: 'hsl(75, 94%, 57%)',
      white: 'hsl(0, 0%, 100%)',
      grey: {
        700: 'hsl(0, 0%, 20%)',
        800: 'hsl(0, 0%, 12%)',
        900: 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
};

/*
- Mobile: 375px
- Desktop: 1440px
## Typography

### Body Copy

- Font size (paragraph): 14px

### Font

- Family: [Inter](https://fonts.google.com/specimen/Inter)
- Weights: 400, 600, 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma. The design file for this challenge also includes a basic design system to help you build a more accurate solution faster.

*/
