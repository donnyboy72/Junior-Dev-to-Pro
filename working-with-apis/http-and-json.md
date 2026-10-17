---
layout: default
title: "HTTP and JSON"
---

## Read the Whole Exchange

An HTTP request has a method, a target URL, headers, and sometimes a body. A response has a status code, headers, and sometimes a body. JSON is one possible body format; an API can also return text, files, or no content.

Assume a task service is running locally on port 3000:

```bash
curl -i http://localhost:3000/tasks/42
```

An illustrative response is:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"id":42,"title":"Write tests","done":false}
```

`GET` retrieves a representation. `POST` commonly creates a resource or starts an operation. `PUT` replaces a resource’s representation, `PATCH` applies a partial change, and `DELETE` removes a resource. Read the endpoint’s contract before choosing a method.

A `200` response usually indicates success, `201` creation, `400` an invalid request, `401` missing or invalid authentication, `403` denied access, and `500` a server failure. A `204` response has no body, so do not try to parse it as JSON.

## Practice

Describe the method, URL, expected status, and response fields for “show task 42.” Then explain how the client should behave if the server returns HTML instead of JSON. **Check:** it should treat an unexpected format as a failure rather than assuming parsing always succeeds.

## Reference

[MDN HTTP messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages)

---

[Module overview](index.html) · [Next: Authentication and API Errors](authentication-and-errors.html)
