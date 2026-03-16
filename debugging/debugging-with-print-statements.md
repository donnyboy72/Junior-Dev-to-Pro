# Debugging with Print Statements

"Print debugging" is the most common way developers find bugs. It's the process of inserting commands into your code to output information to the console while the program is running.

Whether it's `console.log()` in JavaScript, `print()` in Python, or `printf()` in C, the goal is the same: **to see what's happening inside your code.**

---

# Why Use Print Statements?

Print statements are like "breadcrumbs." They help you see:
1. **The Flow:** Did this part of the code even run?
2. **The Data:** What is the value of this variable right now?
3. **The Timing:** How long did this function take to execute?

---

# How to Print Debug Effectively

Don't just print "here" or "hello." Use structured output to make your logs useful.

### 1. Label Your Logs
```javascript
// BAD:
console.log(user);

// GOOD:
console.log("LOGIN_DEBUG: user data is:", user);
```

### 2. Print the Variable Name and Value
This makes it much easier to find your logs in a busy console.
```python
# GOOD:
print(f"DEBUG: order_id={order_id}, price={price}")
```

### 3. Trace the Flow
```javascript
function login(user) {
    console.log("DEBUG: entering login function");
    if (!user) {
        console.log("DEBUG: user is null, exiting");
        return;
    }
    console.log("DEBUG: user is valid, processing login");
}
```

---

# Real-World Scenario: The "Empty Cart" Bug

**The Problem:** Users are clicking "Add to Cart," but the cart is still empty.

**The Debugging:**
```javascript
function addToCart(item) {
    console.log("DEBUG: adding item to cart:", item); // Check if function is called
    let cart = getCart();
    console.log("DEBUG: current cart state:", cart); // Check initial state
    cart.push(item);
    console.log("DEBUG: cart state after push:", cart); // Check final state
}
```

**The Discovery:** Looking at the console, you see `DEBUG: current cart state: undefined`. Aha! `getCart()` is returning `undefined` instead of an empty array.

---

# Common Beginner Mistakes

- **Leaving Print Statements in Production:** Always remove your debug logs before you commit your code!
- **Not Labelling Logs:** Having a console full of values like `true`, `123`, and `{}` makes it impossible to know which log came from where.
- **Over-Printing:** Printing thousands of lines in a loop can actually slow down your program (and make your console unusable).

---

# Advice for Beginners

- **Use "Searchable" Prefixes:** Use a prefix like `FIXME:` or `DEBUG_NAME:` so you can easily find and delete all your logs before committing.
- **Print Objects as JSON:** In JavaScript, use `console.log(JSON.stringify(obj, null, 2))` to see a pretty-printed version of a complex object.
- **Don't Forget to Remove Them!** (I'm saying it again because it's that important!)

---

# Next Lesson

Print statements are great, but sometimes you need more power:

➡ **[Using Debuggers (Breakpoints & More)](using-debuggers.md)**
