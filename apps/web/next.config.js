const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
});
