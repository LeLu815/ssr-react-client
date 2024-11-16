import path from "path";
import { Configuration } from "webpack";
import merge from "webpack-merge";
import baseConfig from "./webpack.base";

const config: Configuration = {
  entry: "./src/client/client.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

export default merge(baseConfig, config);
