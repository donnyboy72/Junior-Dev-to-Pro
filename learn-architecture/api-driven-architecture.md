---
layout: default
title: API-Driven Architecture
---

# API-Driven Architecture

In modern software, systems rarely act alone. They talk to other systems using **APIs (Application Programming Interfaces)**.

API-driven architecture is a design approach where the interaction between different parts of a system is defined by clear, consistent APIs.

---

# What is an API?

An API is a set of rules that allow one piece of software to talk to another. It's like a menu in a restaurant. The menu lists the dishes you can order and how they are prepared. You don't need to know *how* the kitchen cooks the food, you just need to know how to order from the menu.

---

# Architecture Diagram (API-First)

In an API-driven system, the backend provides a "contract" (the API) that multiple clients can use:

```text
       [ Web App (React) ]    [ Mobile App (iOS) ]
               ↓                     ↓
       [----------------- API Gateway -----------------]
                               ↓
       [                   Backend API Server          ]
                               ↓
       [                   Database                    ]
```

---

# Why API-Driven Architecture Exists

### 1. Reusability
You can use the same API for your website, your mobile app, and even external partners.

### 2. Parallel Development
The frontend and backend teams can work at the same time as long as they agree on the API design first.

### 3. Decoupling
You can change the backend code completely, as long as the API stays the same. The frontend won't even know!

---

# How Junior Developers Encounter This

- **REST APIs:** The most common way systems talk today using `GET`, `POST`, `PUT`, and `DELETE`.
- **JSON:** The "language" of most APIs. It's how data is formatted when sent between systems.
- **API Documentation:** Using tools like **Swagger** or **Postman** to understand how an API works.

Example JSON response:
```json
{
  "id": 1,
  "name": "Pizza Margherita",
  "price": 12.99
}
```

---

# Common Beginner Mistakes

### 1. Inconsistent Naming
Naming some endpoints `/get-users` and others `/allUsers`. Stick to a clear pattern like `/users`.

### 2. Too Much Data
Sending 50 fields of data when the frontend only needs two. This wastes bandwidth and slows down the app.

### 3. Not Using Proper HTTP Methods
Using a `GET` request to delete a user. Always use the right tool for the job (`DELETE`).

---

# Real-World Example: Weather App

When you open a weather app on your phone:

- **Client:** The weather app on your phone.
- **External API:** A service like OpenWeatherMap that provides weather data.
- **Request:** Your app asks, "What's the weather in London?"
- **Response:** The API sends back a JSON object with the temperature, humidity, and wind speed.

The app uses this API to show you the data without needing its own weather satellites!

---

# Next Lesson

Now let's compare two big ways to organize an entire system:

➡ **[Monolith vs. Microservices](monolith-vs-microservices.md)**
