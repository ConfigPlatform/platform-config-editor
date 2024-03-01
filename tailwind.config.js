/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  plugins: [],
  theme: {},
  safelist: [
    {
      // плохая практика, но классы динамические и надо тут прописать то что мы будем использовать
      pattern: /./, // Регулярное выражение для соответствия любому классу
    },
  ],
};