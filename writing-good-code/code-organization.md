# Code Organization

A well-organized project is easy to navigate. If you have 100 files in one folder, you'll never find anything. Professional developers organize code into logical layers and modules.

---

# The Hierarchy of Organization

Good code is organized at every level:

```text
       [ PROJECT ]
           ↓
       [ MODULES / FOLDERS ] (e.g., /services, /controllers)
           ↓
       [ FILES ] (e.g., userService.js)
           ↓
       [ CLASSES / OBJECTS ]
           ↓
       [ FUNCTIONS ]
```

---

# Why Organization Matters

### 1. Navigation
When you have a bug in your "Login" code, you should know exactly which folder to look in.

### 2. Dependency Management
A well-organized project makes it clear which parts of the app depend on other parts.

### 3. Separation of Concerns
Putting database code in one folder and UI code in another prevents them from getting mixed together.

---

# Common Project Structures

Most modern web applications follow a structure like this:

```text
/src
  /components     (UI pieces)
  /services       (Business logic)
  /controllers    (API endpoints)
  /models         (Database schema)
  /utils          (Helper functions)
  /tests          (Validation code)
```

---

# File Organization Rules

### 1. One "Thing" Per File
Don't put 10 classes in one file. Each file should have a single purpose (e.g., `userModel.js`, `authController.js`).

### 2. Meaningful File Names
Use the same naming convention for all files (e.g., `camelCase` or `kebab-case`).

### 3. Group by Feature or by Type?
- **Small Project:** Group by "type" (all services in one folder).
- **Large Project:** Group by "feature" (all code related to "Orders" in one folder).

---

# Real-World Scenario: The "Messy Roots" Bug

**The Problem:** The root folder of your project has 50 files. You're trying to find the code that sends emails.

**The Debugging:**
1. You scan through 50 files: `app.js`, `db.js`, `email.js`, `test.js`, etc.
2. You realize `email.js` is actually just a configuration file, not the actual email service.
3. You spend 10 minutes searching for the real code.

**The Fix:** Create a `/services` folder and move all your business logic there. Now `emailService.js` is easy to find.

---

# Common Beginner Mistakes

1.  **Putting Everything in One File:** One massive `app.js` file with 2,000 lines.
2.  **Poor Naming:** Files named `stuff.js` or `helpers.js`.
3.  **Circular Dependencies:** File A depends on File B, and File B depends on File A.
4.  **Leaving Unused Files:** Keeping old, empty, or experimental files in your `/src` folder.

---

# Advice from Senior Developers

- **Follow the Pattern:** If you join a project that uses a specific folder structure, follow it exactly. Don't invent your own!
- **Keep it Simple:** Don't create 50 folders for a small project. Only add folders when you have more than 5-10 related files.
- **Self-Documenting Folders:** Your folder names should explain what's inside them at a glance.

---

# Next Lesson

Learn how to handle errors gracefully:

➡ **[Error Handling](error-handling.md)**
