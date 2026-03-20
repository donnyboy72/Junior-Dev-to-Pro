---
layout: default
title: What is System Design?
---

# What is System Design?

If you were building a small wooden doghouse, you'd just grab some wood, nails, and a hammer. But if you were building a skyscraper, you'd need a blueprint, structural engineers, and a plan for plumbing, electricity, and elevators.

**System Design** is the "blueprint" for building software "skyscrapers."

## Simple Definition
System design is the process of deciding how to organize your software components (like servers, databases, and APIs) so that they can handle millions of users efficiently and reliably.

---

## The Mental Model
Think of system design as organizing a large restaurant. 

1.  **The Kitchen** (Servers): Where the food is prepared.
2.  **The Pantry** (Databases): Where ingredients are stored.
3.  **The Waiters** (APIs): Who take orders from the table to the kitchen.
4.  **The Receptionist** (Load Balancer): Who greets customers and tells them which table to sit at.

### Why do we need it?
- **Availability**: The system should always be "up" (no 404 errors!).
- **Scalability**: It should handle more users as the app grows.
- **Performance**: It should be fast, not laggy.
- **Reliability**: It should work correctly every time.

---

## Diagram: The High-Level View

```text
       [ User ]
          |
          v
   [ Load Balancer ]
    /      |      \
[Server1] [Server2] [Server3]
    \      |      /
      [ Database ]
```

## Takeaway
In system design, we don't just focus on the code within a single function; we focus on how all the "moving parts" of an application work together.

[Next: Client-Server Model](./client-server-model.md)
