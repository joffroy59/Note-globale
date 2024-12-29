---
tags:
  - IA
---
# Getting Started with Docker: A Comprehensive Guide 🐳

Docker is a tool designed to make it easier to create, deploy, and run applications by using **containers**. Containers allow an application and its dependencies to be enclosed within a single package, making it more portable and consistent across different environments. In this article, we will provide a comprehensive guide on getting started with Docker, covering basic concepts, installation, building your first container, and using Docker Compose for managing multiple containers.

## Prerequisites 🛠️

- A working installation of **Ubuntu**, **Mac OS X** or **Windows** (10 or later with WSL) with at least 2 GB of RAM available.

## Table of Contents
1. [What is Docker?](#what-is-docker?)
2. [Installing Docker](#installing-docker)
   - Windows and Mac OS X
   - Linux
3. [Setting up the Docker environment](#setting-up-the-docker-environment)
4. [Creating a Docker Image](#creating-a-docker-image)
5. [Running a Container with the Created Image](#running-a-container-with-the-created-image)
6. [Using Docker Compose for Multiple Containers Management](#using-docker-compose-for-multiple-containers-management)
7. [Wrapping Up 🎁]
8. [Resources and Further Reading](#resources-and-further-reading)

---

## What is Docker?️💭

Docker allows developers to **isolate application** and its dependencies into a **lightweight, portable environment** known as a **container**. Containers enable consistency across different environments by enforcing the same exact software stack for an application on different machines. This results in fewer errors and streamlined updates and deployments.

---

## Installing Docker 📦

### Windows and Mac OS X️⚙️
1. **Install Docker Desktop**: Visit [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop) and follow the steps to download and install the Docker Desktop application.
2. **Enable Kubernetes** (optional): If you wish to use Kubernetes, enable it in the Docker Desktop settings after installation.

### Linux️🐧
1. Update your package manager: Run the following command to update your package manager database:
$$wget -qO- [https://apt.dockerproject.org/keys](https://www.googleapis.com/pages/feeder?key=AIzaSyDfk6yWKlzQc7gRUaPVbj7NjXI1Ee58j4o) \
| sudo apt-key add -
echo "deb [signed-by=/<span style="text-decoration: underline;">apt.dockerproject.org</span>](https://apt.dockerproject.org)" > /etc/apt/sources.list.d/docker.list && sudo apt-get update \
| sudo apt-get install docker-ce$$

---

## Setting up the Docker environment️💻
1. Verify your installation: Execute the following command to confirm that Docker is correctly installed and running:
$$docker run hello-world$$

---

## Creating a Docker Image 🎨

Let's create a simple PHP container and application:

### Step 1. Create a Dockerfile:
Create a new folder for the container, for example, **my_php_app**. Inside this folder, create a new file with the name `Dockerfile` (no extension). This is where you will specify your desired base image and any other necessary instructions for building your container.

Here's an example of a basic Dockerfile for PHP:
```bash
# Use PHP:8 as our base image
FROM php:8-fpm

# Set the working directory for the application
WORKDIR /var/www/my_app

# Copy the source files into the container
ADD . /var/www/my_app

# Install dependencies with apt (optional)
RUN apt-get update && \
    apt-get install -y gcc libpq-dev
```
### Step 2. Create your application:
Inside the `my_app` directory, create a simple PHP file such as `index.php`. This will be used in the container to demonstrate that the container is running properly:
```php
<?php
echo "Hello, World!";
?>
```
### Step 3. Build the Docker image:
From the root of your container project, execute the following command to build the Docker image:
$$docker build -t my_php_app .$$

---

## Running a Container with the Created Image 🚀
Now that you have built the Docker image, you can run it as a container by executing the following command:
$$docker run -p 8000:80 my_php_app$$
This command maps port 80 from the container to port 8000 on your host machine and runs the `my_php_app` container. Open a web browser and navigate to [http://localhost:8000](http://127.0.0.1:8000) to view the "Hello, World!" message.

---

## Using Docker Compose for Multiple Containers Management 👷‍♂️ 👩‍🎓
Docker Compose helps manage multiple interconnected containers through a single YAML file. In this section, we will modify the existing container to communicate with a MySQL database using Compose.

1. Create/modify the `docker-compose.yml` file:
```yaml
version: '3'
services:
  app:
    build: ./my_php_app
    ports:
      - '8000:80'
    depends_on:
      - db

  db:
    image: mysql:8.0
```
### Step 1. Modify Dockerfile (add database connection details):
Update the `my_app` Dockerfile to include the MySQL credentials:
```bash
# ...

# Set environment variables for the application
ENV MYSQL_DB=mydb \
    MYSQL_USER=root \
    MYSQL_PASSWORD=some_password \
    MYSQL_HOST=db \

# ...
```
### Step 2. Run Docker Compose:
Execute the following command to start both containers with their connections established:
$$docker-compose up -d$$
Now you can access your application at [http://localhost:8000](http://127.0.0.1:8000).

---

## Wrapping Up 🎁
In this article, we provided an introduction to Docker and explained how it can help to improve the portability and consistency of your applications. We walked you through installing Docker on Windows or macOS as well as some Linux distributions. Additionally, you learned how to create a basic Docker image using a Dockerfile, build and run a container using the built image, and use Docker Compose for managing multiple interconnected containers.

---

## Resources and Further Reading 📚
Here are some helpful resources to continue learning about Docker:
- [Official Docker Documentation](https://docs.docker.com/)
- [Laravel Sailing: Docker for Developers](https://laracasts.com/series/laravel-sail)
- [The Official Docker Book](https://www.shellter.net/)
