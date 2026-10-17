---
layout: default
title: "Setting Up Your First Coding Agent"
---

## Use a Workshop to See the Pieces

[Geoffrey Huntley’s coding-agent workshop](https://github.com/ghuntley/how-to-build-a-coding-agent) is a useful companion: its standalone Go examples progressively add capabilities. This lesson provides setup guidance and original exercises; the upstream repository is the source of its implementation. Check its current README and dependency files before installing.

## Prepare a Disposable Environment

Use a dedicated VM or development container containing only workshop files and harmless fixtures. Do not mount your home directory, SSH keys, cloud credentials, or production repositories. File contents supplied to a hosted model leave the local machine. Use an account and API key intended for this practice, with appropriate usage limits.

You need Git, a Go toolchain compatible with the upstream `go.mod`, and an Anthropic API credential. The linked module currently declares Go 1.24.2. Installation and model availability can change; follow [Go installation guidance](https://go.dev/doc/install) and check the upstream files rather than relying on a frozen version in a lesson.

From a new practice directory inside that environment:

```bash
git clone https://github.com/ghuntley/how-to-build-a-coding-agent.git
cd how-to-build-a-coding-agent
git rev-parse HEAD
go version
go mod download
```

Record the commit ID so your notes identify the version you examined. Read [the upstream chat implementation](https://github.com/ghuntley/how-to-build-a-coding-agent/blob/trunk/chat.go) and [module definition](https://github.com/ghuntley/how-to-build-a-coding-agent/blob/trunk/go.mod) before continuing.

## Supply the Credential Without Printing It

In a Bash or Zsh terminal, enter the key interactively:

```bash
printf 'Anthropic API key: '
read -r -s ANTHROPIC_API_KEY
printf '\n'
export ANTHROPIC_API_KEY
test -n "$ANTHROPIC_API_KEY" && printf 'Key is set\n'
```

Input is hidden; `Ctrl-C` cancels entry. Do not put the real key into a copied command, print it for troubleshooting, or commit it. Supplying a credential does not mean the application should log it.

## Start with Chat, Then Read One File

```bash
go run chat.go
```

Ask a harmless question and quit with `Ctrl-C`. Then start `go run read.go` and ask it to explain a small text file you created in the workshop directory. Confirm that its answer agrees with the file.

Each example is a separate program. Run a named file rather than `go run .`, which attempts to compile the directory together. If the API rejects the configured model, inspect `runInference`, compare the model with your account’s available models, and follow the upstream SDK documentation for a compatible change.

## Add Capabilities Deliberately

Read each implementation before trying the next example. Listing and reading should work before editing. Review a file diff before accepting a write. [The command-running implementation](https://github.com/ghuntley/how-to-build-a-coding-agent/blob/trunk/bash_tool.go) invokes a shell directly; it does not provide a per-command approval boundary or operating-system sandbox. Use it only inside the disposable environment you prepared, and do not mistake a prompt instruction for enforced isolation.

## Troubleshooting and Practice

For missing authentication, check whether the variable is set without displaying it. For rate or usage failures, inspect your provider account. For dependency errors, compare the installed toolchain with `go.mod`. Verbose output may include file contents or tool arguments; redact logs before sharing.

**Check:** explain which code sends requests, which function reads a file, where a tool result returns to the model, and what prevents access outside your practice environment. If nothing enforces that last boundary, stop before adding write or shell access.

When finished, stop the program and run `unset ANTHROPIC_API_KEY` in the shell. The next lesson shows an agent loop without an API key.

---

[AI coding overview](index.html) · [Previous: Debugging and Testing with AI](debugging-and-testing-with-ai.html) · [Next: Understanding the Agent Loop](understanding-the-agent-loop.html)
