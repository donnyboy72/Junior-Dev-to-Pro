---
layout: default
title: "Authentication and API Errors"
---

## Identity and Permission Are Separate

Authentication identifies a caller. Authorization decides what that caller may do. A valid token must not let one user read another user’s private tasks.

A service might require a bearer token:

```http
GET /tasks/42 HTTP/1.1
Host: api.example.test
Authorization: Bearer <access-token>
Accept: application/json
```

This is an illustrative request, not a usable credential. Send credentials over HTTPS. Keep server credentials in a secret manager or protected runtime configuration; never embed a private API key in browser JavaScript or commit it to Git.

Handle errors by category. Invalid input requires a corrected request. An expired credential may require signing in again. A rate limit response (`429`) may include `Retry-After`. A temporary server failure may justify a bounded retry with backoff.

Do not automatically repeat a payment or other non-idempotent operation after a timeout: the server might already have completed it. Use an API-supported idempotency key or query the operation’s status.

## Practice

Write the user-facing behavior for `401`, `403`, `429`, and a network timeout. **Check:** retrying a denied request unchanged does not solve a permission problem; retrying a timed-out creation can create duplicates.

---

[Module overview](index.html) · [Previous: HTTP and JSON](http-and-json.html) · [Next: Building a Reliable API Client](reliable-api-clients.html)
