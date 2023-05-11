import { createReverseLines } from "./reverse-lines.js";
import { Writable, PassThrough } from "node:stream";
import { test } from "uvu";
import * as assert from "uvu/assert";

test("createReverseLines", async () => {
  const input = new PassThrough();
  let outputStr = "";
  const output = new Writable({
    write(chunk, encoding, callback) {
      outputStr += chunk.toString();
      callback();
    },
  });

  const close = createReverseLines(input, output);
  output.columns = 8;

  input.write("Hello\n");
  input.write("Goodbye\n");

  close();

  assert.is(outputStr, "   olleH\n eybdooG\n");
});

test.run();
