---
layout: default
title: "Tables and Relationships"
---

## Model the Rules Alongside the Data

A relational database stores rows in tables. A primary key identifies a row, a foreign key references another table, and constraints reject invalid data. This example runs in SQLite with foreign keys enabled:

```sql
PRAGMA foreign_keys = ON;
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email TEXT NOT NULL UNIQUE
);
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    title TEXT NOT NULL,
    done INTEGER NOT NULL DEFAULT 0 CHECK (done IN (0, 1))
);
INSERT INTO users VALUES (1, 'learner@example.test');
INSERT INTO tasks VALUES (42, 1, 'Write tests', 0);
```

One user can own many tasks: this is a one-to-many relationship. A many-to-many relationship, such as tasks with multiple tags, usually needs a join table containing both identifiers.

`NOT NULL` prevents absent values, but an empty string is still a string. Decide separately whether a blank title is allowed. Validate friendly error messages in the application and enforce essential invariants in the database.

## Practice

Try inserting a duplicate email and a task with a nonexistent owner. **Check:** both should fail with these constraints and foreign-key enforcement enabled. Sketch a `tags` table and a `task_tags` table whose composite primary key prevents duplicate assignments.

---

[Module overview](index.html) · [Next: Querying and Changing Data](querying-data.html)
