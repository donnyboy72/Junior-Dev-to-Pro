# Dockerfile Basics

A **Dockerfile** is a text file that contains the "recipe" for building a Docker image. It's how you tell Docker exactly what your application needs to run.

---

# Key Dockerfile Instructions

### 1. `FROM` (Starting Point)
Every Dockerfile must start with `FROM`. It specifies the base image you want to build on top of.
- **Example:** `FROM node:18` (Starts with a pre-configured Node.js environment).

### 2. `WORKDIR` (The Main Folder)
Sets the "current directory" inside the container for any subsequent commands.
- **Example:** `WORKDIR /app`

### 3. `COPY` (Moving Files In)
Copies files from your local computer into the Docker image.
- **Example:** `COPY . .` (Copies everything in the current folder).

### 4. `RUN` (Executing Commands)
Runs a command while the image is being built (like installing a library).
- **Example:** `RUN npm install`

### 5. `EXPOSE` (Opening a Port)
Tells Docker that the container will listen on a specific port at runtime.
- **Example:** `EXPOSE 3000`

### 6. `CMD` (The Startup Command)
The command that runs when the container is finally started. **A Dockerfile can only have one `CMD`.**
- **Example:** `CMD ["npm", "start"]`

---

# Example Dockerfile for a Node.js App

```dockerfile
# Step 1: Start with Node.js
FROM node:18

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy our package files first (for efficiency!)
COPY package*.json ./

# Step 4: Install our dependencies
RUN npm install

# Step 5: Copy the rest of our code
COPY . .

# Step 6: Open the port our app uses
EXPOSE 3000

# Step 7: Start the application
CMD ["npm", "start"]
```

---

# Architecture Diagram (The Build Process)

```text
       [ Dockerfile ] (The Recipe)
               ↓ (docker build)
       [ Docker Image ] (The Finished Cake)
               ↓ (docker run)
       [ Docker Container ] (Eating the Cake)
```

---

# How Junior Developers Encounter This

- **"We need to add a library to the container":** (Updating the `RUN` command).
- **"Why isn't the new code showing up?":** (Forgetting to re-run the `COPY` command during build).
- **"I need to change the base image":** (Updating the `FROM` command).

---

# Common Beginner Mistakes

- **Not Using `WORKDIR`:** If you don't set a workdir, your files will be scattered in the root directory, which is messy and dangerous.
- **Putting `COPY . .` at the Top:** This makes the build slow! Always copy your dependency files (`package.json`, `requirements.txt`) first and run your install command before copying the rest of your code. (This is called "Layer Caching").
- **Forgetting the `CMD`:** If you don't provide a `CMD`, your container will start and then immediately stop because it has nothing to do.

---

# Next Lesson

Now that you've written your first recipe, let's learn how to bake the cake:

➡ **[Building Images](building-images.md)**
