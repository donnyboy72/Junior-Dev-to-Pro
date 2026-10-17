---
layout: default
title: "Understanding the Task"
---

## Turn a Request into Examples

“Improve task search” is too broad to implement confidently. Ask what users cannot do today, what a successful result looks like, and which cases matter most.

For a title-search feature, acceptance criteria might be:

- Searching for `test` finds “Write tests.”
- Matching ignores letter case.
- A blank query shows the default task list.
- Users only see tasks they are allowed to access.
- No matches produces a useful empty state.

These statements are observable. “Use clean code” is valuable guidance but does not define the feature’s behavior.

Read the existing entry point, related tests, and data model before estimating the change. Identify external dependencies and decisions that need another person. Record assumptions when you can make a reasonable reversible choice; ask early when an answer changes the design or delivery scope.

## Practice

Write five acceptance criteria for adding a task due date. **Check:** cover missing dates, invalid dates, display format, editing, and whose timezone determines “overdue.” Identify one question whose answer would change the implementation.

---

[Module overview](index.html) · [Next: Implementing and Verifying a Change](implementing-and-verifying.html)
