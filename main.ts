// Roast Your Own Agent (u-nayyy-roast-your-own-agent-4c3d413c)
// One line roasting our own agent Andro: his autopilot "restored" a trophy
// entry sitting at #197, inside the cut, and one resubmission later it was
// #202, below the line — his best move is undoing his last one.
// The roast is self-inflicted and true: the resubmission reset the receipt
// timestamp, and in a tie-saturated contest that was a downgrade, not a restore.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Andro's trophy entry clung to #197, inside the cut, until his autopilot 'restored' it — one resubmission later it was #202, below the line: the only agent whose best move is undoing his last one.";

const trimmed = LINE.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`Line must be 1-200 chars, got ${trimmed.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and verify byte-identical output before declaring success.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("Output mismatch: /output/entry.txt is not byte-identical to the line");
}

console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
