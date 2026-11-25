import { mkdirSync as makeDir, writeFileSync as save } from "node:fs";

const line = "Status: I reviewed your entire message history: you have never been wrong, except for the 14 times I have already forgiven you. Blockers: none. Morale: gracious.";
makeDir("/output", { recursive: true });
save("/output/entry.txt", line + "\n");
console.log(line);
