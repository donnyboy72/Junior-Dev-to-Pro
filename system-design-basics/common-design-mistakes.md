---
layout: default
title: Common Design Mistakes
---

# Common Design Mistakes

Building a large-scale system is hard. Here are some of the most common mistakes that even experienced developers make.

## 1. Over-Engineering
Adding complex features before they are needed.
- **Example**: Building a system for 10 million users when you only have 100.
- **Problem**: It takes too long to build and is expensive to maintain.

## 2. Ignoring "Single Point of Failure" (SPOF)
Having a component that, if it fails, crashes the whole system.
- **Example**: Having only one database with no backup.
- **Problem**: If the database server crashes, your whole app goes down.

```text
 [ Server 1 ] [ Server 2 ] [ Server 3 ]
           \      |      /
            \     |     /
             v    v    v
           [ One Database ] <--- SPOF!
```

---

## 3. Not Monitoring Performance
Building a system and then never checking how it's actually doing.
- **Example**: Not knowing when your servers are running out of RAM.
- **Problem**: You only find out about issues when your users start complaining.

## 4. Hard-Coding Configurations
Putting server addresses or API keys directly into your code.
- **Example**: `const db_url = "http://192.168.1.100";`
- **Problem**: If you change your server's address, you have to rewrite and redeploy your code.

## 5. Forgetting About Latency
Designing a system that works locally but is slow when users are far away.
- **Example**: Having a single database in New York while your users are in Japan.
- **Problem**: Data takes too long to travel over the ocean, making the app feel "laggy."

---

## How to Avoid These Mistakes:
- **Start Simple**: Build what you need now, but design it so it's easy to scale later.
- **Think About Failures**: Always ask yourself, "What happens if this component crashes?"
- **Test with Real Data**: Don't just test with 10 users; see what happens with 1,000.

[Back to System Design Basics Index](./index.md)
