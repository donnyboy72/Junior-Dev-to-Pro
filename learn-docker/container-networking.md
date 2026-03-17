---
layout: default
title: Container Networking
---

# Container Networking

In a real project, your containers don't just sit alone—they need to talk to each other. For example, your API container needs to connect to your database container.

**Container Networking** is how Docker makes this possible.

---

# Key Concepts of Docker Networking

### 1. The Default Bridge Network
When you run a container without specifying a network, it's placed on the default "bridge" network. This allows it to talk to other containers on the same network.

### 2. DNS Names (Using Service Names)
The most important rule in Docker networking is: **don't use IP addresses!** Instead, use the name of the service defined in your `docker-compose.yml` file.
- **Example:** In your API code, your database URL should be `db:5432`, not `localhost:5432` or `172.17.0.2`.

### 3. Exposing Ports vs. Publishing Ports
- **Expose:** Tells other containers on the *same* network that a port is open.
- **Publish (`-p`):** Maps a port from the container to *your* computer so you can access it in your browser.

---

# Architecture Diagram (The Network Bridge)

```text
       [ YOUR COMPUTER ]
               ↓ (Publish 3000:3000)
       [ DOCKER NETWORK BRIDGE ]
               ↓
       ---------------------------
       ↓                         ↓
   [ API Container ]         [ DB Container ]
       ↓ (Connects to 'db:5432') ↑
```

---

# Why Docker Networking Exists

### 1. Isolation
Containers on different networks can't talk to each other, which is great for security.

### 2. Convenience
Docker's built-in DNS handles the complex task of finding the IP address of each container automatically.

### 3. Scalability
You can easily add or remove containers from a network without changing any code.

---

# How Junior Developers Encounter This

- **"I can't connect to the database":** (Forgetting to use the service name 'db').
- **"I can't see the app in my browser":** (Forgetting to publish the port with `-p`).
- **"The containers are on different networks":** (Learning how to set up custom networks in `docker-compose.yml`).

---

# Common Beginner Mistakes

- **Using `localhost` Inside a Container:** If your API tries to connect to `localhost:5432`, it's looking for a database *inside* the API container, which doesn't exist! Use `db:5432` instead.
- **Forgetting to Expose the Correct Port:** Make sure the port in your code (e.g., `PORT=3000`) matches the port you're exposing in your Dockerfile.
- **Assuming One Container Can Access All Others:** If you have multiple `docker-compose.yml` files, their containers won't be able to talk to each other unless you put them on the same network explicitly.

---

# Next Lesson

Sometimes things go wrong. Let's learn how to find the problem:

➡ **[Debugging Containers](debugging-containers.md)**
