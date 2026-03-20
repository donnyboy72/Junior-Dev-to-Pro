---
layout: default
title: Caching Basics
---

# Caching Basics

A **Cache** is a special type of temporary storage that holds data so that future requests for that same data can be served much faster.

## The Problem:
Every time someone visits a popular profile, the server has to go to the database, search for the user, and get their info. Doing this 100 times a second is very slow and expensive.

## The Solution: The Cache
The server gets the info from the database **once** and then saves it in a fast "pantry" (the Cache) for a short time.

---

## Analogy: The Cook and the Counter
Think of a chef in a restaurant:
- **Database**: The pantry downstairs. It has everything, but it's a long walk to get anything.
- **Cache**: The counter right next to the chef. They put the most popular ingredients there to save time.

---

## Simple Diagram

```text
 [ User ] -- (1. "Get Alice's profile") --> [ Server ]
                                               |
        <-- (2. Check Cache) ------------------|
        (Not there!)                           v
                                          [ Cache ]
                                               |
        <-- (3. Get from DB) ------------------|
                                               v
                                          [ Database ]
                                               |
        <-- (4. Save to Cache) ----------------|
                                               v
                                          [ Cache ]
```

## Types of Cache
1.  **Browser Cache**: Your browser saves images from a website so it doesn't have to download them again.
2.  **Server Cache**: Your server saves the results of a database query.
3.  **CDN**: A "Content Delivery Network" that saves your files in many locations around the world.

---

## Why Use It?
- **Speed**: Caches are incredibly fast.
- **Efficiency**: Reduces the "load" on your database.

[Next: APIs in System Design](./APIs-in-system-design.md)
