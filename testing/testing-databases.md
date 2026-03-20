---
layout: default
title: Testing Databases
---

# Testing Databases

Testing code that interacts with a database is a form of **Integration Testing**. The challenge is ensuring that your tests are fast, isolated, and don't mess up real data.

## 1. Use a Dedicated Test Database

NEVER run your tests against your development or production database. Most frameworks (like Django, Spring Boot, or Rails) will automatically create a temporary database for your tests.

### Why?
- **Safety:** You don't want your tests to delete real user data.
- **Consistency:** You want every test to start with the same known state.

## 2. Setup and Teardown

Every database test should follow these steps:
1.  **Setup:** Create the tables and insert any necessary "seed" data (e.g., a test user).
2.  **Act:** Run the code that modifies the database.
3.  **Assert:** Check if the database state is correct.
4.  **Teardown:** Delete the data or "roll back" the transaction so the next test starts fresh.

## 3. Example: Java / Spring Boot Data Test

Spring Boot makes this easy with the `@DataJpaTest` annotation, which uses an in-memory database (like H2) and rolls back changes after each test.

```java
@DataJpaTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testSaveUser() {
        // Arrange
        User user = new User("dev_user", "password123");

        // Act
        userRepository.save(user);

        // Assert
        User found = userRepository.findByUsername("dev_user");
        assertNotNull(found);
    }
}
```

## 4. Avoiding "Flaky" Database Tests

- **Don't rely on IDs:** Database IDs (1, 2, 3...) can change. Assert on unique fields like `email` or `username` instead.
- **Don't rely on Order:** Unless you have an `ORDER BY` clause, databases don't guarantee the order of results.
- **Clean up properly:** If Test A fails and doesn't clean up, Test B might fail because of Test A's leftover data.

## 5. Mocking vs. Real Database

- **Unit Test:** Mock the database repository. It's fast and tests your logic.
- **Integration Test:** Use a real test database. It's slower but tests your SQL and configuration.

## Summary

Database tests are slower than unit tests but essential for verifying that your data layer actually works. Keep them isolated and always clean up.
