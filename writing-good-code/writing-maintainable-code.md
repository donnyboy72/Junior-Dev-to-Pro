# Writing Maintainable Code

Maintainable code is code that is easy to **change.** Software is never "finished"—it's always growing and evolving. If your code is hard to change, your project will eventually die.

---

# Why Maintainability Matters

In a professional job, you will spend most of your time updating existing code, not writing new code. Maintainable code allows you to add features and fix bugs without breaking everything else.

### Example: Before and After

**Bad Code (Hard to Maintain):**
```javascript
// A "Hardcoded" Tax Rate
function calculatePrice(price) {
    return price * 1.08; // Tax rate is hidden inside a function
}
```
If the tax rate changes, you have to find every place you wrote `1.08` and change it manually.

**Better Code (Easy to Maintain):**
```javascript
const TAX_RATE = 1.08;

function calculatePrice(price) {
    return price * TAX_RATE;
}
```
Now you only have to change it in **one place.**

---

# The Principles of Maintainability

### 1. High Cohesion
Related code should be kept together. If you're building a "User" feature, all the logic for users should live in a `userService.js`.

### 2. Low Coupling
Different parts of your app should be as independent as possible. If you change your "Database," you shouldn't have to change your "UI" code.

### 3. Open/Closed Principle
Your code should be **open** for extension (adding new features) but **closed** for modification (not changing existing code that already works).

### 4. Self-Documenting Code
(See the [Comments and Documentation](comments-and-documentation.md) lesson for more on this!)

---

# Maintenance Flow Diagram

```text
       [ NEW FEATURE REQUEST ]
           ↓
       [ ANALYZE CODE ] (Is it easy to read?)
           ↓
       [ MAKE CHANGE ] (Is it in one place?)
           ↓
       [ TEST CHANGE ] (Did it break anything?)
           ↓
       [ DEPLOY SUCCESS ]
```

---

# Common Beginner Mistakes

1.  **Hardcoding Strings and Numbers:** Using "magic numbers" instead of constants.
2.  **Violating SRP:** Writing functions that do 10 different things.
3.  **Global Variables:** Using a variable that can be changed by any part of the app. This is very hard to debug!
4.  **"Spaghetti Code":** Writing code where every file depends on every other file.

---

# Advice from Senior Developers

- **Write for Your Future Self:** Imagine you're writing code for a developer who is 10 times more tired than you are right now. Will they still understand it?
- **Small Commits:** Make small, logical changes in Git. This makes it much easier to "roll back" if something goes wrong.
- **Refactor Regularly:** Don't wait for the code to be perfect. Write it, then refactor it to make it more maintainable.

---

# Next Lesson

Learn how to improve existing code without breaking it:

➡ **[Refactoring Code](refactoring-code.md)**
