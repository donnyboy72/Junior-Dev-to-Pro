---
layout: default
title: Scaling Basics
---

# Scaling Basics

Your application is a hit! Instead of 10 users, you now have 10,000 users. Your server is slowing down or crashing. What do you do? 

You need to **Scale**.

## 1. Vertical Scaling (Scaling Up)
This means making your server more powerful. You add more CPU, RAM, or Disk space.

- **The Analogy**: Buying a bigger truck to carry more boxes.
- **Pros**: Simple to set up.
- **Cons**: There's a limit (you can't buy a truck as big as a mountain). If the one server crashes, the whole app is down.

```text
 [ Small Server ]  ----> [ MASSIVE SERVER ]
```

---

## 2. Horizontal Scaling (Scaling Out)
This means adding *more* servers of the same size and sharing the work between them.

- **The Analogy**: Hiring more delivery drivers with their own trucks instead of buying one massive truck.
- **Pros**: Almost no limit to how many servers you can add. If one server crashes, the others keep working!
- **Cons**: More complex to manage.

```text
 [ Server ]  ----> [ Server 1 ] [ Server 2 ] [ Server 3 ]
```

---

## When to Use Which?
- **Small projects**: Vertical scaling is often enough.
- **Large projects**: Horizontal scaling is essential for reliability and growth.

## How to Scale?
To use horizontal scaling, you need something called a **Load Balancer** to distribute the traffic among your many servers.

[Next: Load Balancing Basics](./load-balancing-basics.md)
