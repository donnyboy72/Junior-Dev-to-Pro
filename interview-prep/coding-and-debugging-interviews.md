---
layout: default
title: "Coding and Debugging Interviews"
---

## Make Your Reasoning Visible

Before coding, clarify the inputs, outputs, constraints, and edge cases. Work through a small example, propose a straightforward solution, and explain its cost. Improve it when the constraints justify doing so.

For “return the first repeated task ID,” clarify whether order matters. A set can track previously seen hashable IDs:

```python
def first_repeated(ids):
    seen = set()
    for task_id in ids:
        if task_id in seen:
            return task_id
        seen.add(task_id)
    return None
```

For `[7, 3, 7, 3]`, the result is `7`; for an empty list or unique IDs, it is `None`. Assuming ordinary set behavior, time is O(n) on average and extra space is O(n). State that IDs must be hashable and that `None` is the no-result marker for this contract.

In debugging exercises, reproduce the failure and follow the evidence before rewriting the function. Narrate important decisions without talking continuously through every keystroke.

## Practice

Test empty, unique, immediately repeated, and late-repeated inputs. **Check:** distinguish the first value that repeats during traversal from the smallest duplicated value; they are different requirements.

---

[Module overview](index.html) · [Previous: Explaining Your Projects](explaining-your-projects.html) · [Next: Behavioral Interviews and Team Fit](behavioral-interviews-and-team-fit.html)
