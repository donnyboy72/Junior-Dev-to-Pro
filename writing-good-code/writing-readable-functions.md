# Writing Readable Functions

Functions are the building blocks of your code. If your functions are small and focused, your entire application will be much easier to understand, test, and maintain.

---

# The Single Responsibility Principle (SRP)

The most important rule for functions is: **A function should do one thing, and it should do it well.**

If your function is 100 lines long and has multiple "steps," it's probably doing too many things.

### Example: Before and After

**Bad Function (Too Many Jobs):**
```javascript
function handleOrder(order) {
    // 1. Validate Order
    if (!order.items || order.items.length === 0) {
        throw new Error("Empty order");
    }

    // 2. Calculate Total
    let total = 0;
    order.items.forEach(item => total += item.price);

    // 3. Save to Database
    db.saveOrder(order, total);

    // 4. Send Email
    emailService.sendReceipt(order.userEmail, total);
}
```
This function is hard to test and hard to reuse. What if you just want to calculate the total without sending an email?

**Better Functions (Small and Focused):**
```javascript
function calculateOrderTotal(items) {
    return items.reduce((total, item) => total + item.price, 0);
}

function processOrder(order) {
    validateOrder(order);
    const total = calculateOrderTotal(order.items);
    saveOrderToDatabase(order, total);
    sendOrderConfirmationEmail(order.userEmail, total);
}
```
Now each piece of logic is in its own function. You can test `calculateOrderTotal` separately!

---

# Rules for Good Functions

### 1. Keep Them Small
Try to keep your functions under 20 lines. If it's longer than that, consider breaking it into smaller "helper" functions.

### 2. Limit Function Arguments
Try to have three or fewer arguments. If you need more, pass an object instead.
- **Bad:** `function createUser(name, age, email, address, phone)`
- **Good:** `function createUser(userDetails)`

### 3. Avoid "Side Effects"
A function should ideally take some input and return some output. Avoid changing global variables inside a function if you can.

### 4. No Boolean Flags as Arguments
If you find yourself passing `true` or `false` to a function to change its behavior, you probably need two separate functions.
- **Bad:** `function getOrders(activeOnly)`
- **Good:** `function getActiveOrders()`, `function getAllOrders()`

---

# Function Diagram (Decomposition)

```text
       [ ONE BIG JOB ]          [ MANY SMALL JOBS ]
    +-------------------+      +-------------------+
    |                   |      |    Function A     |
    |   Complex Logic   |  →   |    Function B     |
    |                   |      |    Function C     |
    +-------------------+      +-------------------+
```

---

# Common Beginner Mistakes

1.  **Writing "Mega" Functions:** Functions that take up the whole screen.
2.  **Duplicating Logic:** Writing the same code in three different functions instead of creating a helper.
3.  **Vague Naming:** Calling a function `doStuff()` or `process()`.
4.  **Deep Nesting:** Using multiple `if` statements inside each other. (Try to use "guard clauses" instead!)

---

# Advice from Senior Developers

- **One Level of Abstraction:** A function should only contain code that is at the same level of detail. (Don't mix high-level business rules with low-level database calls).
- **Functions are Free:** Don't be afraid to create many small functions. It makes your code *easier* to read, not harder!
- **Self-Documenting Code:** If you can't describe what a function does in its name, it's probably doing too much.

---

# Next Lesson

Learn how to keep your code DRY (Don't Repeat Yourself):

➡ **[Avoiding Duplicate Code](avoiding-duplicate-code.md)**
