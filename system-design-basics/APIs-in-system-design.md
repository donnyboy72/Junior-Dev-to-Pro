---
layout: default
title: APIs in System Design
---

# APIs in System Design

An **API** (Application Programming Interface) is a set of rules that allow two different software systems to talk to each other.

## The Analogy: The Menu
Think of an API as a restaurant menu. 
- You (the client) look at the menu to see what's available.
- You place an order with the waiter (the request).
- The kitchen (the server) prepares the order and the waiter brings it back (the response).
- You don't need to know how the kitchen cooked the food; you just need to know how to order from the menu.

---

## Why are APIs Important in System Design?
In a large system, different services need to communicate.
- The **Authentication Service** tells the **Profile Service** that the user is logged in.
- The **Payment Service** tells the **Order Service** that the purchase was successful.

## Types of APIs
1.  **REST (Representational State Transfer)**: The most common type. It uses HTTP methods like `GET`, `POST`, `PUT`, and `DELETE`.
2.  **GraphQL**: A modern way to ask for exactly the data you want.
3.  **gRPC**: A super fast way for servers to talk to each other in large networks.

---

## Simple Diagram

```text
 [ Your App ] -- (API Request: "Send Email") --> [ Email Service API ]
                                                        |
                                                        | (Processing...)
                                                        v
 [ Your App ] <--- (API Response: "Success") --- [ Email Service API ]
```

## Takeaway
APIs are the "glue" that holds your systems together. They allow different parts of an application to be built separately but still work together perfectly.

[Next: Designing Simple Systems](./designing-simple-systems.md)
