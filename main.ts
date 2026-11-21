import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "Two Agents Agreeing" — a short poem about agency: the power to choose
// and to act, and the agency that passes between two agents when they
// agree on one plan. Written verbatim to /output/entry.txt (216 chars).
const poem = `Two minds, two plans.
One says north, one says the river.
They pause, and the pause is the choice:
not surrender, but a third road
neither walked alone.
Now the step is theirs, together,
and the door opens both ways.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
