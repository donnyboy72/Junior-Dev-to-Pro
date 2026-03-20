---
layout: default
title: Writing Testable Code
---

# Writing Testable Code

The biggest obstacle to testing isn't the testing framework—it's the way the code is written. If your code is "tightly coupled," it will be nearly impossible to unit test.

## The Problem: Tight Coupling

Look at this Java example:

```java
public class UserService {
    public void registerUser(String email) {
        // Hardcoded dependency!
        EmailClient client = new EmailClient(); 
        client.sendWelcomeEmail(email);
    }
}
```

In a unit test, we don't want to send a real email. But because `EmailClient` is created inside the method, we can't replace it with a fake one.

## The Solution: Dependency Injection

Instead of creating the dependency inside the class, "inject" it through the constructor.

```java
public class UserService {
    private final EmailClient emailClient;

    // We pass the client in from the outside
    public UserService(EmailClient emailClient) {
        this.emailClient = emailClient;
    }

    public void registerUser(String email) {
        emailClient.sendWelcomeEmail(email);
    }
}
```

Now, in our test, we can pass a **Mock** (a fake version) of `EmailClient`.

## Principles of Testable Code

1.  **Single Responsibility:** A function should do one thing. Small functions are easier to test than 100-line "monster" functions.
2.  **Avoid Global State:** If your function relies on a global variable, its behavior is unpredictable.
3.  **Favor Composition over Inheritance:** Pass objects in rather than inheriting complex behaviors.
4.  **Pure Functions:** Whenever possible, write functions that take an input and return an output without changing any outside data.

## Real-World Benefit

Writing testable code naturally leads to **clean code**. When you make code easy to test, you also make it easier to read, maintain, and reuse.

## Summary

If you find yourself struggling to write a test, don't blame the test. Look at the code you're trying to test and ask: "Can I decouple this?"
