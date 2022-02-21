const withImages = require("next-images");
// const withTM = require("next-transpile-modules")(["antd-mobile"]);
const path = require("path");

module.exports = withImages({
  // 你项目中其他的 Next.js 配置
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
});

// module.exports = {
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//   },
// };
