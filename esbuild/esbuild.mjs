import esbuild from "esbuild";
import Frontend from "./frontend.mjs";

let config = Frontend.configure();

function build(conf) {
  esbuild.build(conf).catch(() => process.exit(1));
}

async function watch(conf) {
  let ctx = await esbuild.context(conf);
  await ctx.watch();
}

let configurations = {
  "frontend": Frontend.configure(),
};

console.log(process.argv)
if (process.argv[2] == "build") {
  for (const config_key in configurations) {
    const config = configurations[config_key];
    console.log(`Building: ${config_key}`);
    build(config);
  }
} else if (process.argv[2] == "watch") {
  for (const config_key in configurations) {
    const config = configurations[config_key];
    console.log(`Starting Watchdog for: ${config_key}`);
    await watch(config);
  }
} else {
  console.log("Unknown command")
}