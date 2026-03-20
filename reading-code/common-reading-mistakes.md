---
layout: default
title: Common Reading Mistakes
---

# Common Reading Mistakes

Reading code is a skill that takes practice. To get better, you need to be aware of these common traps.

### The "Deep Dive Trap"
Diving straight into the details of a complex function before understanding what it's even for.

- **Solution:** Always understand the **high-level purpose** before you look at the lines of code.

### The "Documentation Skipper"
Ignoring the `README.md`, comments, or API documentation because "I'll just figure it out from the code."

- **Solution:** Spend 5 minutes reading the docs. It will save you 30 minutes of reading code.

### The "Over-Confidence Trap"
Assuming you know what a function does based on its name (e.g., `calculateTotal`) without actually checking.

- **Solution:** Use "Go to Definition" and spend 30 seconds scanning the function's body.

### The "Code Only" Focus
Only looking at the code and ignoring the surrounding context (like Git history, folder structure, or dependencies).

- **Solution:** Use `git blame` and check the `package.json` to get the full picture.

---

### Step-by-Step: The "Better Reading" Workflow
1.  **Stop and breathe:** Don't just start scrolling.
2.  **State your goal:** "I'm looking for where the login token is saved."
3.  **Start at a landmark:** Use a URL, a button text, or a known function name.
4.  **Narrow the scope:** Collapse functions you don't need to read.
5.  **Use your tools:** Set breakpoints, add logs, and search globally.

---

### Practical Strategy: The "Timer" Method
If you've been reading the same file for more than 15 minutes and still don't understand it, **stop.** Go for a walk, grab a coffee, and come back with a fresh perspective. Sometimes you just need a break to let the information sink in.

---

### Real-World Example: The "Infinite Loop" of Navigation
You're following a chain of function calls:
`A -> B -> C -> D -> E -> F...`
By the time you get to `F`, you've forgotten why you were looking at `A`.

- **Solution:** Write down the "trail" on a notepad. It will help you stay focused.

```text
    My Trail:
    - AuthForm.js (handleSubmit)
    - AuthService.js (login)
    - Api.js (post)
    - server.js (router)  <-- I am here
```

---

### Mental Model: The Detective
Think of yourself as a detective. You're not just reading a book; you're looking for clues to solve a mystery. Each line of code is a piece of evidence. Some are important, some are "red herrings." Your job is to find the ones that matter.

---

### Common Mistake: "The Lone Wolf"
Don't be afraid to ask for help! If you've spent 30 minutes trying to understand a piece of code and you're still lost, **ask a teammate.** "Hey, I'm trying to trace the login flow and I'm stuck at this function in `AuthService`. Can you give me a 2-minute overview?"

[Back to Reading Code Module](index.md)
