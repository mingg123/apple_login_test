const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "source-map",
  // ...
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src", // 소스 코드가 있는 디렉토리 경로
          to: "build", // 복사할 디렉토리 경로
          globOptions: {
            ignore: ["**/*.test.js"], // 복사하지 않을 파일 패턴
          },
        },
      ],
    }),
    // ...
  ],
  // ...
};
