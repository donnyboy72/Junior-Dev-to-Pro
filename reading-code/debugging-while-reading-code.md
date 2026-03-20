---
layout: default
title: Debugging While Reading Code
---

# Debugging While Reading Code

Reading code doesn't have to be a passive activity. Sometimes, the best way to understand code is to watch it run.

### The "Active Reading" Method
When you're confused by a function, you can use **print statements** or a **debugger** as "glasses" to see what's actually happening inside.

---

### Step-by-Step: The "Print Statement" Trail
This is the simplest way to see the code flow.

1.  **Find the entry point** of the function you're curious about.
2.  **Add a `console.log` (or `print`)** at the very beginning.
3.  **Add more logs** inside `if` statements or loops.
4.  **Run the app** and look at the output.

```javascript
function processData(data) {
  console.log("1. Input data:", data); // Is it what I expect?

  if (data.isValid) {
    console.log("2. Data is valid, continuing...");
    // ... logic ...
  } else {
    console.log("2. Data is INVALID, stopping.");
    return;
  }

  console.log("3. Final step reached.");
}
```

---

### Step-by-Step: Using a Debugger (The Pro Way)
A debugger lets you pause time and look around.

1.  **Set a breakpoint:** Click the margin next to a line of code in your IDE. A red dot should appear.
2.  **Run in Debug Mode:** Instead of `npm start`, use your IDE's "Run and Debug" button.
3.  **Interact with the App:** Trigger the code you're watching (e.g., click a button).
4.  **Watch the Magic:** The code will pause at your red dot.
5.  **Inspect Variables:** Look at the "Variables" panel to see what everything equals *right now*.
6.  **Step Through:** Use the "Step Into" (go inside a function) or "Step Over" (go to the next line) buttons.

---

### Practical Strategy: The "Why am I here?" Log
If you find yourself in a function but don't know how you got there, check the **Call Stack** in your debugger. It's a list of every function that was called to lead to the current one.

```text
    Call Stack:
    - processOrder (line 50)
    - handleCheckout (line 120)
    - onButtonClick (line 15)  <-- The origin
```

---

### Mental Model: The X-Ray
If reading code is like looking at a building from the outside, using a debugger is like having X-ray vision. You can see the electricity flowing through the walls and the water moving through the pipes in real-time.

---

### Common Mistake: "The Log Pollution"
Always remember to **delete your `console.log` statements** before you commit your code! You don't want to clutter the terminal for your teammates.

[Next: Working with Large Codebases](working-with-large-codebases.md)
