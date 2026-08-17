import { cpSync, existsSync, rmSync } from "node:fs"

if (!existsSync("out")) {
  throw new Error('Le dossier "out" est introuvable. next build a-t-il bien tourné avec output: "export" ?')
}

if (existsSync("dist")) {
  rmSync("dist", { recursive: true, force: true })
}

cpSync("out", "dist", { recursive: true })
console.log("Copied out/ -> dist/ for Render static publish")
