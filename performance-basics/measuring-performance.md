---
layout: default
title: "Measuring Performance"
---

## Define the Slow Experience

Latency is how long an operation takes. Throughput is how much work completes per unit of time. Resource use includes CPU, memory, disk, and network activity. Improving one measurement can make another worse.

Start with a concrete question: “How long does loading 100 tasks take for an authenticated user?” Define the dataset, environment, concurrency, and measurement boundary. Browser rendering time and server response time describe different parts of the same experience.

For Python, use a monotonic performance counter for elapsed time:

```python
from time import perf_counter

start = perf_counter()
result = sorted(range(10000, 0, -1))
elapsed = perf_counter() - start
print(f"Sorting took {elapsed:.6f} seconds")
```

One tiny run is not a trustworthy benchmark. Repeat measurements, preserve the same workload, and account for warm caches and background activity. In a service, a high percentile such as p95 reveals slow requests that an average may hide.

## Practice

Define a measurement plan for a slow task list. **Check:** identify the user action, dataset size, latency boundary, and acceptable threshold. Explain why measuring only an empty database can give misleading confidence.

---

[Module overview](index.html) · [Next: Finding Bottlenecks](finding-bottlenecks.html)
