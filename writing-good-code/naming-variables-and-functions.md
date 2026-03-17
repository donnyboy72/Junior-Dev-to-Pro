---
layout: default
title: Naming Variables and Functions
---

# Naming Variables and Functions

The names you choose for your variables and functions are the most important part of your code's documentation. Good names explain *what* a value is or *what* a function does without needing a comment.

---

# Why Meaningful Naming Matters

Compare these two pieces of code:

**Bad Naming:**
```javascript
const d = 30; // What is d?
function fn(x, y) {
    return x * y;
}
const res = fn(d, 50);
```

**Good Naming:**
```javascript
const daysInAMonth = 30;
function calculateMonthlyTotal(dailyRate, totalDays) {
    return dailyRate * totalDays;
}
const monthlyTotal = calculateMonthlyTotal(daysInAMonth, 50);
```
The second example is "self-documenting." You don't have to guess what's happening.

---

# Rules for Good Naming

### 1. Be Descriptive (But Not Too Long)
A variable should describe what it holds.
- **Bad:** `userList`
- **Better:** `activeUsers` (Is it all users or just active ones?)
- **Better:** `usersWithOverduePayments` (Very specific!)

### 2. Use Pronounceable Names
If you can't say it out loud, it's a bad name.
- **Bad:** `clntSgnUpDt`
- **Good:** `clientSignUpDate`

### 3. Use Searchable Names
Avoid single-letter variables except for very simple loops (like `i`).
- **Bad:** `const s = 86400;`
- **Good:** `const SECONDS_IN_A_DAY = 86400;`

### 4. Functions Should Be Verbs
Functions *do* things. Use a verb at the beginning of the name.
- **Bad:** `userData()`
- **Good:** `fetchUserData()`, `validateUserProfile()`, `saveOrder()`

### 5. Be Consistent
If you use `fetch` for getting data in one file, don't use `get` in another. Pick one and stick with it.

---

# Naming Diagram (The Evolution of a Name)

```text
       [ Generic ]         [ Specific ]         [ Professional ]
    +-------------+      +--------------+      +------------------+
    |   const x   |  →   | const user   |  →   | const activeUser |
    +-------------+      +--------------+      +------------------+
```

---

# Common Beginner Mistakes

1.  **Single-Letter Variables:** Using `x`, `a`, `b`, or `y`. (Exceptions: `i`, `j` in small loops, or `x`, `y` for coordinates).
2.  **Abbreviations:** Using `msg` instead of `message`, `err` instead of `error`. (Some are okay, but clarity is better!)
3.  **Naming by Type:** Using `userDataArray`. If you change it to a Set, the name is now a lie. Use `userData` or `users`.
4.  **Leaving Old Names:** Renaming a variable but forgetting to update its usage elsewhere (leading to confusion).

---

# Advice from Senior Developers

- **Avoid "Mental Mapping":** Don't make the reader remember that `r` stands for `response`. Just call it `response`.
- **Think Before You Type:** Spend 30 seconds thinking of a good name. It will save 10 minutes for whoever reads your code later.
- **Refactor Bad Names:** If you find a bad name in your code, change it! Most modern IDEs make this very easy (e.g., F2 in VS Code).

---

# Next Lesson

Now that we can name things, let's learn how to organize them into functions:

➡ **[Writing Readable Functions](writing-readable-functions.md)**
