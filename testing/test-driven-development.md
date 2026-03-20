---
layout: default
title: Test-Driven Development (TDD)
---

# Test-Driven Development (TDD)

Test-Driven Development is a workflow where you write your tests **before** you write your functional code.

## The Red-Green-Refactor Cycle

1.  **RED:** Write a test for a small bit of functionality and watch it fail. (It fails because the code doesn't exist yet).
2.  **GREEN:** Write the *absolute minimum* amount of code to make the test pass. Don't worry about "clean code" yet.
3.  **REFACTOR:** Now that you have a passing test, clean up your code. The test ensures you don't break the logic while making it pretty.

## Why use TDD?

- **No Over-Engineering:** You only write the code you actually need to pass the test.
- **100% Coverage:** Every line of code you write is guaranteed to have a test.
- **Better Design:** It forces you to think about the *interface* (how the function is used) before you think about the *implementation*.

## TDD Example (Python)

**Requirement:** Create a function `is_password_valid` that requires at least 8 characters.

### Step 1: Red
```python
def test_password_length():
    assert is_password_valid("1234567") == False
    assert is_password_valid("12345678") == True
```
*Result: `NameError: name 'is_password_valid' is not defined`*

### Step 2: Green
```python
def is_password_valid(pwd):
    return len(pwd) >= 8
```
*Result: `Test Passed!`*

### Step 3: Refactor
Maybe we want to move the "8" to a constant.
```python
MIN_LENGTH = 8
def is_password_valid(pwd):
    return len(pwd) >= MIN_LENGTH
```
*Result: `Test still passes!`*

## Summary

TDD feels slow at first, but it prevents the "spaghetti code" and "fear of change" that plagues large projects.
