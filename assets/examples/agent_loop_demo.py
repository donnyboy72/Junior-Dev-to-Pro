"""Offline demonstration for jrDev. No model API or filesystem tools."""

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
