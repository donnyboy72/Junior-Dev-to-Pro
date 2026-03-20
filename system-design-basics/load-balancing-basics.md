---
layout: default
title: Load Balancing Basics
---

# Load Balancing Basics

A **Load Balancer** is like a "traffic cop" for your application. It sits in front of your many servers and sends each incoming request to the server that can best handle it.

## The Problem:
If you have 10,000 users and only one server, that server will get overwhelmed. If you have 3 servers, how do you decide which user goes to which server?

## The Solution: The Load Balancer
The load balancer receives every request first and then passes it along to one of the servers.

---

## Simple Diagram

```text
       [ User 1 ] [ User 2 ] [ User 3 ]
                 \   |   /
                  v  v  v
             [ Load Balancer ]
             /       |       \
     [ Server 1 ] [ Server 2 ] [ Server 3 ]
```

## How It Decides (Algorithms)
How does the "traffic cop" decide which server to use? 
- **Round Robin**: Go in order (Server 1, then Server 2, then Server 3, then back to 1).
- **Least Connections**: Send the request to the server with the fewest active users right now.
- **IP Hash**: Always send a specific user to the same server.

---

## Why Use It?
1.  **Redundancy**: If Server 1 crashes, the Load Balancer just stops sending traffic there. Users don't even notice.
2.  **Scalability**: You can add 10 more servers behind the Load Balancer without changing anything for the user.
3.  **Speed**: It prevents any single server from getting too busy.

[Next: Caching Basics](./caching-basics.md)
