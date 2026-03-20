---
layout: default
title: Designing Simple Systems
---

# Designing Simple Systems: The Login System

Let's put everything we've learned together and design a simple, common system: **The User Login System**.

## The Goal:
A user should be able to enter their username and password and be logged into the application.

---

## Step 1: The Components
1.  **The Client**: The browser where the user types their username and password.
2.  **The Server**: The application running the "Login" code.
3.  **The Database**: Where the user's username and (hashed) password are stored.
4.  **The Load Balancer**: Distributes traffic if we have many servers.

---

## Step 2: The Flow
1.  **Request**: The client sends a `POST` request to the Load Balancer with the username and password.
2.  **Routing**: The Load Balancer sends the request to one of our servers.
3.  **Authentication**: The server asks the database for the user's record.
4.  **Verification**: The server compares the password the user sent with the one in the database.
5.  **Response**: If they match, the server sends back a "Success" message and a `200 OK` status code.

---

## Simple Diagram

```text
       [ User ]
          |
          v
   [ Load Balancer ]
          |
          v
   [ Login Server ]
    /          \
   /            \
  v              v
[ Database ] [ Auth Cache ]
(Passwords)  (Sessions)
```

## Considerations for Scale
- **Is it fast?**: We might use a **Cache** (like Redis) to store user sessions so we don't have to check the database every time.
- **Is it reliable?**: If the database goes down, we need a **Replica** (a backup) ready to take over.
- **Is it secure?**: We never store passwords in "plain text"; we always "hash" them first.

---

## Practice Problem
Try to draw a simple diagram for a "To-Do List" application. What components would you need?

[Next: Common Design Mistakes](./common-design-mistakes.md)
