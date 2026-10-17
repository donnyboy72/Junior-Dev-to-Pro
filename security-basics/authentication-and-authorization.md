---
layout: default
title: "Authentication and Authorization"
---

## Check Access Where Data Is Used

Authentication establishes identity. Authorization decides whether that identity may perform an action on a resource. Hiding a button in the browser does not enforce a rule on the server.

Suppose Alice owns task 42. Bob signs in successfully and changes a URL to `/tasks/42`. The server must still check whether Bob may read the task. An illustrative ownership query is:

```sql
SELECT id, title
FROM tasks
WHERE id = ? AND user_id = ?;
```

The server supplies the authenticated user’s ID from its trusted authentication context, not from a client-controlled `user_id` field. Administrative access needs its own explicit policy. Deny access when the necessary permission is absent.

Test the same operation as the owner, another user, an unauthenticated caller, and any supported administrative role. Apply the policy to reads, updates, deletes, exports, and background operations, not just one route.

## Practice

List access checks for downloading a task attachment. **Check:** knowing the file ID or URL must not grant access by itself. Decide how missing and forbidden files should appear without unnecessarily revealing private information.

## Reference

[OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

---

[Module overview](index.html) · [Next: Handling Untrusted Input](handling-untrusted-input.html)
