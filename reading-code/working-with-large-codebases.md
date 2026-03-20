---
layout: default
title: Working with Large Codebases
---

# Working with Large Codebases

When a codebase has 5,000 files, it's impossible for one person to know everything. The secret to working in a large codebase isn't knowing it all—it's **knowing what to ignore.**

### Dealing with Code Overwhelm

```text
    100% of Codebase
    [####################] 
    
    80% You can ignore (for now)
    [################    ] 
    
    20% That matters for your task
    [    ####            ] 
```

---

### Step-by-Step: The "Scope Narrowing" Strategy
1.  **Define your goal:** Are you fixing a button? A login bug? A slow API?
2.  **Find the starting file:** Use the tracing methods we've learned.
3.  **Stay in the "hot path":** Only follow function calls that lead toward your goal.
4.  **Ignore the "noise":** Don't read setup scripts, configuration files, or library code unless you're 100% sure they're the problem.

---

### Practical Strategy: The "80/20" Rule
80% of the value of an app usually comes from 20% of the code. In a large project, most of the files are "plumbing" (connecting things together) or "scaffolding" (boilerplate code). Focus on the 20% that contains the core business logic.

---

### Real-World Example: Fixing a CSS Bug
You're fixing a typo on the "About Us" page.
- **Do:** Open `AboutUs.js` and `styles.css`.
- **Don't:** Read the `AuthMiddleware.js` or the `DatabaseConnector.ts`. They're irrelevant to your task.

---

### Mental Model: The "Fog of War"
Think of a large codebase like a map in a video game. Most of it is covered in "fog." As you work on different parts of the code, the fog clears in those specific areas. You don't need the whole map to be clear to finish your quest.

---

### Practical Strategy: Use "Go to Definition"
In your IDE, hold `Ctrl` (or `Cmd`) and click on a function name to jump to where it's defined. This is the fastest way to navigate without getting lost in the folder structure.

---

### Common Mistake: "The Infinite Loop of Reading"
Don't get caught in a loop where you keep clicking "Go to Definition" until you're 5 levels deep in a library you didn't even write. **Stop and ask yourself: "Does this matter for my task?"**

[Next: Reading Other People's Code](reading-other-peoples-code.md)
