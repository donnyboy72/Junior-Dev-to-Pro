---
layout: default
title: "Building a Reliable API Client"
---

## Make Failure Part of the Interface

A useful client has a timeout, checks status codes, validates response shape, and returns enough context to diagnose failures. This Python example uses the standard library against a hypothetical local service:

```python
import json
from urllib.request import urlopen

def get_tasks():
    with urlopen("http://localhost:3000/tasks", timeout=5) as response:
        data = json.load(response)
    if not isinstance(data, dict) or not isinstance(data.get("items"), list):
        raise ValueError("Expected an object containing an items list")
    return data["items"]
```

HTTP errors, connection failures, and malformed JSON propagate to the caller. The application boundary should translate them into an appropriate message and a diagnostic event. Do not catch every exception and silently return an empty list: users cannot distinguish an outage from having no tasks.

Large collections often use pagination. Follow the documented cursor or next-page URL until completion, with a maximum page limit to prevent accidental loops. A first page is not necessarily the entire dataset.

## Final Practice

Design tests for a successful response, invalid JSON, missing `items`, a timeout, and a two-page result. Explain which errors may be retried and set a retry budget. **Check:** your client must eventually stop, and failures must remain distinguishable from successful empty results.

Continue with [Testing APIs](../testing/testing-apis.html).

---

[Module overview](index.html) · [Previous: Authentication and API Errors](authentication-and-errors.html)
