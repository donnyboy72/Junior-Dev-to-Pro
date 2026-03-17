---
layout: default
title: What is Docker?
---

# What is Docker?

Docker is a platform for building, running, and managing applications inside containers.

A **container** is a lightweight package that includes:

- the application code
- runtime environment
- libraries
- dependencies
- configuration

Everything needed to run the application.

---

# Why Docker Exists

Before Docker, developers often ran into problems where software worked on one machine but failed on another.

### Traditional Development Problem

```text
Developer Machine
------------------
OS
Python 3.11
Node 18
Redis
PostgreSQL
App

Production Server
------------------
OS
Python 3.9
Node 16
Redis (missing)
PostgreSQL
App

Result: ❌ Application breaks
```

### The Docker Approach

```text
Developer Machine
------------------
OS
Docker
Container
 ├── App
 ├── Python 3.11
 ├── Dependencies

Production Server
------------------
OS
Docker
Container
 ├── App
 ├── Python 3.11
 ├── Dependencies

Result: ✅ Runs exactly the same
```

---

# Containers vs Virtual Machines

Containers are often confused with virtual machines (VMs). 

Virtual machines run entire operating systems. Containers share the host system’s kernel but isolate applications.

**Virtual Machine:**
```text
Hardware
Host OS
Hypervisor
Guest OS
Application
```

**Container:**
```text
Hardware
Host OS
Docker
Container
Application
```

Containers are much faster and lighter.

---

# Docker Core Concepts

Understanding Docker requires knowing a few key terms.

### Image
A blueprint for creating containers.

### Container
A running instance of an image.

### Dockerfile
A script that defines how to build an image.

### Docker Hub
A registry where Docker images are stored.

---

# Docker Architecture

```text
Dockerfile
    ↓
Docker Image
    ↓
Docker Container
    ↓
Running Application
```

---

# Next Lesson

➡ **[Installing Docker](installing-docker.md)**
