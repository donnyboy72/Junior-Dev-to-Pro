---
layout: default
title: "Reviewing a Change"
---

## Start with the Problem

Read the description and expected behavior before opening individual files. Identify the trigger, the intended result, and the boundaries of the change. A correct implementation of the wrong requirement is still a problem.

Suppose a patch changes a task lookup from `find_by_id(id)` to `find_for_user(user.id, id)`. The important question is whether users can access another user’s tasks. Inspect callers, failure responses, and tests that use two different users.

Review in passes:

1. Trace the normal path from input to result.
2. Follow invalid input, missing data, and dependency failures.
3. Check authorization and data changes at trust boundaries.
4. Examine whether tests would fail if the bug returned.
5. Assess clarity and maintenance cost.

Read surrounding code when a diff hides assumptions. Running a targeted check helps, but a green test suite does not prove that the requirements are complete. For a large patch, ask for a walkthrough or smaller independently reviewable changes.

## Practice

Review a hypothetical “delete task” endpoint. **Check:** include missing task, wrong owner, repeated deletion, database failure, and the successful response. Explain which behaviors depend on the API contract.

---

[Module overview](index.html) · [Next: Writing Useful Review Feedback](writing-useful-feedback.html)
