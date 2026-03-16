# Debugging Docker Containers

Docker makes it easy to run applications in isolated environments. But when things go wrong inside a container, it can feel like you're debugging a "black box."

This lesson will show you how to look inside that box and find the problem.

---

# The Docker Debugging Toolkit

These three commands are your most important tools:

### 1. `docker logs <container_name>`
This shows you everything the application inside the container has printed to its console. It's the first thing you should check!

### 2. `docker exec -it <container_name> sh` (or `bash`)
This allows you to "log in" to the running container. You can look at the file system, check environment variables, and run tests from the inside.

### 3. `docker inspect <container_name>`
This gives you a massive JSON object containing every detail about the container: its IP address, port mappings, and volume mounts.

---

# Common Docker Problems

### 1. The "Exited" Container
You run `docker-compose up`, but one of your containers starts and then immediately stops.
**The Debugging:** Run `docker logs <container_id>`. You'll usually see an error message like `Cannot find module app.js` or `Database connection failed`.

### 2. The "Wrong Port" Mapping
You can access your app at `localhost:3000`, but when it's in Docker, it doesn't work!
**The Debugging:** Check your `docker-compose.yml` file. Are you mapping `3000:3000`? Or is the app inside the container actually running on port `8080`?

### 3. The "Network Disconnect"
Your API container can't talk to your database container.
**The Debugging:** Log in to the API container (`docker exec`) and try to `ping` the database container using its name: `ping db`. If it fails, they aren't on the same Docker network.

---

# Architecture Diagram (The Container Wall)

Think of a container like a small house. If something is broken inside, you need to go through the front door:

```text
       [ YOUR COMPUTER ]
           ↓
    [ docker logs ] --- (1) "Listen at the window."
           ↓
    [ docker exec ] --- (2) "Go inside the house."
           ↓
    [ docker inspect ] --- (3) "Check the blueprints."
```

---

# Real-World Scenario: The "Missing Env Variable" Bug

**The Problem:** Your database connection is failing with "Invalid Credentials."

**The Debugging:**
1. Run `docker exec -it my_api_container env`.
2. This will list all environment variables inside the container.
3. You see `DB_PASSWORD=null`.
4. You check your `docker-compose.yml` and realize you misspelled it as `DATABASE_PASSWORD`.

---

# Common Beginner Mistakes

- **Not Checking the Logs:** Many beginners just keep restarting the container, hoping it will "fix itself." It won't! Read the logs!
- **Ignoring the "Volumes":** If your data disappears every time you restart a container, you probably didn't set up a Docker "Volume" correctly.
- **Forgetting that "localhost" is Different:** Inside a Docker container, `localhost` refers to the *container itself*, not your computer! If your API wants to talk to a database on your computer, use `host.docker.internal` (on Windows/Mac).

---

# Advice for Beginners

- **Use "Docker Desktop":** The GUI version of Docker makes it easy to see logs and open a terminal inside a container with just one click.
- **Keep Your Containers Small:** Use "Alpine" versions of images to make them faster to build and easier to debug.
- **Check the "Health Checks":** If a container is "unhealthy," Docker will tell you in the `docker ps` list.

---

# Next Lesson

Now let's look at the most stressful type of debugging:

➡ **[Debugging Performance Issues](debugging-performance-issues.md)**
