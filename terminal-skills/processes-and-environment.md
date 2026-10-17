---
layout: default
title: "Processes and Environment Variables"
---

## Understand What a Command Inherits

A process has a working directory, environment variables, input/output streams, and an exit status. Zero conventionally means success; nonzero indicates a failure or another command-specific condition.

```bash
APP_MODE=development python3 -c 'import os; print(os.environ["APP_MODE"])'
printf '%s\n' "$?"
```

The variable applies to that command, and the status printed immediately afterward should be 0. `export APP_MODE=development` instead makes a variable available to subsequent child processes of the current shell. Never put real secrets in example files or shared shell history.

`PATH` determines where the shell searches for executables. `command -v python3` shows which executable will run. If a tool works in one terminal but not another, compare the environment and working directory.

Run a local server in the foreground while learning. `Ctrl-C` asks it to stop. If a port is occupied, identify the process and its purpose before stopping it; do not kill an unfamiliar process just to free a port.

## Final Practice

Run a Python command that exits with status 2, inspect `$?` immediately, and explain why a later successful command replaces that value. **Check:** distinguish a missing executable, a failing program, and a program waiting for input.

---

[Module overview](index.html) · [Previous: Pipes, Redirection, and Search](pipes-and-search.html)
