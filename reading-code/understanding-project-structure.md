---
layout: default
title: Understanding Project Structure
---

# Understanding Project Structure

You've probably noticed that most projects follow certain patterns. Once you recognize these patterns, you'll be able to navigate a new codebase in minutes.

### Common Patterns

#### 1. The MVC (Model-View-Controller) Pattern
One of the most common structures for web apps.

- **Models:** Where the data lives (e.g., `User.js`, `Product.ts`).
- **Views:** The UI/HTML (e.g., `Profile.html`, `Dashboard.tsx`).
- **Controllers:** The "brain" that connects the two (e.g., `UserController.js`).

#### 2. The Hexagonal/Clean Architecture Pattern
Often used in larger apps to separate business logic from technical details.

- **Domain/Core:** Pure business logic (e.g., "Calculate tax").
- **Adapters/Infrastructure:** Code that talks to external things (e.g., "Save to Postgres", "Call Stripe API").

---

### Deciphering the Folders
Most modern projects follow a directory structure like this:

```text
/src
  /assets        <-- Images, CSS, icons
  /components    <-- Small UI pieces (buttons, inputs)
  /services      <-- Code for talking to APIs or Databases
  /utils         <-- Helper functions (date formatting, math)
  /hooks         <-- React-specific reusable logic
  /tests         <-- The code that checks if the other code works
  /config        <-- Environment settings, API keys
```

---

### Step-by-Step: The Folder Walkthrough
1.  **Check `package.json` (or equivalent):** Look at the dependencies to see what libraries the project uses.
2.  **Look for a `src/` directory:** This is where the actual code almost always lives.
3.  **Identify the entry point:** As discussed in the previous lesson.
4.  **Skim the folder names:** What's the biggest folder? That's likely where the most important part of the app is.

---

### Real-World Example: A React App
If you see a folder named `/hooks`, you know the app uses React Hooks for state management. If you see `/pages`, it probably uses `react-router` or Next.js for navigation.

---

### Mental Model: The Filing Cabinet
A codebase is just a giant filing cabinet. Some people organize by **type** (e.g., all "buttons" go in one drawer), while others organize by **feature** (e.g., everything related to "billing" goes in one drawer).

### Practical Strategy: Use a File Explorer
Don't just open files randomly. Use your IDE's file explorer to collapse and expand folders. Seeing the tree structure is much easier than looking at a flat list of filenames.

---

### Common Mistake: "The Magic Folder"
Never assume a folder named `helpers/` or `utils/` is where the important code is. These folders often become "junk drawers" for miscellaneous code. **Look at the core logic folders first.**

[Next: Tracing Code Flow](tracing-code-flow.md)
