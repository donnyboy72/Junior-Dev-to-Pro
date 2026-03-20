---
layout: default
title: What is Testing?
---

# What is Testing?

At its core, software testing is the process of verifying that your application behaves as expected. It is a way to compare the **actual result** of a piece of code against the **expected result**.

## The Mental Model

Think of testing like a safety net. When you're building a bridge, you don't just hope it holds cars; you perform stress tests on the materials and the structure before anyone drives on it.

In software:
- **Input:** You provide specific data to a function or system.
- **Action:** The system processes that data.
- **Verification:** You check if the output matches what you intended.

### Example (Python)

```python
def add(a, b):
    return a + b

# Manual test in your head or a print statement:
result = add(2, 3)
if result == 5:
    print("Test Passed!")
else:
    print("Test Failed!")
```

## Why We Automate

While you can test manually by clicking through an app, **automated testing** uses code to test your code. This allows you to run thousands of checks in seconds, every time you make a change.

### The Developer's Mindset

Testing isn't about proving your code is "perfect." It's about:
1.  **Confidence:** Knowing that changing one line didn't break ten others.
2.  **Documentation:** Tests show other developers (and your future self) how the code is supposed to work.
3.  **Speed:** Catching a bug during development is 10x faster than finding it after it's deployed.

## Summary

Testing is a systematic way to ensure quality. It's not an "extra step"—it's a core part of the development process.
