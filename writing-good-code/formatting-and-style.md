# Formatting and Style

Formatting isn't just about making code "pretty." It's about reducing the cognitive load required to read your code. Consistent formatting helps you (and your teammates) skim through code and find information quickly.

---

# Why Formatting Matters

When a file is poorly formatted, your brain has to work harder to understand the structure.

**Bad Formatting:**
```javascript
function loginUser(u,p){if(!u||!p){return false;}const uObj=db.getUser(u);
    if(uObj&&uObj.password===p){return true;}return false;}
```

**Good Formatting:**
```javascript
function loginUser(username, password) {
    if (!username || !password) {
        return false;
    }

    const userObject = db.getUser(username);

    if (userObject && userObject.password === password) {
        return true;
    }

    return false;
}
```
The second example uses whitespace to separate logic and is much easier to read!

---

# Key Formatting Rules

### 1. Indentation
Use a consistent number of spaces (usually 2 or 4). This shows you at a glance which code is inside an `if` statement or a function.

### 2. Vertical Whitespace
Use empty lines to separate "paragraphs" of code. Group related lines together and put an empty line between different tasks.

### 3. Brace Placement
Pick a style (like "One True Brace Style") and stay consistent.
- **Example:**
```javascript
if (isReady) {
    // ...
}
```

### 4. Line Length
Avoid extremely long lines of code (over 80-100 characters). Break them into multiple lines to keep them readable without horizontal scrolling.

---

# Automated Tools (The Pro Way)

Professional developers don't format code manually. We use tools to do it for us.

- **Prettier:** An "opinionated" code formatter. It automatically fixes your indentation, spacing, and more every time you save your file.
- **ESLint / Stylelint:** "Linters" that check your code for stylistic errors and potential bugs.

---

# Architecture Diagram (The Formatter Loop)

```text
       [ MESSY CODE ]
             ↓
       [ FORMATTER ] (Prettier)
             ↓
       [ CLEAN CONSISTENT CODE ]
```

---

# Common Beginner Mistakes

1.  **Mixing Spaces and Tabs:** Some files have 2-space indents and others have 4-space indents.
2.  **Inconsistent Braces:** Putting braces on the same line in one place and on a new line in another.
3.  **No Whitespace:** Cramming 50 lines of code together with no empty lines between them.
4.  **Trailing Whitespace:** Leaving empty spaces at the end of a line.

---

# Advice from Senior Developers

- **Let the Tools Do the Work:** Spend 15 minutes setting up Prettier and a "Format on Save" extension in your IDE. You'll never have to think about formatting again.
- **Style Guides:** Most companies have a "Style Guide" (like Google's or Airbnb's). Follow it strictly to keep the project consistent.
- **Don't Be "Clever" with Formatting:** Stick to the standard way everyone else formats code in your language.

---

# Next Lesson

Learn how to organize your files and project structure:

➡ **[Code Organization](code-organization.md)**
