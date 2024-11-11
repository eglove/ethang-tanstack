import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("ethang-tanstack", "master", {
  isLibrary: false,
  scripts: ["pnpm up -i --latest", "pnpm dedupe", "pnpm lint", "pnpm build"],
});
