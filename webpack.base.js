const config = {
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/, // .ts 및 .tsx 파일 처리
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};

module.exports = config;
