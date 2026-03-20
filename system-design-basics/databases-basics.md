---
layout: default
title: Databases Basics
---

# Databases Basics

A **Database** is a special type of software that's optimized for storing and retrieving data quickly and reliably.

## Why Use a Database?
Why not just save everything to a text file?
- **Speed**: Databases can find one record out of millions in milliseconds.
- **Safety**: Databases ensure your data isn't lost if the power goes out.
- **Concurrency**: Many users can read and write to the same database at once without breaking it.

---

## Two Main Types (Relational vs. Non-Relational)

### 1. Relational (SQL)
Think of an Excel spreadsheet with rows and columns.
- **Good for**: Systems with a rigid structure (e.g., Banking apps).
- **Example**: MySQL, PostgreSQL.

```text
Table: Users
| id | name  | email             |
|----|-------|-------------------|
| 1  | Alice | alice@example.com |
| 2  | Bob   | bob@example.com   |
```

### 2. Non-Relational (NoSQL)
Think of a folder full of Word documents or JSON files.
- **Good for**: Systems that need to be super fast and have flexible data (e.g., Real-time feeds).
- **Example**: MongoDB, DynamoDB.

```json
{
  "id": 1,
  "name": "Alice",
  "interests": ["coding", "hiking"]
}
```

---

## Storage Concepts
- **Read**: Fetching data ("Show me my profile").
- **Write**: Storing data ("Post this new comment").
- **Index**: A special "shortcut" that makes searching much faster.

## Diagram: The Database in the System

```text
       [ Server ]
           |
           |-- 1. Query ("Who is user 1?")
           |
           v
      [ Database ]
           |
           |-- 2. Data ("User 1 is Alice")
           |
           v
       [ Server ]
```

[Next: Scaling Basics](./scaling-basics.md)
