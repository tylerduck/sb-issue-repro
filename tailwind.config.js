module.exports = {
  mode: "jit",
  content: process.env.SB
    ? ["src/**/*.{js,jsx}"]
    : ["src/**/!(*.stories).{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
