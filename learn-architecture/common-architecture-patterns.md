# Common Architecture Patterns

Architecture patterns are "standard blueprints" for building software. Rather than inventing a new design for every project, developers use these proven structures to solve common problems.

---

# Pattern 1: Model-View-Controller (MVC)

MVC is the most popular pattern for building web applications. It divides the app into three parts:

1.  **Model:** The data and logic (e.g., User, Order).
2.  **View:** What the user sees (e.g., HTML, CSS, JSON).
3.  **Controller:** The "middleman" that takes input from the user and updates the Model or View.

```text
       [ User (View) ]
               ↓ (Action)
       [ Controller ]
               ↓ (Update / Request)
       [ Model (Data) ]
```

---

# Pattern 2: Hexagonal Architecture (Ports and Adapters)

This pattern focuses on making your core logic independent of everything else. You can swap your database or your UI without changing the "Heart" of the app.

```text
       [ External API ]   [ Database ]
               ↓                 ↓
       [ Adapter ]       [ Adapter ]
               ↓                 ↓
       [------ Core Business Logic ------]
               ↑                 ↑
       [ Adapter ]       [ Adapter ]
               ↑                 ↑
       [ Web App ]       [ CLI Tool ]
```

---

# Why Patterns Exist

### 1. Common Language
When you say "this is an MVC app," other developers instantly understand the high-level design.

### 2. Best Practices
Patterns are based on years of experience from millions of developers. They help you avoid common mistakes.

### 3. Maintainability
Standardized structures make it easier for new team members to learn the codebase.

---

# How Junior Developers Encounter This

- **Web Frameworks:** Most popular frameworks like **Ruby on Rails**, **Django (Python)**, or **Laravel (PHP)** are built using the MVC pattern.
- **Service Layers:** Adding a "Services" folder to your project to keep your business logic separate from your controllers (Hexagonal influence).
- **Dependency Injection:** A technique used in Hexagonal architecture to pass "Adapters" into your "Core Logic."

---

# Common Beginner Mistakes

### 1. "God" Models or Controllers
Putting everything into one giant file. Keep your models and controllers small and focused on one job.

### 2. Violating the Flow
Controllers should talk to models, but models should almost *never* talk to controllers. Keep the direction of data flow clear.

### 3. Choosing the Wrong Pattern
Using a complex pattern for a simple project. If you're building a "To-Do" list, you probably don't need Hexagonal architecture!

---

# Real-World Example: Shopify

Shopify is a massive application built with the **MVC pattern** (using Ruby on Rails). By sticking to a well-known pattern, they were able to grow their team to thousands of developers while still keeping the codebase organized and understandable.

---

# Next Lesson

Let's see how all these pieces fit together in a real project:

➡ **[Architecture in Real Projects](architecture-in-real-projects.md)**
