---
layout: default
title: "Writing Useful Logs"
---

## Record Events with Context

A useful log explains what happened and provides the context needed to investigate it. Structured fields are easier to filter than inconsistent sentences:

```json
{"level":"error","event":"task_save_failed","request_id":"req-123","dependency":"database","duration_ms":5021}
```

Use a consistent timestamp and level convention in the actual logging system. `debug` captures development detail, `info` records meaningful normal events, `warning` signals an unexpected but handled condition, and `error` records an operation that failed. Teams may define these levels more precisely.

Include a request or trace identifier so events from one operation can be connected. Keep names stable: searching for `task_save_failed` should not depend on which developer wrote the message.

Do not log passwords, access tokens, full private request bodies, or sensitive records. Even identifiers may need protection depending on context. Bound field sizes and encode untrusted values through the logger so line breaks or control characters cannot forge confusing entries.

## Practice

Improve “Something went wrong” for a failed task save. **Check:** include the operation, failure category, and correlation ID, while leaving task contents and credentials out. Explain which detail belongs in an internal log versus the user-facing error.

---

[Module overview](index.html) · [Next: Metrics and Alerts](metrics-and-alerts.html)
