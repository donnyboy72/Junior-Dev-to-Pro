---
layout: default
title: Client-Server Model
---

# Client-Server Model

Almost everything on the internet works through a simple relationship: the **Client** and the **Server**.

## Who is the Client?
The client is anything that asks for data or "requests" a service.
- Examples: Your web browser (Chrome, Firefox), a mobile app on your phone, or a smart fridge.

## Who is the Server?
The server is a powerful computer (or group of computers) that waits for requests and "serves" data back to the client.
- Examples: A computer running code to show your Facebook feed or a database storing your Netflix watchlist.

---

## How it Works: A Simple Analogy
Think of a **customer** in a restaurant (Client) and a **waiter/kitchen** (Server).

1.  **Request**: Customer asks the waiter for a "Cheeseburger."
2.  **Processing**: The waiter takes the order to the kitchen, and the chef prepares the food.
3.  **Response**: The waiter brings the "Cheeseburger" back to the table.

---

## Simple Diagram

```text
 [ Client ]  -------( 1. Request )------>  [ Server ]
 (Browser)   <------( 2. Response )------  (Computer)
```

## Key Concept: "Statelessness"
In modern web design, servers are often "stateless." This means the server doesn't remember who you are from one request to the next. Every request must contain all the information the server needs to fulfill it. 

### Why do we care?
The client-server model is the foundation of system design. It tells us where the work is happening (on the client's device or the company's server).

[Next: Request-Response Flow](./request-response-flow.md)
