---
layout: default
title: Unit Testing
---

# Unit Testing

Unit testing is the foundation of a healthy codebase. A "unit" is the smallest piece of testable code—usually a single function or a method in a class.

## Characteristics of a Good Unit Test

- **Isolated:** It doesn't talk to a database, the internet, or the file system.
- **Deterministic:** It should pass or fail for the same reason every time.
- **Fast:** You should be able to run hundreds of them per second.

## Example: Java with JUnit 5

Let's say we have a simple `Calculator` class.

```java
// Calculator.java
public class Calculator {
    public int multiply(int a, int b) {
        return a * b;
    }
}
```

Here is how we test it:

```java
// CalculatorTest.java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {
    @Test
    public void testMultiply() {
        Calculator calc = new Calculator();
        int result = calc.multiply(5, 2);
        assertEquals(10, result, "5 * 2 should be 10");
    }
}
```

## Example: Python with Pytest

The same logic in Python:

```python
# calculator.py
def multiply(a, b):
    return a * b

# test_calculator.py
import pytest
from calculator import multiply

def test_multiply():
    assert multiply(5, 2) == 10
```

## The AAA Pattern

Professional developers follow the **Arrange-Act-Assert** pattern to keep tests readable:

1.  **Arrange:** Set up the objects and data needed for the test.
2.  **Act:** Call the function you are testing.
3.  **Assert:** Check that the result matches your expectations.

```python
def test_user_initials():
    # Arrange
    user = User("John", "Doe")
    
    # Act
    initials = user.get_initials()
    
    # Assert
    assert initials == "JD"
```

## Why Unit Test?

If your unit tests pass but your app is broken, you know the individual pieces work, but the "glue" is missing. This makes debugging much easier by narrowing down where the problem is.

## Summary

Write unit tests for your business logic. They are your first line of defense against bugs.
