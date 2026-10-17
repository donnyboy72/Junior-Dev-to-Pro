---
layout: default
title: "Optimizing and Verifying"
---

## Change One Cause and Compare

Record a baseline, make one targeted change, and rerun the same workload. Verify correctness as well as speed. Faster code that omits permission checks or returns stale data has not solved the problem.

Caching can reduce repeated work, but it introduces questions: what is the key, how long is data valid, who may read it, and what invalidates it? A cache key for private task lists must distinguish users and relevant query parameters.

Pagination limits response size and rendering work. Indexes can help selective lookups. Batching can reduce network round trips. Each is useful for a particular cause; none should be added only because it sounds faster.

Check for regressions outside the benchmark: memory use, write speed, slow-percentile latency, and operational complexity. Keep before-and-after measurements with the workload description so another developer can reproduce the claim.

## Final Practice

Design a comparison for loading 100 tasks before and after batching owner lookups. **Check:** use the same data and permissions, compare query count and latency, and include a correctness check for tasks with different owners. State what evidence would make you revert the optimization.

---

[Module overview](index.html) · [Previous: Finding Bottlenecks](finding-bottlenecks.html)
