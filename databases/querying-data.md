---
layout: default
title: "Querying and Changing Data"
---

## Ask for the Rows You Need

Using the schema from the previous lesson:

```sql
SELECT tasks.id, tasks.title, users.email
FROM tasks
JOIN users ON users.id = tasks.user_id
WHERE tasks.done = 0
ORDER BY tasks.id;

UPDATE tasks SET done = 1 WHERE id = 42;
```

The query joins tasks to their owners, filters unfinished tasks, and gives the result a predictable order. Without `ORDER BY`, a database does not promise a particular row order. Select the columns you need rather than coupling every consumer to `SELECT *`.

An `UPDATE` or `DELETE` without a `WHERE` clause can affect every row. First inspect the equivalent `SELECT` and check how many rows should change. Use a disposable database while practicing.

Pass user values as parameters. Python’s SQLite driver uses question-mark placeholders:

```python
rows = connection.execute(
    "SELECT id, title FROM tasks WHERE user_id = ?",
    (user_id,),
).fetchall()
```

Do not build SQL by inserting user text into the query string. Parameters represent values; dynamically chosen table or column names need a separate, explicit allowlist.

## Practice

Write a query listing each user’s unfinished tasks. **Check:** explain why an inner join excludes users without matching tasks and when a left join would be appropriate.

---

[Module overview](index.html) · [Previous: Tables and Relationships](tables-and-relationships.html) · [Next: Transactions, Indexes, and Migrations](transactions-and-migrations.html)
