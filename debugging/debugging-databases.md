# Debugging Databases

Databases are where your application's data is stored. If you're getting wrong data, missing data, or slow responses, the problem might be in the database.

---

# How to Debug a Database Issue

Database problems usually fall into three categories:
1. **The Query:** You're asking for the wrong thing (SQL syntax error or wrong logic).
2. **The Data:** The database doesn't have what you're looking for (wrong or missing information).
3. **The Connection:** Your application can't even talk to the database (network error or wrong credentials).

---

# Architecture Diagram (The Data Flow)

Follow the query from your code to the database:

```text
       [ App Code ] --- (1) "Select * from users"
           ↓
       [ DB Connection ] --- (2) "Wait... Is the DB even running?"
           ↓
       [ Database Engine ] --- (3) "Checking table schema..."
           ↓
       [ Storage (Disk) ] --- (4) "Wait... There is no user with that ID."
```

---

# Common Database Problems

### 1. The "Invisible" Data (Missing Migrations)
You added a new column to your database locally, but you forgot to update the production database. Your app crashes because it tries to find a column that doesn't exist!

**The Fix:** Always use database **migrations** to keep all your environments in sync.

### 2. The "N+1" Problem (Slow Queries)
This is a classic performance bug. Instead of asking for "all users and their orders" in one query, your app asks for "all users" once, then makes 100 *separate* queries for each user's orders. This is 100 times slower!

**The Fix:** Use "joins" or "eager loading" to get all the data you need in one query.

### 3. Case Sensitivity
You're searching for `user@Example.com`, but the database stores it as `user@example.com`. Your query returns nothing!

**The Fix:** Always "normalize" your data (e.g., make all emails lowercase) before saving or searching.

---

# Real-World Scenario: The "Missing User" Bug

**The Problem:** A user says they can't log in, even though they just signed up.

**The Debugging:**
1. Connect directly to the database using a tool like **DBeaver** or the **psql** command line.
2. Run a query: `SELECT * FROM users WHERE email = 'the_user@email.com';`
3. The database returns zero results.
4. Check the `logs` of your sign-up function.
5. You see a `ValidationError: password is too short`.
6. You realize that the sign-up *failed*, but the frontend didn't show an error message!

---

# Common Beginner Mistakes

- **Not Checking the Database Directly:** Always verify the data in the database *first* before you spend hours debugging your application code.
- **Putting Logic in SQL:** Writing complex logic inside your SQL queries makes them very hard to debug. Keep your queries simple and do the complex logic in your application code.
- **Forgetting to Commit:** In some databases, you have to "commit" your changes before they are saved. If you're testing manually, don't forget this step!

---

# Advice for Beginners

- **Use a GUI Tool:** Tools like **DBeaver**, **TablePlus**, or **Postico** make it much easier to see your data than using the command line.
- **Log Your Queries:** Most web frameworks allow you to log every SQL query they make. Turn this on while you're debugging!
- **Check Your Indexes:** If a query is slow, make sure you have an "index" on the columns you're searching for (like `email` or `id`).

---

# Next Lesson

Your app and database are often running inside containers. Let's learn how to look inside:

➡ **[Debugging Docker Containers](debugging-docker-containers.md)**
