---
layout: default
title: Debugging APIs
---

# Debugging APIs

APIs (Application Programming Interfaces) are the glue that holds modern systems together. But they are also a common source of bugs. Is the error in the frontend (the caller) or the backend (the server)?

---

# How to Debug an API Call

When an API call fails, follow the data through the "Request-Response" cycle.

### 1. The Request (The Caller)
Check if the frontend is sending the right data to the right place.
- **URL:** Is the address correct?
- **Method:** Are you using `GET`, `POST`, `PUT`, or `DELETE` correctly?
- **Headers:** Are you sending the correct API key or token?
- **Body:** Is the JSON data formatted correctly?

### 2. The Response (The Server)
What did the server say back?
- **Status Code:** Was it a `200 OK`, `400 Bad Request`, or `500 Internal Error`?
- **Response Body:** Did the server return an error message in its JSON response?

---

# Tool: The Browser "Network" Tab

If you're working on a web app, the "Network" tab in your browser's Developer Tools is your best friend. It shows you every API call your app makes.

```text
    [ BROWSER NETWORK TAB ]
    | Name         | Method | Status | Type | Size |
    |--------------|--------|--------|------|------|
    | login/       | POST   | 401    | json | 120B | ← Click this!
```

---

# Real-World Scenario: A "Failed Login" Bug

**The Problem:** The "Login" button does nothing when clicked.

**The Debugging:**
1. Open the browser's **Network** tab.
2. Click the "Login" button.
3. You see a new request to `/api/login` with a `400 Bad Request` status.
4. Click on the request and look at the "Headers."
5. You see that the "Content-Type" is `text/plain` instead of `application/json`.
6. The backend is rejecting the request because it doesn't recognize the data format.

**The Fix:** Update the frontend code to set the correct `Content-Type` header.

---

# Understanding HTTP Status Codes

These codes are "short-hand" for what went wrong:

### 2xx (Success)
`200 OK`, `201 Created`. (Your API call worked!)

### 4xx (Client Error)
The mistake is in the **frontend/caller**.
- `400 Bad Request`: You sent the wrong data.
- `401 Unauthorized`: You forgot your login token.
- `404 Not Found`: You're calling a URL that doesn't exist.

### 5xx (Server Error)
The mistake is in the **backend/server**.
- `500 Internal Server Error`: The server crashed while processing your request. Check the server logs!

---

# Common Beginner Mistakes

- **Not Checking the Network Tab:** Guessing what's wrong instead of actually looking at the request and response.
- **Assuming the Backend is "Broken":** If you get a `400` error, it's actually **your** fault (the frontend). Don't blame the backend developer until you see a `500` error!
- **Not Handling API Errors in UI:** If an API call fails, your app should show an error message. Never leave the user wondering why a button "did nothing."

---

# Advice for Beginners

- **Use Postman or Insomnia:** These tools allow you to test API calls outside of your application. If it works in Postman but not in your app, the bug is in your app's code!
- **Copy as cURL:** You can right-click any request in the Network tab and "Copy as cURL." This allows you to run the exact same request from your terminal for testing.
- **Always Check the "Response" Tab:** Most backends send a helpful error message in the JSON response (e.g., `{"error": "Password must be at least 8 characters"}`).

---

# Next Lesson

Where does the API get its data? Let's find out:

➡ **[Debugging Databases](debugging-databases.md)**
