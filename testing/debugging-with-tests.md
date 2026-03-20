---
layout: default
title: Debugging with Tests
---

# Debugging with Tests

When a bug is reported, most developers' first instinct is to open the app and try to find it manually. A more professional approach is to use **Tests as a Debugging Tool**.

## The "Red-Fix-Green" Debugging Workflow

### 1. Reproduce with a Test
Before you touch your source code, write a test that fails exactly how the bug was described. This is your "reproduction case."

```python
# The Bug: The discount calculator is giving 100% off instead of 10%
def test_discount_bug():
    # This test fails currently, proving the bug exists
    assert calculate_discount(100, 0.10) == 10 
```

### 2. Isolate the Problem
Because you have a small, repeatable test, you can now use a debugger or print statements to see exactly what's happening inside that function without having to restart the whole app.

### 3. Apply the Fix
Modify your code until the test turns **Green**.

### 4. Regression Prevention
Now that the test passes, **keep it in your codebase**. This ensures that no one else (including you) accidentally reintroduces this bug six months from now.

---

## Why this is better than "Print Debugging"

- **Repeatability:** You don't have to manually re-type the same inputs into a form 50 times.
- **Speed:** Running a single test takes a fraction of a second.
- **Documentation:** The test documents the "edge case" that caused the bug for future developers.

## Summary

A bug is just a test case you haven't written yet. Once you write it, the bug becomes a permanent part of your quality suite.
