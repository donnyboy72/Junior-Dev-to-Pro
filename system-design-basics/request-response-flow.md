---
layout: default
title: Request-Response Flow
---

# Request-Response Flow

Every time you type a URL or click a button, a request-response cycle happens. Let's break it down into the exact steps it takes.

## The Cycle (Step-by-Step)

1.  **DNS Lookup**: The browser asks, "Where is google.com?" (DNS).
2.  **Establish Connection**: The browser connects to the server's IP address.
3.  **The HTTP Request**: The browser sends a message (e.g., `GET /index.html`).
4.  **Server Logic**: The server's code runs and may talk to a database.
5.  **The HTTP Response**: The server sends a message back (e.g., `200 OK` + some HTML code).
6.  **Browser Renders**: The browser turns the HTML code into the webpage you see.

---

## ASCII Sequence Diagram

```text
 Client (You)             Server (Them)
 |                            |
 |--- 1. "Get google.com" --->|
 |                            |
 |       2. Server works      |
 |       (Code & Database)    |
 |                            |
 |<-- 3. "Here's the HTML" ---|
 |                            |
 |   4. Page appears on screen|
```

## What's in a Request?
- **Method**: What the client wants to do (`GET` to read, `POST` to create, `PUT` to update, `DELETE` to remove).
- **Headers**: Metadata (e.g., "I am a Chrome browser").
- **Body**: The actual data (e.g., your username and password).

---

## What's in a Response?
- **Status Codes**: 
  - `2xx`: Success (e.g., `200 OK`)
  - `4xx`: Client Error (e.g., `404 Not Found`)
  - `5xx`: Server Error (e.g., `500 Internal Server Error`)
- **Headers**: Metadata (e.g., "This data is formatted as JSON").
- **Body**: The data you requested (HTML, JSON, Images, etc.).

[Next: Databases Basics](./databases-basics.md)
