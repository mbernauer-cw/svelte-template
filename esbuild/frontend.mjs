import sveltePlugin from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";
import { sassPlugin } from 'esbuild-sass-plugin'
import esbuildCopy from "esbuild-plugin-copy";

export function configure() {
    return {
      entryPoints: ["frontend/src/app.js"],
      mainFields: ["svelte", "browser", "module", "main"],
      conditions: ["svelte", "browser"],
      bundle: true,
      outdir: "build/frontend",
      plugins: [
        // Svelte
        sveltePlugin({
          preprocess: sveltePreprocess(),
          compilerOptions: {
            dev: true,
          }
        }),

        // CSS
        sassPlugin(),

        // Copy resources
        esbuildCopy({
          copyOnStart: true,
          assets: {
            from: ["res/**/*"],
            to: ["./"]
          },
          watch: true,
        }),
      ],
      loader: {
        '.woff': 'file',
        '.woff2': 'file',
      },
      logLevel: "info",
    };
};

export default {
    configure: configure,
};