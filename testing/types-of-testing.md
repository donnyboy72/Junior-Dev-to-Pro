---
layout: default
title: Types of Testing
---

# Types of Testing

Not all tests are the same. We use different types of tests to check different parts of our application. The industry standard mental model for this is the **Testing Pyramid**.

## The Testing Pyramid

Imagine a pyramid where the width represents the number of tests and the height represents the complexity and scope.

1.  **Unit Tests (Bottom - Many):** Test individual functions or classes in isolation.
2.  **Integration Tests (Middle - Some):** Test how different parts of your system work together (e.g., your app + its database).
3.  **End-to-End (E2E) Tests (Top - Few):** Test the entire user flow from the browser to the backend and back.

---

## 1. Unit Tests
- **Scope:** One function or class.
- **Speed:** Extremely fast (milliseconds).
- **Goal:** Verify that a specific piece of logic is correct.
- **Tools:** JUnit (Java), Pytest (Python), Jest (JavaScript).

## 2. Integration Tests
- **Scope:** Two or more modules working together.
- **Speed:** Moderate (seconds).
- **Goal:** Ensure that different components "talk" to each other correctly.
- **Example:** Checking that your code can successfully save a user to the database.

## 3. End-to-End (E2E) Tests
- **Scope:** The entire application.
- **Speed:** Slow (minutes).
- **Goal:** Verify the system works from the user's perspective.
- **Example:** Opening a browser, logging in, and clicking "Buy Now."
- **Tools:** Selenium, Cypress, Playwright.

## Why the Pyramid Shape?

- **Cost:** E2E tests are expensive to write and maintain.
- **Reliability:** E2E tests are "flaky" (they fail sometimes because of network or browser issues).
- **Feedback Loop:** Unit tests give you instant feedback while you're coding.

## Other Types You Should Know

- **Smoke Tests:** A quick set of tests to see if the "house is on fire" (does the app even start?).
- **Regression Tests:** Tests written specifically to ensure an old bug doesn't come back.
- **Performance Tests:** Testing how the app behaves under heavy load.

## Summary

As a junior developer, your priority should be building a solid base of **unit tests**, followed by critical **integration tests**. Don't rely solely on E2E tests!
