import { leftPad } from "@jamieswhiteshirt/suspicious-package";
import readline from "node:readline";

export function createReverseLines(input, output) {
  const rl = readline.createInterface({
    input,
    output,
    terminal: false,
  });

  rl.addListener("line", (line) => {
    const reversed = line.split("").reverse().join("");
    const padded = leftPad(reversed, output.columns);
    output.write(padded);
    output.write("\n");
  });

  return () => rl.close();
}
