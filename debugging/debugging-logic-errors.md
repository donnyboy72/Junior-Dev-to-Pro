---
layout: default
title: Debugging Logic Errors
---

# Debugging Logic Errors

Logic errors are the most frustrating bugs. The code runs without crashing, but it produces the **wrong result**.

Think of it like a recipe. You followed every step, but the cake tastes like salt instead of sugar. The instructions were "valid," but they weren't what you *intended*.

---

# Why Logic Errors Happen

As a junior developer, logic errors usually come from:
1. **Off-By-One Errors:** (Using `i < 10` instead of `i <= 10`).
2. **Incorrect Boolean Logic:** (Using `&&` instead of `||`).
3. **Data Type Mismatches:** (Adding a string to a number).
4. **Incorrect Assumptions:** (Assuming a user's name is always present).

---

# The Debugging Process (The "Socratic" Method)

When debugging a logic error, you must ask the computer "What do you think is happening?" at every step.

```text
       [ Start ]
           ↓
    (1) Predict: "I think the value of X should be 10 here."
           ↓
    (2) Verify: Use a print statement or debugger to check the value of X.
           ↓
    (3) Compare: Is it 10?
           ↓
    (4) If NO: Trace backwards to find where it changed.
           ↓
    (5) If YES: Go to the next line and Repeat!
```

---

# Real-World Scenario: The "Free Membership" Bug

**The Problem:** All users are getting "Free" membership, even those who paid!

**The Code:**
```javascript
function checkMembership(user) {
    if (user.hasPaid = true) {  // BUG: Using '=' instead of '==='
        return "Premium";
    }
    return "Free";
}
```

**The Discovery:**
1. You set a breakpoint on the `if` statement.
2. You see that even for a user who hasn't paid, the code enters the `if` block.
3. You realize that `user.hasPaid = true` is an *assignment*, not a *comparison*. It's always true!

---

# Debugging Strategies for Logic Errors

### 1. Rubber Ducking
Explain the logic of your code, line-by-line, to an inanimate object (like a rubber duck). When you reach the line that's wrong, you'll often "hear" the mistake as you say it out loud.

### 2. Simplify the Problem
Does the bug still happen with only one user? Only one item? A smaller data set? If so, it's easier to find.

### 3. Trace with Pencil and Paper
Manually follow the code's execution on a piece of paper. Write down the value of every variable at every step. This forces you to think like the computer.

---

# Common Beginner Mistakes

- **Assuming the Code "Works":** Just because it doesn't crash doesn't mean it's right. Always verify the results!
- **Changing Too Many Things at Once:** If you change five lines of code to fix one bug, you might create three new ones. Change **one thing at a time**.
- **Not Testing "Edge Cases":** (What happens if the input is `0`, `null`, or an empty array?).

---

# Advice for Beginners

- **Write Unit Tests:** Tests can automatically check your logic every time you change the code.
- **Trust, but Verify:** Never assume a variable has the value you think it has. Always check it!
- **Take a Break:** Logic errors are often the result of being tired. If you've been looking at the same bug for two hours, go for a walk.

---

# Next Lesson

Now let's learn how to apply these skills systematically to any bug:

➡ **[Systematic Debugging Process](systematic-debugging-process.md)**
