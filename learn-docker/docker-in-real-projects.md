# Docker in Real Projects

In the professional world, most applications are not single-container systems. They often consist of multiple services like a frontend, backend, and a database.

---

# A Typical Web Project Structure

In a real project, you'll see a structure like this:

```text
web-app/
│
├── backend/            # Python, Node, Go, etc.
│   ├── app.py
│   └── requirements.txt
│
├── frontend/           # React, Vue, HTML, etc.
│   └── index.html
│
├── Dockerfile          # Builds the web application
├── docker-compose.yml  # Orchestrates multiple containers
└── README.md
```

---

# Example Dockerfile

Here is a common `Dockerfile` for a Python application:

```dockerfile
# Use an official Python runtime as a parent image
FROM python:3.11

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

# Run the application
CMD ["python", "app.py"]
```

---

# Example Docker Compose

The `docker-compose.yml` file is used to run multiple services at once.

```yaml
version: '3'

services:
  web:
    build: .             # Build from the local Dockerfile
    ports:
      - "5000:5000"      # Map host port 5000 to container port 5000

  database:
    image: postgres      # Use a pre-built Postgres image
    environment:
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: password
```

### What This Does:
When you run `docker compose up`, this starts:
1. **Web application container:** Built from your code.
2. **Database container:** A fully configured Postgres instance.

This is exactly how many real projects run locally!

---

# Next Lesson

➡ **[Docker + Git Workflow](docker-git-workflow.md)**
