# Refactoring Code

Refactoring is the process of improving the **internal structure** of code without changing its **external behavior.**

It's like cleaning your kitchen while you're cooking. You're not changing the recipe, but you're making it much easier to cook the next meal.

---

# Why Refactor?

Code naturally gets messy over time (this is called "Code Rot"). Refactoring helps you:
1.  **Reduce Complexity:** Breaking a 100-line function into five small ones.
2.  **Improve Readability:** Renaming vague variables and removing comments.
3.  **Find Bugs:** Cleaning up code often reveals hidden errors you didn't notice before.
4.  **Prepare for New Features:** Making it easier to add what's coming next.

---

# How to Refactor (The Professional Way)

### 1. Have Working Tests First
Never refactor code that you can't test! If you don't have tests, you won't know if you broke something during the refactor.

### 2. Make Small Changes
Don't try to refactor the whole project in one day. Change one variable name, one function, or one file at a time.

### 3. Verify the Behavior
After every small change, run your tests to make sure the application still works exactly as it did before.

### 4. Commit Regularly
Save your work in Git after every successful refactor step. This allows you to "undo" easily if you make a mistake.

---

# Refactoring Diagram (The Process)

```text
       [ MESSY CODE ]
             ↓
       [ WRITE TESTS ] (Confirm it works)
             ↓
       [ MAKE A SMALL CHANGE ] (e.g., Extract Function)
             ↓
       [ RUN TESTS ] (Does it still work?)
             ↓
       [ CLEAN CODE ]
```

---

# Real-World Refactoring: The "Extract Function"

**Messy Code (Too Many Jobs):**
```javascript
function sendInvoice(order) {
    // 1. Calculate Tax
    const tax = order.price * 0.08;
    const total = order.price + tax;

    // 2. Format Email
    const message = `Your total is $${total}.`;

    // 3. Send Email
    emailService.send(order.email, message);
}
```

**Refactored Code (Better Structure):**
```javascript
function calculateTotal(price) {
    return price * 1.08;
}

function sendInvoice(order) {
    const total = calculateTotal(order.price);
    const message = `Your total is $${total}.`;
    emailService.send(order.email, message);
}
```
Now `calculateTotal` is its own reusable, testable function!

---

# Common Beginner Mistakes

1.  **"Refactoring" and "Changing Features" at the Same Time:** This makes it impossible to know why your tests are failing.
2.  **Over-Refactoring:** Making code so abstract and complex that it's harder to read than the original messy version.
3.  **Refactoring Without Tests:** This is extremely dangerous and almost always leads to bugs.
4.  **Forgetting to Clean Up:** Not deleting old, unused code after moving logic to a new function.

---

# Advice from Senior Developers

- **Leave it Better than You Found It:** Every time you touch a file, try to refactor one small thing.
- **Refactor When the Code "Smells":** If you find yourself saying "This is hard to read," it's time to refactor.
- **Tools are Your Friend:** Many IDEs have built-in "Refactor" menus that can automatically rename variables or extract functions for you.

---

# Next Lesson

Learn how to ensure your code stays high-quality with testing:

➡ **[Testing and Code Quality](testing-and-code-quality.md)**
