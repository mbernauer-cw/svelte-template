import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";
import {sassPlugin} from 'esbuild-sass-plugin'
import esbuildCopy from "esbuild-plugin-copy";

let config = {
  entryPoints: ["frontend/src/app.js"],
  mainFields: ["svelte", "browser", "module", "main"],
  conditions: ["svelte", "browser"],
  bundle: true,
  outfile: "build/out.js",
  sourcemap: true,
  plugins: [
    sveltePlugin({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: true,
      }
    }),
    sassPlugin(),
    esbuildCopy({
      assets: {
        from: ["frontend/res/**/*"],
        to: ["./"]
      },
    }),
  ],
  loader: {
    '.woff': 'file',
    '.woff2': 'file',
  },
  logLevel: "info",
};


console.log(process.argv)
if (process.argv[2] == "build") {
  esbuild
    .build(config)
    .catch(() => process.exit(1));
} else if (process.argv[2] == "watch") {
  let ctx = await esbuild.context(config);
  await ctx.watch();
  console.log("Watching");
} else {
  console.log("Unknown command")
}