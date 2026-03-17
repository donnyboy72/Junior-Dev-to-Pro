---
layout: default
title: Client-Server Architecture
---

# Client-Server Architecture

Client-server architecture is the foundational model of the internet. It describes how two or more computers talk to each other to accomplish a task.

---

# What is a Client?

A **client** is a device or software that makes requests to a server for information or services.

- **Examples:** Your web browser (Chrome, Firefox), a mobile app on your phone, or even a command-line tool like `curl`.

---

# What is a Server?

A **server** is a computer or software program that listens for incoming requests from clients and provides a response.

- **Examples:** A web server (like Apache or Nginx), an API server (Node.js, Python), or a database server.

---

# Architecture Diagram (Request-Response)

The relationship between a client and server is based on the **request-response cycle**:

```text
       [ Client (Browser) ]
               ↓
       (1) "GET /homepage" (Request)
               ↓
       [ Server (App Server) ]
               ↓
       (2) "200 OK - <html>...</html>" (Response)
               ↓
       [ Client (Browser) ]
```

---

# Why Client-Server Exists

### 1. Centralized Control
By having a central server, you can control the data and security for all your users in one place.

### 2. Efficiency
The server can be a powerful machine designed to handle complex tasks, while the client can be a simple phone or laptop.

### 3. Scalability
You can have thousands of clients all talking to a single server (or a group of servers).

---

# How Junior Developers Encounter This

You'll see client-server architecture in your work through:

- **API Requests:** When you use `fetch()` or `axios` in JavaScript to get data from a backend.
- **HTTP Status Codes:** Understanding why a request failed (e.g., 404 Not Found, 500 Internal Server Error).
- **Environment Variables:** Configuring your frontend app to point to the correct server URL (e.g., `localhost:3000` vs. `api.production.com`).

---

# Common Beginner Mistakes

### 1. Hardcoding Server URLs
Never hardcode your server's IP address or URL directly in your code. Use environment variables so it's easy to change.

### 2. Not Handling Errors
Clients should always be prepared for a server to fail. If the server is down, your app shouldn't just "freeze"—it should show an error message.

### 3. Assuming the Client is Secure
Never trust the client! Any validation you do on the frontend must also be done on the backend. A malicious user can easily bypass your frontend checks.

---

# Real-World Example: Instagram

- **Client:** The Instagram app on your phone.
- **Server:** Instagram's massive data centers that store your photos, likes, and followers.
- **Request:** When you scroll down, your phone sends a request: "Give me the next 10 photos for this user."
- **Response:** The server finds the photos and sends them back to your phone to display.

---

# Next Lesson

Now let's look at the "language" of client-server communication:

➡ **[API-Driven Architecture](api-driven-architecture.md)**
