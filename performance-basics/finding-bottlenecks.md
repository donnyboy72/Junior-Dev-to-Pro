---
layout: default
title: "Finding Bottlenecks"
---

## Follow Where the Time Goes

A profiler shows where execution time is spent. Traces show time across components, and database query plans reveal how queries retrieve rows. Use the tool that matches the suspected boundary.

A common database problem is N+1 querying:

```text
1 query: fetch 100 tasks
100 queries: fetch the owner for each task
```

A join or a batched owner lookup can reduce round trips. Confirm that the new result preserves permissions and missing-owner behavior. Fetching every possible relationship at once can instead create a huge result.

Algorithmic growth matters too. Checking membership in a list inside another loop can approach quadratic work. Building a set once can make repeated membership checks much cheaper on average, at the cost of extra memory and requiring hashable values.

Do not assume the hottest function is the user’s bottleneck. A request might spend most of its time waiting for a remote dependency while local CPU use stays low. Compare timing evidence across the full path.

## Practice

A page makes 101 database queries and spends 80% of its time waiting for them. **Check:** explain why rewriting a small formatting function is unlikely to help much, and propose a query-count measurement for a batched alternative.

---

[Module overview](index.html) · [Previous: Measuring Performance](measuring-performance.html) · [Next: Optimizing and Verifying](optimizing-and-verifying.html)
