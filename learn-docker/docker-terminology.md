---
layout: default
title: Docker Terminology
---

# Docker Terminology

To learn Docker effectively, you first need to understand its unique language. The names and concepts can be confusing at first, but they all fit together in a logical way.

---

# The 3 Pillars of Docker

### 1. The Docker Image (The Blueprint)
An **image** is a read-only template that contains everything your application needs to run: the code, libraries, settings, and the operating system.
- **Analogy:** It's like a recipe for a cake. You can't eat the recipe, but you use it to bake the cake.

### 2. The Docker Container (The Actual Application)
A **container** is a running instance of an image. You can have many containers running from the same image at the same time.
- **Analogy:** It's the actual cake baked from the recipe.

### 3. The Docker Registry (The Library)
A **registry** is a place where Docker images are stored so you can share them with others or download images that others have created.
- **Analogy:** It's like a cookbook (a collection of recipes). The most popular registry is **Docker Hub**.

---

# Relationship Diagram

```text
       [ DOCKER REGISTRY ] (Library of blueprints)
               ↓ (Pull)
       [ DOCKER IMAGE ] (A single blueprint)
               ↓ (Run)
       [ DOCKER CONTAINER ] (A running instance)
```

---

# Other Important Terms

### Docker Hub
The default, public registry where most developers find official images for tools like Node.js, Python, PostgreSQL, and more.

### Dockerfile
A simple text file with instructions on how to build a Docker image. (You'll learn how to write these soon!)

### Volume
A way to store data outside of a container so it doesn't disappear when the container stops.

### Docker Compose
A tool for defining and running multi-container applications (e.g., an API + a Database).

---

# How Junior Developers Encounter This

- **"I need to pull the Postgres image":** (Getting the blueprint from the registry).
- **"Is the container running?":** (Checking if the application instance is active).
- **"We need to update the Dockerfile":** (Changing the instructions for the blueprint).

---

# Common Beginner Mistakes

- **Confusing Images and Containers:** Remember: you "build" an image, and you "run" a container.
- **Thinking Containers are Virtual Machines (VMs):** While they look similar, containers are much smaller and faster because they share the computer's operating system.
- **Thinking a Registry is a Database:** Registries store *images* (blueprints), not the actual *data* your application produces.

---

# Next Lesson

Now let's see these blueprints and instances in action:

➡ **[Images and Containers](images-and-containers.md)**
