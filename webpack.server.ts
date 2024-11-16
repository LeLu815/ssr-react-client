import path from "path";
import { Configuration } from "webpack";
import merge from "webpack-merge";
import webpackNodeExternals from "webpack-node-externals";
import baseConfig from "./webpack.base";

const config: Configuration = {
  target: "node",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
};

export default merge(baseConfig, config);
