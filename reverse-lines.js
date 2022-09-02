import readline from "node:readline";

export function createReverseLines(input, output) {
  const rl = readline.createInterface({
    input,
    output,
    terminal: false,
  });

  rl.addListener("line", (line) => {
    const reversed = line.split("").reverse().join("");
    output.write(reversed);
    output.write("\n");
  });

  return () => rl.close();
}
