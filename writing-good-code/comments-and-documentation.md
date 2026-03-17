---
layout: default
title: Comments and Documentation
---

# Comments and Documentation

The best code is **self-documenting.** This means the names of your variables and functions are so clear that you don't *need* a comment to explain what they do.

As a junior developer, you should only use comments when the code *cannot* explain itself.

---

# Good Comments vs. Bad Comments

### 1. Bad: Explaining the "What"
If you have a well-named function, you don't need a comment to explain what it does.
- **Bad:**
```javascript
// This function adds two numbers
function add(a, b) {
    return a + b;
}
```
The code already says that! This is a "noise" comment that just clutters the file.

### 2. Good: Explaining the "Why"
Comments should explain the **reasoning** behind a decision, especially if it's not obvious.
- **Good:**
```javascript
// We are using a simple bubble sort here because the data set is
// guaranteed to be smaller than 10 items, and it avoids a larger library.
function sortSmallItems(items) {
    // ... logic
}
```

### 3. Bad: Commented-Out Code
Never leave commented-out code in your files. This is what **Git** is for!
- **Bad:**
```javascript
function login() {
    // OLD CODE:
    // const oldUser = fetchOldUser();
    // if (oldUser) return;

    const user = fetchUser();
    // ... logic
}
```
Delete it! If you need it back, you can find it in your Git history.

---

# Self-Documenting Code

Instead of writing a comment, try to rename your variables or functions.

### Example: Before and After

**Bad (Needs a Comment):**
```javascript
// Check if user is an adult
if (u.age > 18) {
    // ...
}
```

**Good (Self-Documenting):**
```javascript
const isAdult = user.age >= 18;
if (isAdult) {
    // ...
}
```

---

# Documentation Standards (JSDoc, Docstrings)

In professional teams, we use special comments to generate documentation automatically.

**Example (JSDoc):**
```javascript
/**
 * Calculates the total price of an order including tax.
 * @param {Array} items - The list of items in the order.
 * @param {number} taxRate - The tax rate to apply (e.g., 0.08).
 * @returns {number} The total price.
 */
function calculateOrderTotal(items, taxRate) {
    // ... logic
}
```
This is great because it helps your IDE show helpful tooltips when you use the function!

---

# Common Beginner Mistakes

1.  **Noise Comments:** Writing comments for things that are already obvious.
2.  **Lying Comments:** Leaving an old comment that doesn't match the updated code.
3.  **Mandatory Comments:** Thinking every single function *must* have a comment.
4.  **Leaving "TODO" Comments Forever:** If you add a `// TODO: fix this`, actually fix it before you commit!

---

# Advice from Senior Developers

- **Code is the Truth:** Comments can lie, but code never does. Focus on making the code clear first.
- **Avoid "Header" Comments:** You don't need to put the author's name and the date at the top of every file. Git tracks all of that automatically!
- **Write for Humans:** A comment should be written in clear, concise language.

---

# Next Lesson

Learn how to keep your code consistently formatted:

➡ **[Formatting and Style](formatting-and-style.md)**
