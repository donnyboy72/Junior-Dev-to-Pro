---
layout: default
title: "Tools, Reusable Instructions, and MCP"
---

## Separate Guidance from Capability

Reusable instructions describe how to approach a recurring task. A tool is executable capability, such as reading a file or querying an API. A protocol connects software components using agreed message formats. These pieces solve different problems.

For example, a reusable review checklist can ask the assistant to inspect permission checks and failure paths. It does not grant database access. A database tool may execute a query, but still needs authentication, authorization, and limits enforced by its host.

Some products package instructions and resources as “skills.” The format, discovery behavior, and installation process depend on the product. Read the tool’s documentation before assuming a file will be automatically loaded.

## What MCP Adds

Model Context Protocol (MCP) standardizes communication between AI applications and servers exposing capabilities such as tools, resources, and prompts. A host application manages clients connected to those servers. This can let multiple applications use the same integration instead of each implementing a custom adapter.

MCP does not make an integration trustworthy or authorize every action it exposes. Inspect the server’s source or publisher, requested access, data destinations, and supported operations. Begin with the narrowest useful connection and review write-capable operations separately.

The [official MCP architecture guide](https://modelcontextprotocol.io/docs/learn/architecture) explains the roles and protocol boundaries.

## Start with One Repeated Task

Before adding a connector, ask whether a small instruction template and existing tools already solve the problem. For a local coding exercise, direct file-reading tools can be enough. An external connector becomes useful when the task needs data or actions in another system.

## Practice

Design a read-only issue lookup integration without installing it. **Check:** specify which project it may read, what fields it returns, where credentials live, how failures appear, and which write operations it must not expose. Explain which rules belong in documentation and which need executable enforcement.

---

[AI coding overview](index.html) · [Previous: Permissions, Privacy, and Prompt Injection](permissions-privacy-and-prompt-injection.html) · [Next: Cost, Context Limits, and Evaluation](cost-context-and-evaluation.html)
