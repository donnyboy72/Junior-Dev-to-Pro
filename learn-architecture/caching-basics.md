---
layout: default
title: Caching Basics
---

# Caching Basics

In software architecture, **caching** is the secret to making slow applications fast. It's the practice of storing a copy of data in a high-speed storage layer (like RAM) so that future requests for that data can be served faster.

---

# What is a Cache?

Think of a cache like your pocket. If you need your keys, you check your pocket (the cache) first. It's much faster than walking all the way back to your house (the database) to find them.

- **Examples:** Redis, Memcached, Browser Cache, CDN.

---

# Architecture Diagram (The Cache Layer)

A cache sits between your API and your database:

```text
       [ API Server ]
               ↓
       [ Cache (Redis) ] --- (1) "Is the data here?"
               ↓                      ↑ (2) "Yes! Send it back."
       [ Database ] -------- (3) "No? Get it from here instead."
```

---

# Why Caching Exists

### 1. Speed
Reading from RAM (memory) is thousands of times faster than reading from a hard drive (where the database lives).

### 2. Reducing Database Load
Every time you serve a request from the cache, you're saving your database from doing extra work. This allows your database to handle more important tasks.

### 3. Lower Latency
A cache can be placed physically closer to the user (like a CDN), making the website feel much more responsive.

---

# How Junior Developers Encounter This

- **Redis:** The most common tool for server-side caching.
- **Cache Invalidation:** The hardest part of caching—deciding when a piece of data is "stale" and needs to be updated.
- **Browser Caching:** Controlling how long a user's browser should save a copy of your CSS and image files.

---

# Common Beginner Mistakes

### 1. Caching Everything
Don't cache data that changes every second (like a stock price). You'll spend more time updating the cache than you'll save!

### 2. Forgetting to Invalidate
If a user updates their profile picture, you need to "bust" the cache. Otherwise, they'll keep seeing the old picture for hours!

### 3. Relying on the Cache for Accuracy
Never assume the data in the cache is 100% up-to-date. Always treat the database as the "Source of Truth."

---

# Real-World Example: Wikipedia

When millions of people look at the "Software Architecture" page on Wikipedia, the site doesn't ask the database for the page's text every single time. Instead, it creates a copy of the page in a cache. For the next hour, everyone who visits that page gets the cached version!

---

# Next Lesson

As your app grows, one server won't be enough. You'll need to balance the load:

➡ **[Load Balancers](load-balancers.md)**
