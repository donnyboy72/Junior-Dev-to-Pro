# Error Handling

In a perfect world, code never fails. In the real world, servers go down, users enter bad data, and APIs return unexpected results. **Good code is prepared for failure.**

---

# Why Error Handling Matters

If you don't handle errors, your application will "crash" or "freeze" when something goes wrong. Professional error handling ensures that the application stays running and gives the user (or developer) a clear explanation of what happened.

### Example: Before and After

**Bad Error Handling (Ignoring the Problem):**
```javascript
function getUserData(id) {
    const response = fetch(`api.com/users/${id}`);
    const data = response.json(); // What if fetch fails? This will crash!
    return data;
}
```

**Better Error Handling (Try/Catch):**
```javascript
async function getUserData(id) {
    try {
        const response = await fetch(`api.com/users/${id}`);
        if (!response.ok) {
            throw new Error(`User not found (Status: ${response.status})`);
        }
        return await response.json();
    } catch (error) {
        console.error("DEBUG: Failed to fetch user data:", error.message);
        return null; // Return something safe so the app doesn't crash
    }
}
```

---

# Professional Error Handling Rules

### 1. Use Try/Catch Blocks
Wrap risky code (like API calls or file system access) in `try/catch` blocks.

### 2. Be Specific with Error Messages
Don't just say "Something went wrong." Explain *what* went wrong and *why*.
- **Bad:** `throw new Error("Error")`
- **Good:** `throw new Error("Invalid email format provided")`

### 3. Don't "Swallow" Errors
Avoid catching an error and doing nothing with it. At the very least, log it!
- **Bad:** `catch(e) { }` (The error disappears forever!)

### 4. Handle "Edge Cases" Early
Check for bad data at the beginning of your function (this is called a "Guard Clause").
```javascript
function calculateAge(birthYear) {
    if (!birthYear || birthYear > 2026) {
        return 0; // Handle bad input early
    }
    return 2026 - birthYear;
}
```

---

# Error Flow Diagram

```text
       [ START ]
           ↓
       [ TRY BLOCK ] (Risky Code)
           ↓
       (Does it fail?)
       ↙           ↘
    [ NO ]       [ YES ]
      ↓             ↓
   [ CONTINUE ]  [ CATCH BLOCK ] (Handle the error safely)
```

---

# Common Beginner Mistakes

1.  **Empty Catch Blocks:** Catching an error and doing absolutely nothing.
2.  **Generic Errors:** Throwing errors with no descriptive message.
3.  **Forgetting Async/Await:** Not handling errors in asynchronous code correctly.
4.  **Logging Sensitive Data:** Accidentally logging passwords or API keys in error messages.

---

# Advice from Senior Developers

- **Fail Loudly in Development:** Make sure errors are obvious while you're coding so you can fix them.
- **Fail Gracefully in Production:** Don't show the user a "scary" technical error message. Show them a friendly "We're having trouble connecting" message instead.
- **Use Logging Tools:** In a real job, use tools like **Sentry** or **Datadog** to track errors that happen to real users.

---

# Next Lesson

Learn how to write code that lives for a long time:

➡ **[Writing Maintainable Code](writing-maintainable-code.md)**
