# Common Docker Mistakes

Learning Docker is like learning a new language. You'll make mistakes, and that's okay! Here are the most common ones junior developers make—and how to avoid them.

---

# Mistake 1: Not Re-building Your Images
You change your code, refresh the page, but nothing changes in your container.
- **Why it's bad:** Docker containers run a static copy of your code. If you don't re-build the image, you're running the old version.
- **The Fix:** Run `docker build` (or `docker-compose up --build`) every time you make a major change to your code.

---

# Mistake 2: Forgetting about Volumes
You save some data to your database, restart the container, and all your data is gone!
- **Why it's bad:** Containers are disposable. Anything you save inside them is deleted when they stop.
- **The Fix:** Use **Volumes** to store your persistent data (like database files) outside of the container.

---

# Mistake 3: Using `localhost` Inside a Container
Your API tries to connect to `localhost:5432`, but the database is in another container.
- **Why it's bad:** Inside a container, `localhost` refers to the *container itself*, not your computer or other containers.
- **The Fix:** Use the **service name** (e.g., `db:5432`) defined in your `docker-compose.yml` file.

---

# Mistake 4: Putting Secrets in the Dockerfile
Hardcoding your database password or Stripe API key directly in your Dockerfile.
- **Why it's bad:** Anyone who has access to your Docker image can see those secrets!
- **The Fix:** Use an `.env` file and pass your secrets through environment variables at runtime.

---

# Mistake 5: Not Cleaning Up
Having hundreds of old, stopped containers and unused images taking up your hard drive space.
- **Why it's bad:** It makes your machine slow and wastes your disk space.
- **The Fix:** Use `docker system prune` occasionally to delete all unused containers, images, and networks.

---

# Final Summary Diagram (The Docker Mindset)

```text
       [ JUNIOR MINDSET ]             [ PROFESSIONAL MINDSET ]
    +-----------------------+      +--------------------------+
    | "It works on my app." |  →   | "It works in the image." |
    | "I'll just restart."  |  →   | "I'll check the logs."   |
    | "Everything is root." |  →   | "Everything is isolated."|
    +-----------------------+      +--------------------------+
```

---

# Final Conclusion

Docker is a journey. You've learned how to:
1.  Install and run Docker.
2.  Manage images and containers.
3.  Write Dockerfiles and use Docker Compose.
4.  Handle networking and volumes.
5.  Debug and secure your containers.

With these skills, you're ready to build and deploy professional-level software!

---

# Ready to Start?

Go back to the module landing page to review anything you missed:

➡ **[Learn Docker - Home](index.md)**
