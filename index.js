#!/usr/bin/env node
import { stdin, stdout } from "node:process";
import { createReverseLines } from "./reverse-lines.js";

createReverseLines(stdin, stdout, stdout.columns);
