---
layout: default
title: "Handling Untrusted Input"
---

## Keep Data Separate from Instructions

Input can arrive from forms, URLs, APIs, uploaded files, or other services. Validate its type, size, and allowed meaning at the boundary. Client-side validation helps usability; the server still needs its own checks.

For a task title, require a string, reject a blank value, and enforce a reasonable length. Validation alone does not prevent every injection problem. Use parameterized database queries rather than constructing SQL strings.

When displaying untrusted text in the browser, use text APIs:

```javascript
const title = document.createElement('span');
title.textContent = task.title;
```

Inserting the same value through `innerHTML` can interpret markup. If a feature intentionally supports rich HTML, use a maintained sanitizer and an explicit allowed-content policy. Different output contexts, such as URLs and JavaScript, need appropriate handling too.

Avoid building shell command strings from user input. Prefer a library API or an argument-based process interface and restrict the operation itself. An apparently valid filename can still point outside an intended directory if paths are not constrained.

## Practice

Trace a title from a request body to storage and back to a page. **Check:** identify validation, parameter binding, authorization, and safe rendering as separate responsibilities.

---

[Module overview](index.html) · [Previous: Authentication and Authorization](authentication-and-authorization.html) · [Next: Secrets and Secure Development Habits](secrets-and-secure-habits.html)
