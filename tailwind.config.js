/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: [], // Purge отключен
  content: ['./src/**/*.{ts,tsx}'],

  theme: {
    extend: {},
  },
  plugins: [],

  // safelist: [
  //     {
  //         // плохая практика, но классы динамические и надо тут прописать то что мы будем использовать
  //         pattern: /./, // Регулярное выражение для соответствия любому классу
  //     },
  // ],
};
