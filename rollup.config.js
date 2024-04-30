import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import {terser} from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [peerDepsExternal(), resolve(), terser()],
    external: ["react", "react-dom", "styled-components", "react", "react-bootstrap"],
  },
];
