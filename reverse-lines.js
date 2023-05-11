import readline from "node:readline";
import { leftPad } from "@jamieswhiteshirt/suspicious-package";

export function createReverseLines(input, output) {
  const rl = readline.createInterface({
    input,
    output,
    terminal: false,
  });

  rl.addListener("line", (line) => {
    const reversed = line.split("").reverse().join("");
    output.write(leftPad(reversed, output.columns));
    output.write("\n");
  });

  return () => rl.close();
}
