---
layout: default
title: "Pipes, Redirection, and Search"
---

## Treat Output as Input

A pipe connects one command’s standard output to another command’s standard input. Try this in your practice directory:

```bash
printf '%s\n' 'INFO started' 'ERROR timeout' 'INFO stopped' > app.log
grep 'ERROR' app.log
cat app.log | wc -l
```

The search prints `ERROR timeout`; the line count is 3. For this count, `wc -l < app.log` avoids the extra `cat` process. Pipelines become useful when each step transforms the output for the next step.

`>` overwrites output, `>>` appends, and `2>` redirects standard error. For example, `some-command > output.txt 2> errors.txt` separates normal results from diagnostics. That command is a pattern, not a program installed on your machine.

Use `rg 'pattern' .` to search a project when ripgrep is installed, or `grep -R 'pattern' .` otherwise. Quote patterns so the shell does not interpret them first. A filename containing spaces should remain one argument.

## Practice

Append another error line, count matching lines with `grep -c`, and save only the matching lines to `errors.txt`. **Check:** appending should preserve the original three lines. Explain why writing search output back into its input file with `>` can destroy the original data.

---

[Module overview](index.html) · [Previous: Navigating Files and Directories](navigation-and-files.html) · [Next: Processes and Environment Variables](processes-and-environment.html)
