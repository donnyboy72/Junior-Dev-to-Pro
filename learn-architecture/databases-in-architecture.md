---
layout: default
title: Databases in Architecture
---

# Databases in Architecture

A database is the storage engine of your application. It's where your users' names, orders, and information live permanently.

---

# What is a Database?

A database is a specialized piece of software designed for storing, organizing, and retrieving data.

- **Examples:** PostgreSQL, MySQL, MongoDB, Redis, SQLite.

---

# Architecture Diagram (Database Integration)

In a typical system, the database is its own separate server or service:

```text
       [ API Server ] (Express, Flask, etc.)
               ↓ (Query / Update)
       [----------------- DB Connection Pool -----------------]
                               ↓
       [                   Database Server                     ]
                               ↓
       [                   Data Storage (Disk)                 ]
```

---

# Types of Databases

There are two main types you'll encounter as a junior developer:

### 1. Relational (SQL)
Think of this like an Excel spreadsheet. Data is organized into tables with rows and columns.
- **Good for:** Complex queries, data integrity, and structured information (e.g., users, orders).
- **Examples:** PostgreSQL, MySQL, SQLite.

### 2. Non-Relational (NoSQL)
Think of this like a collection of folders containing JSON documents.
- **Good for:** Flexible data, high speed, and massive amounts of information (e.g., social media feeds, logs).
- **Examples:** MongoDB, Cassandra.

---

# Why Databases Exist

### 1. Persistence
Without a database, all your data would disappear the moment your server restarted.

### 2. Data Integrity
Databases make sure your data is consistent. For example, ensuring that an order can't be created without a valid user ID.

### 3. Efficiency
Searching through a million users in a text file would be incredibly slow. Databases use "indexes" to find data in milliseconds.

---

# How Junior Developers Encounter This

- **ORM (Object-Relational Mapping):** Using tools like Sequelize (JS), Mongoose (JS), or Prisma to talk to your database without writing raw SQL.
- **Migrations:** Files that define how your database tables change over time.
- **Queries:** Writing the code that asks the database for information (e.g., `SELECT * FROM users`).

---

# Common Beginner Mistakes

### 1. Putting Too Much Logic in the Database
Your database should store data, not perform complex calculations. Keep the logic in your application code.

### 2. Ignoring Indexes
Searching for a user by email is fast if you have an index on the email column. If not, it can take forever as your app grows!

### 3. Not Using Migrations
Never change your database schema manually. Always use migrations so your teammates (and your production server) can stay in sync.

---

# Real-World Example: Netflix

Netflix uses many different databases:
- **SQL (Postgres/MySQL):** For billing and user accounts (where data must be 100% correct).
- **NoSQL (Cassandra/Redis):** For your "Watch History" and movie recommendations (where speed is more important than perfect accuracy).

---

# Next Lesson

Once your app starts getting popular, you'll need to speed things up:

➡ **[Caching Basics](caching-basics.md)**
