---
layout: default
title: What is Software Architecture?
---

# What is Software Architecture?

Software architecture is the high-level structure of a software system. Think of it like the blueprint for a house. While "code" is the bricks and mortar, the "architecture" determines how many floors the house will have, where the load-bearing walls are, and how the plumbing and electricity are routed.

---

# A Simple Explanation

In simple terms, software architecture is about making the **big decisions** that are expensive to change later.

- **Coding:** How do I write this function?
- **Architecture:** Should we use a database or a flat file? How should the frontend talk to the backend?

---

# Why Architecture Exists

Architecture isn't just for show. It exists to solve several critical problems:

### 1. Managing Complexity
As software grows, it becomes harder to understand. Good architecture breaks the system into smaller, more manageable pieces.

### 2. Ensuring Scalability
A well-designed system can handle more users and more data without crashing or becoming painfully slow.

### 3. Improving Maintainability
Good architecture makes it easier to fix bugs and add new features without breaking existing functionality.

### 4. Facilitating Collaboration
When a system is divided into clear components, different teams can work on different parts simultaneously.

---

# Architecture Diagram (The Big Picture)

A basic architecture for a modern web application often looks like this:

```text
       [ User's Browser ]
               ↓ (Request)
       [ Web Server/API ]
               ↓ (Query)
       [ Database Server ]
```

---

# How Junior Developers Encounter Architecture

As a junior developer, you might not be making the "big decisions," but you will interact with them every day:

- **The Folder Structure:** Why are the files organized this way? (That's architectural!)
- **Naming Conventions:** Why do we call some things "Services" and others "Controllers"?
- **API Requests:** How do you get data from the server?
- **Database Schema:** Why is the user information stored in these specific tables?

---

# Common Beginner Mistakes

### 1. Ignoring the "Why"
New developers often focus only on *how* to write code, not *why* the system is designed that way. Always ask your seniors about the design choices!

### 2. Over-Engineering
Trying to build a complex architecture for a tiny project. Sometimes a simple script is all you need.

### 3. Tight Coupling
Writing code where every part depends on every other part. This makes the system fragile and hard to change.

---

# Real-World Example: A Pizza Delivery App

Imagine you're building a pizza delivery app.

- **Frontend:** The app on the user's phone where they pick toppings.
- **Backend (API):** The server that calculates the price and sends the order to the kitchen.
- **Database:** Where all the orders and customer addresses are stored.
- **External Services:** A payment processor (like Stripe) to handle the money.

The **architecture** is the plan for how all these pieces talk to each other to ensure the pizza gets to the right person!

---

# Next Lesson

Learn about organizing your code:

➡ **[Layers and Separation of Concerns](layers-and-separation-of-concerns.md)**
