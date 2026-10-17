---
layout: default
title: "Transactions, Indexes, and Migrations"
---

## Keep Related Changes Together

A transaction groups changes that must succeed together. Consider transferring ownership of task 42 while recording an audit event. If only one write succeeds, the stored history becomes misleading.

Using a disposable database with an `audit_events(task_id, action)` table:

```sql
BEGIN;
UPDATE tasks SET user_id = 2 WHERE id = 42;
INSERT INTO audit_events (task_id, action)
VALUES (42, 'owner changed');
COMMIT;
```

If a step fails, the application must roll back the transaction. The exact behavior after an error depends on the database and driver. Transactions alone do not solve every concurrency problem: two clients can still make conflicting decisions unless constraints, isolation, or locking enforce the rule.

An index can accelerate a common lookup, for example `CREATE INDEX tasks_owner ON tasks(user_id);`. It costs storage and adds work to writes. Examine query plans and representative workloads before adding indexes everywhere.

A migration is a versioned schema change. Review it like code, test it with realistic data, and plan compatibility with both old and new application versions. A backup is useful only if you can restore it.

## Final Practice

Add a nullable `due_date` column in a migration. Describe deployment order, rollback limitations, and a restore rehearsal. **Check:** removing a populated column later cannot recover its values without another data source.

## Reference

[PostgreSQL transaction tutorial](https://www.postgresql.org/docs/current/tutorial-transactions.html)

---

[Module overview](index.html) · [Previous: Querying and Changing Data](querying-data.html)
