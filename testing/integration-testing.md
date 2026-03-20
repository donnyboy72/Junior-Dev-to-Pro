---
layout: default
title: Integration Testing
---

# Integration Testing

While unit tests check individual bricks, **integration tests** check if those bricks fit together to build a wall.

## What is an Integration?

An integration is any boundary between two components. This could be:
- Your application and its **Database**.
- Your frontend and your **API**.
- Your service and a **Third-Party Service** (like Stripe or AWS).

## The Goal

Integration tests catch bugs that unit tests miss, such as:
- Incorrect database queries.
- Misconfigured API endpoints.
- Incompatible data formats between two services.

## Example: Testing a Database Save (Python)

In this example, we aren't testing the `save_user` logic itself, but rather that our code can successfully talk to a real (or test) database.

```python
import pytest
from my_app import db, User

def test_db_integration():
    # Arrange: Create a new user
    user = User(username="test_dev", email="test@example.com")
    
    # Act: Save to database
    db.session.add(user)
    db.session.commit()
    
    # Assert: Fetch it back and verify it exists
    retrieved_user = User.query.filter_by(username="test_dev").first()
    assert retrieved_user is not None
    assert retrieved_user.email == "test@example.com"
    
    # Cleanup: Remove the test data
    db.session.delete(retrieved_user)
    db.session.commit()
```

## How it Differs from Unit Testing

| Feature | Unit Test | Integration Test |
| :--- | :--- | :--- |
| **Isolation** | Mocked/Fake dependencies | Uses real (or test-specific) dependencies |
| **Speed** | Very Fast | Slower (due to I/O) |
| **Setup** | Minimal | Requires database/network setup |

## Best Practices

1.  **Use a Test Database:** NEVER run integration tests against your production database.
2.  **Start from a Clean State:** Each test should set up its own data and clean up afterward.
3.  **Test the Happy Path and Errors:** Test that the components work together when things go right AND when the database/service is down.

## Summary

Integration tests provide higher confidence than unit tests but are harder to maintain. Balance is key.
