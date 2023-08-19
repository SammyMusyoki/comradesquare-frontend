/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        studentshero:
          "url(https://img.freepik.com/free-photo/group-five-african-womans-walking-supermarket-with-shopping-carts_627829-597.jpg?w=996&t=st=1692278364~exp=1692278964~hmac=a0c66703a9f231ccd8e59ab3908d8018d28f124addc436063175be5ebcdf90b6)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
