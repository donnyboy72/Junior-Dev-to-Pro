---
layout: default
title: Reading Functions and Classes
---

# Reading Functions and Classes

When you open a 200-line function, it's easy to get lost in the details. The key to reading complex logic is to break it down into smaller, manageable pieces.

### The IPO Model
Every function, no matter how complex, can be viewed through the **Input-Process-Output** (IPO) lens.

1.  **Input:** What data is this function receiving? (Parameters, arguments)
2.  **Process:** What does it *do* with that data? (The logic, loops, if statements)
3.  **Output:** What does it return or change? (Return value, API call, database update)

```text
    +-------------+      +--------------+      +--------------+
    |    INPUT    | ---> |   PROCESS    | ---> |    OUTPUT    |
    | (Parameters)|      |   (Logic)    |      | (Return Val) |
    +-------------+      +--------------+      +--------------+
```

---

### Step-by-Step: Breaking Down a Function
1.  **Read the Name:** Does the name accurately describe what it does? (If not, that's your first clue it might be complex).
2.  **Check the Inputs:** What types of data is it expecting? Are there default values?
3.  **Find the Early Returns:** Look for `if` statements at the beginning that return early (Guard Clauses). These handle the edge cases.
4.  **Identify the Core Logic:** What's the main thing this function is trying to achieve?
5.  **Check the Return Value:** What comes out the other end?

---

### Mental Model: The Story
Think of a function like a short story.
- **Introduction:** The parameters and setup.
- **Rising Action:** Validating inputs and preparing data.
- **Climax:** The core calculation or operation.
- **Resolution:** Returning the result or handling errors.

---

### Real-World Example: Reading a `calculateOrderTotal` Function

```javascript
function calculateOrderTotal(items, taxRate, discountCode) {
  // 1. INPUT: items (array), taxRate (number), discountCode (string)
  
  // 2. GUARD CLAUSE: No items? Return 0.
  if (!items || items.length === 0) return 0;

  // 3. PROCESS: Calculate base price
  let basePrice = items.reduce((acc, item) => acc + item.price, 0);

  // 4. PROCESS: Apply discount if it exists
  if (discountCode === 'SAVE10') {
    basePrice *= 0.9;
  }

  // 5. OUTPUT: Return the final price with tax
  return basePrice * (1 + taxRate);
}
```

---

### Practical Strategy: The "Mental Outline"
If a function is too long, try writing a 3-sentence summary of what it does in your head (or on a notepad). If you can't, it means you don't understand it yet—and that's okay. Keep digging.

---

### Common Mistake: "Line-by-Line Paralysis"
Don't try to understand every single line of a complex loop on your first pass. **Understand what the loop is *for* first**, then dive into the details if you need to.

[Next: Understanding Dependencies](understanding-dependencies.md)
