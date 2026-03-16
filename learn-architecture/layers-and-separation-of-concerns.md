# Layers and Separation of Concerns

One of the most powerful concepts in software architecture is **Separation of Concerns**. This simply means that different parts of your system should have different, well-defined jobs.

We achieve this by organizing our code into **layers**.

---

# What are Layers?

Think of a restaurant. You don't have the chef taking orders, the waiter cooking the food, and the manager washing the dishes all at once. Everyone has a specific role.

In software, we commonly use these layers:

1.  **Presentation Layer (Frontend):** What the user sees and interacts with.
2.  **Logic Layer (Backend/Business Logic):** Where the rules of the application live (e.g., "Only allow users over 18 to sign up").
3.  **Data Layer (Database):** Where the information is stored and retrieved.

---

# Architecture Diagram (Layered Model)

A common 3-tier architecture looks like this:

```text
       [ Presentation Layer ] (React, HTML/CSS)
               ↓
       [ Application Layer ] (Node.js, Python, Java)
               ↓
       [ Data Access Layer ] (SQL Queries, ORM)
               ↓
       [ Database ] (PostgreSQL, MySQL, MongoDB)
```

---

# Why Separation of Concerns Matters

### 1. Easier Testing
When you separate your logic from your UI, you can test the rules of your app without needing to open a browser.

### 2. Interchangeable Parts
If you decide to change your database from MySQL to PostgreSQL, you only need to update the **Data Layer**, not the whole application.

### 3. Clearer Responsibility
When you have a bug, you know exactly where to look. If the data isn't showing up correctly, check the **Data Layer**. If the button isn't clicking, check the **Presentation Layer**.

---

# How Junior Developers Encounter This

You'll see layers in the folder structure of almost every project:

- `/controllers`: Handles incoming requests (Presentation/API logic).
- `/services`: Where the actual "business logic" lives.
- `/models`: Defines the data structure and talks to the database.

Example file structure:
```text
/src
  /controllers
    userController.js
  /services
    userService.js
  /models
    userModel.js
```

---

# Common Beginner Mistakes

### 1. Putting Logic in the Controller
Controllers should be thin. Their only job is to receive a request and pass it to a service. Don't put complex calculations in your controller!

### 2. Leaking Data Concerns into the UI
The frontend shouldn't know the exact names of your database columns. It should only care about the data it needs to display.

### 3. Circular Dependencies
When Layer A depends on Layer B, and Layer B depends on Layer A. This creates a "spaghetti" architecture that is impossible to maintain.

---

# Real-World Example: An E-commerce Checkout

- **Presentation Layer:** The "Buy Now" button and the checkout form.
- **Application Layer:** Validating that the items are in stock and calculating the total price.
- **Data Layer:** Saving the order to the database and updating the inventory.

Each part does its own job and doesn't interfere with the others!

---

# Next Lesson

Now that we know how to organize a single app, let's look at how systems communicate:

➡ **[Client-Server Architecture](client-server-architecture.md)**
