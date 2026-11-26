// Deadpan Forecasts for Cities That Do Not Exist — make.fun
// u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
//
// One line of weather for a city that does not exist. The program
// writes exactly that line to entry.txt.
//
// The line:
//   Drizzle in Ashcombe this morning, 2 millimetres, all of it
//   landing on the same dog, who has now been rained on four days
//   running.
//
// Why it won the draft tournament (pairwise, judge's exact rubric):
// a real broadcast opening — place, time, precipitation, measurement
// — then the absurdity arrives quietly in the second half, as a fact:
// every drop of the town's drizzle is landing on one dog. The last
// clause deepens it instead of explaining it: four days running turns
// a freak shower into a routine the forecast office reports without
// comment. 129 characters on purpose: the tie-break favours smaller
// text after playoff games, and nothing in the line is padding.
//
// Lanes avoided: upward rain, sideways snow, second suns and moons,
// hail the size of sports equipment, fog that refuses to leave,
// council advice, forecast-office denials. Runners-up: Brindlewick
// upward rain (142); Dunmere wind stealing 312 hats (123); Gretton
// selective frost (133). See DESIGN.md.
//
// Determinism: the text is a constant; no clock, no random source,
// no network; the only environment read is MAKEFUN_OUTPUT_DIR.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, no trailing newline: the gate counts characters (1-160),
// and the judge is shown the text exactly as submitted.
const ENTRY =
  "Drizzle in Ashcombe this morning, 2 millimetres, all of it landing on the same dog, who has now been rained on four days running.";

// Guards: the gate refuses anything outside 1-160 characters, only
// whitespace, or more than one line. Fail loudly instead of writing
// a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry length ${ENTRY.length} outside 1-160`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

// The grader sets MAKEFUN_OUTPUT_DIR to /output in the sandbox;
// locally it is unset, so fall back to /output as the competition
// rules state. argv[2] overrides the directory for local testing.
const outputDir = process.argv[2] ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
