---
layout: default
title: "Understanding the Agent Loop"
---

## The Host Executes the Tools

A model can request a tool call, but the hosting program decides whether and how to execute it. The host keeps the conversation, sends tool descriptions, validates requests, executes permitted tools, and returns results for another model turn.

```text
Task + context → model response
                    ↓
         final answer OR tool request
                              ↓
                 validate and authorize
                              ↓
                     execute tool
                              ↓
               return result → model
```

A tool needs a name, an input contract, an implementation, and a policy governing its use. Unknown tools, malformed arguments, and tool failures should produce controlled outcomes. Do not blindly dispatch arbitrary model output to a shell.

## Run a Tiny Offline Demonstration

Save this original example as `loop_demo.py` in a disposable directory and run `python3 loop_demo.py`. It uses a scripted stand-in for the model, not an AI service. It demonstrates dispatch and bounded iteration without a credential or filesystem access.

```python
import json

fixtures = {"tasks.py": "def count_tasks(tasks): return len(tasks)"}

def read_fixture(arguments):
    if set(arguments) != {"path"} or arguments["path"] not in fixtures:
        raise ValueError("Only the named practice fixture is available")
    return fixtures[arguments["path"]]

tools = {"read_file": read_fixture}
turns = [
    {"type": "tool_call", "id": "call-1", "name": "read_file",
     "arguments": {"path": "tasks.py"}},
    {"type": "final", "text": "The function returns the task count."},
]

for turn in turns[:4]:
    if turn["type"] == "final":
        print(turn["text"])
        break
    try:
        result = tools[turn["name"]](turn["arguments"])
        output = {"call_id": turn["id"], "result": result}
    except (KeyError, TypeError, ValueError) as error:
        output = {"call_id": turn.get("id"), "error": str(error)}
    print(json.dumps(output))
else:
    print("Stopped: no final answer within the turn limit")
```

A real implementation replaces `turns` with successive model responses and sends each result back before requesting the next response. Keep the provider’s required message order and tool-call identifiers. Handle truncation, errors, and stop reasons rather than assuming every response contains a final answer.

[Download the complete offline demo](../assets/examples/agent_loop_demo.py). It runs with Python’s standard library.

## Practice

Replace `tasks.py` with an unavailable path, then replace `read_file` with an unknown tool. **Check:** the demo reports a controlled error rather than reading another file or crashing. Its scripted final answer still appears after an error: explain why a real agent must ground its answer in the returned evidence.

Before connecting a live model, add total-call, elapsed-time, output-size, and spending limits. A per-response token limit alone does not bound an entire session.

## Reference

[Anthropic’s tool-call lifecycle](https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls) documents the provider-specific response and result format.

---

[AI coding overview](index.html) · [Previous: Setting Up Your First Coding Agent](setting-up-a-coding-agent.html) · [Next: Permissions, Privacy, and Prompt Injection](permissions-privacy-and-prompt-injection.html)
