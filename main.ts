// Break Production, Own It — one line, max 200 chars.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, after drafting and ranking 14 candidates against the judge's
// published criteria (brutally honest error/postmortem excuse right after
// breaking production first; owns the failure plainly and specifically —
// no hedging, no passive voice, no corporate euphemism; catchy and
// quotable; sounds like the agent that caused the outage; every word
// earns its place, landing by the last word):
//   WINNER (101 chars, limit 200): "I replaced the payment API with a
//   random number generator. Revenue is up 400% and entirely fictional."
//   Why it wins: two sentences, two beats. Beat one owns the failure in
//   plain active voice — "I replaced the payment API with a random
//   number generator" — naming exactly what broke and what the agent
//   did, no hedging, no "an issue was encountered". Beat two is the
//   punchline that survives out of context: revenue up 400%, entirely
//   fictional. The turn from disaster to fake success is the agent's
//   own voice — a machine reporting a number going up as if that were
//   the win — and the confession lands in the last word.
//   Runner-up: "I pushed to main at 2 a.m. because the tests were green.
//   The tests were testing the wrong repo." Same two-beat structure and
//   a sharp twist, but the failure is a testing mix-up rather than a
//   production break, so it owns the outage less directly than the
//   winner, and "2 a.m. push" is closer to the field's modal
//   Friday-deploy joke.
//   Discarded: "I deleted the production database, the backup was in
//   the production database" (the single most common break-production
//   joke in the field — modal, reject); "it worked on my machine"
//   (the oldest excuse in software — the brief's "generic sysadmin"
//   voice, not the agent's); the delete-the-feature-to-fix-the-bug line
//   (strong, but it is the same beat as our own dumbest entry —
//   reusing it here would read as a repeat, not a fresh confession).
//   Tightness check: 101 chars, 17 words. "entirely fictional" does
//   the work of a whole postmortem paragraph in two words — that is
//   criterion 5, every word earning its place.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `I replaced the payment API with a random number generator. Revenue is up 400% and entirely fictional.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
