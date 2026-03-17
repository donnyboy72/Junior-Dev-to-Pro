---
layout: default
title: Real-World Code Examples
---

# Real-World Code Examples

In this lesson, we'll see how messy code evolves into clean, professional code through refactoring. We'll use a "Shopping Cart" feature as our example.

---

# Version 1: Messy Code (The Starting Point)

This code "works," but it's hard to read, hard to test, and contains duplicate logic.

```javascript
// cart.js
function process(c, u) {
    let t = 0;
    for (let i = 0; i < c.length; i++) {
        t += c[i].p;
    }
    if (u.isNew) {
        t = t * 0.9; // 10% discount for new users
    }
    console.log("Total is " + t);
    db.save(u.id, c, t);
    email.send(u.email, "Your order total is " + t);
}
```
**Problems:**
- **Bad Naming:** What are `c`, `u`, `t`, `p`?
- **Too Many Responsibilities:** One function calculates the total, applies a discount, logs to the console, saves to the database, AND sends an email.
- **Hardcoded Logic:** The 10% discount is hidden inside the function.

---

# Version 2: Refactored Code (Clean & Maintainable)

Now let's apply our principles:
1.  **Meaningful Naming**
2.  **Small, Focused Functions (SRP)**
3.  **DRY (Don't Repeat Yourself)**

```javascript
const NEW_USER_DISCOUNT = 0.9;

function calculateCartTotal(items) {
    return items.reduce((total, item) => total + item.price, 0);
}

function applyNewUserDiscount(total) {
    return total * NEW_USER_DISCOUNT;
}

function checkout(cartItems, user) {
    let totalPrice = calculateCartTotal(cartItems);

    if (user.isNewMember) {
        totalPrice = applyNewUserDiscount(totalPrice);
    }

    saveOrderToDatabase(user.id, cartItems, totalPrice);
    sendOrderConfirmationEmail(user.email, totalPrice);
}
```

---

# Why Version 2 is Better

### 1. Readability
You can read `checkout` like a sentence. You don't have to guess what any variable means.

### 2. Testability
You can now write a unit test for `calculateCartTotal` without needing a "user" or a "database."

### 3. Maintainability
If the discount changes from 10% to 20%, you only have to change the `NEW_USER_DISCOUNT` constant at the top of the file.

---

# Refactoring Diagram (The Evolution)

```text
       [ MESSY VERSION ]
    (One function, bad names)
             ↓
       [ REFACTOR STEP 1 ] (Rename Variables)
             ↓
       [ REFACTOR STEP 2 ] (Extract Functions)
             ↓
       [ REFACTOR STEP 3 ] (Use Constants)
             ↓
       [ CLEAN VERSION ]
```

---

# How to Apply This to Your Code

1.  **Write the "Working" Version First:** Don't worry about clean code while you're still figuring out the logic.
2.  **Step Back and Review:** Once it works, look at your code as if you were a stranger. What part is confusing?
3.  **Refactor Small Pieces:** Rename one variable. Extract one function. Run your tests. Repeat!

---

# Common Beginner Mistakes

- **Thinking Refactoring is "Extra Work":** It's actually part of the coding process. "Done" means "Working and Clean."
- **Forgetting to Delete the Old Version:** After you refactor, make sure the old, messy code is gone!
- **Not Running Tests After Refactoring:** Always verify that you didn't break the application!

---

# Next Lesson

Finally, let's look at the most common clean code mistakes you should avoid:

➡ **[Common Clean Code Mistakes](common-clean-code-mistakes.md)**
