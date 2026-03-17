---
layout: default
title: Testing and Code Quality
---

# Testing and Code Quality

Testing is the only way to be **sure** that your code works. It's the "Proof of Correctness" in software development. As a junior developer, learning to write tests is the fastest way to gain the trust of your senior colleagues.

---

# Why Testing Matters

### 1. Confidence
You can change a core part of your app and know in seconds if you broke anything.

### 2. Faster Debugging
Tests tell you *exactly* where the problem is. If your "login" test fails, you don't need to check the "database" or the "UI."

### 3. Better Design
Writing tests forces you to write cleaner, more modular code. If your code is hard to test, it's usually poorly designed.

---

# The Testing Pyramid

In professional development, we use three main types of tests:

```text
       [ E2E TESTS ] (Slow, Expensive)
           ↓
       [ INTEGRATION TESTS ] (Medium)
           ↓
       [ UNIT TESTS ] (Fast, Cheap)
```

- **Unit Tests:** Test one single function in isolation.
- **Integration Tests:** Test how two or more parts of the system work together (e.g., the API and the Database).
- **End-to-End (E2E) Tests:** Test the entire application from the user's perspective (e.g., clicking a button in a real browser).

---

# Real-World Example: A Unit Test

Imagine you have a `sum` function:

**The Code:**
```javascript
function sum(a, b) {
    return a + b;
}
```

**The Test (Using Jest):**
```javascript
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
```
If you ever change `sum` and it stops returning `3` for inputs `1` and `2`, this test will fail and alert you immediately!

---

# Automated Quality Tools (The "Linter")

Testing isn't the only way to ensure quality. We also use **Linters** (like ESLint for JS or Ruff for Python) to automatically check for:
- Unused variables.
- Bad formatting.
- Potential logic errors.
- Unnecessary code.

---

# Common Beginner Mistakes

1.  **Not Writing Tests at All:** This is the biggest mistake. "It worked on my machine" is never enough!
2.  **Testing Too Much in One Test:** A unit test should only check one thing. If it's 50 lines long, it's probably too complex.
3.  **Assuming Tests "Prove" No Bugs:** Tests only prove that your code works for the specific cases you tested. You still need to think about edge cases!
4.  **Ignoring Failing Tests:** "The tests are failing, but it works in the app." Fix the tests!

---

# Advice from Senior Developers

- **Test Driven Development (TDD):** Try writing the test *before* you write the code. It will help you think through the design of your function.
- **Coverage is Not Everything:** Having "100% Code Coverage" doesn't mean your code is perfect. It just means every line was executed by a test. Quality of tests matters more than quantity.
- **Make Tests Easy to Run:** If your tests take 10 minutes to run, nobody will run them. Keep your unit tests fast!

---

# Next Lesson

Learn how to learn from others and improve your code through reviews:

➡ **[Code Review Principles](code-review-principles.md)**
