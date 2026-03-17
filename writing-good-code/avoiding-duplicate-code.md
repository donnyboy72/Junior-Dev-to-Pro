---
layout: default
title: Avoiding Duplicate Code (DRY)
---

# Avoiding Duplicate Code (DRY)

The **DRY Principle** (Don't Repeat Yourself) is one of the most important concepts in software development. Every piece of knowledge in a system should have a single, unambiguous representation.

If you find yourself copying and pasting the same code in multiple places, you are creating a "maintenance nightmare."

---

# Why Duplicate Code is Dangerous

Imagine you have a piece of code that formats a phone number. If you copy that code into five different files, what happens when the formatting rules change?

- You have to find all five places.
- You have to update all five places correctly.
- If you miss one, your application now has inconsistent behavior and potential bugs.

### Example: Before and After

**Bad Code (Duplicated Logic):**
```javascript
// File: profile.js
function formatProfilePhoneNumber(phone) {
    return `+1 (${phone.substring(0,3)}) ${phone.substring(3,6)}-${phone.substring(6)}`;
}

// File: checkout.js
function formatCheckoutPhoneNumber(phone) {
    return `+1 (${phone.substring(0,3)}) ${phone.substring(3,6)}-${phone.substring(6)}`;
}
```

**Better Code (DRY):**
```javascript
// File: utils/phoneFormatter.js
export function formatPhoneNumber(phone) {
    return `+1 (${phone.substring(0,3)}) ${phone.substring(3,6)}-${phone.substring(6)}`;
}

// Now both profile.js and checkout.js just import and use this one function!
```

---

# How to Avoid Duplication

### 1. Extract Helper Functions
If you see the same three lines of code in two different places, move them into their own function.

### 2. Use Constants
Don't hardcode the same value (like an API URL or a tax rate) multiple times. Define it once as a constant.
- **Bad:** `price * 1.08;` (used everywhere)
- **Good:** `const TAX_RATE = 1.08;` (used everywhere)

### 3. Use Loops and Higher-Order Functions
Instead of repeating the same action for five different items, use a loop or a `.map()` function.

---

# DRY Diagram (Centralizing Knowledge)

```text
       [ DUPLICATED LOGIC ]         [ DRY LOGIC ]
    +-------+   +-------+        +--------------+
    | Pkg A |   | Pkg B |        |   Shared     |
    |-------|   |-------|  →     |   Utility    |
    | Logic |   | Logic |        +--------------+
    +-------+   +-------+          ↓          ↓
                                 [ Pkg A ]  [ Pkg B ]
```

---

# Common Beginner Mistakes

1.  **"Copy-Paste-Modify":** Copying a function and only changing one variable. (Instead, pass that variable as an argument!)
2.  **Duplicating Data Structures:** Creating the same object format in multiple places instead of using a class or a factory function.
3.  **Worrying Too Much About DRY:** Sometimes two things look the same but are actually different. If forcing them to be "DRY" makes the code harder to read, it's okay to have some duplication. (This is called "AHA" – Avoid Hasty Abstractions).

---

# Advice from Senior Developers

- **Rule of Three:** If you write something once, it's fine. Twice, it's okay. The third time you write it, you *must* refactor it into a shared function.
- **Single Source of Truth:** Every "rule" in your app should only exist in one place.
- **Refactoring is Part of Coding:** Don't be afraid to stop and move a piece of code into a utility file if you see it's being used elsewhere.

---

# Next Lesson

Learn how to document your code without over-commenting:

➡ **[Comments and Documentation](comments-and-documentation.md)**
