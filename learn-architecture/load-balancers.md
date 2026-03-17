---
layout: default
title: Load Balancers
---

# Load Balancers

When a website becomes popular, a single server can't handle all the traffic. It's like a restaurant with only one waiter—no matter how fast the waiter is, they'll eventually get overwhelmed.

A **Load Balancer** is like a host at the front of the restaurant who directs customers to different waiters.

---

# What is a Load Balancer?

A load balancer is a device or software that distributes incoming network traffic across multiple servers.

- **Examples:** Nginx, HAProxy, AWS Elastic Load Balancer (ELB).

---

# Architecture Diagram (The Load Balancer)

A load balancer sits in front of your server group:

```text
       [ User (Client) ]
               ↓
       [ Load Balancer (Nginx) ]
               ↓
       ----------------- (Distributes traffic)
       ↓               ↓               ↓
   [ Server 1 ]    [ Server 2 ]    [ Server 3 ]
       ↓               ↓               ↓
       [----------------- Database -----------------]
```

---

# Why Load Balancers Exist

### 1. High Availability
If one of your servers crashes, the load balancer simply stops sending traffic to it and redirects users to the other healthy servers. Your app stays online!

### 2. Scalability
You can easily add or remove servers as your traffic changes throughout the day.

### 3. Better Performance
By spreading the work across many servers, each server has more resources available to handle its requests quickly.

---

# How Junior Developers Encounter This

- **Nginx:** The most common tool for load balancing on a single server.
- **Auto-Scaling Groups:** A cloud configuration that automatically adds more servers (and updates the load balancer) when your app gets busy.
- **Round Robin:** The simplest way to balance load—sending one request to Server 1, the next to Server 2, and so on.

---

# Common Beginner Mistakes

### 1. Sticky Sessions
If Server 1 stores a user's session data and the next request goes to Server 2, the user will be "logged out." You need to handle "sticky sessions" or store session data in a central database (like Redis).

### 2. Not Testing Failover
If you have three servers but your load balancer doesn't know when one is down, users will get error messages 33% of the time! Always set up "Health Checks."

### 3. Single Point of Failure
If you only have one load balancer, and *it* crashes, your whole app goes offline. In production, you often need two load balancers working together.

---

# Real-World Example: Google Search

When you go to google.com, you aren't talking to one single server. You're talking to a massive load balancer that directs your search to one of thousands of servers across the world!

---

# Next Lesson

Sometimes, you have tasks that take a long time to finish. You shouldn't make the user wait:

➡ **[Message Queues](message-queues.md)**
