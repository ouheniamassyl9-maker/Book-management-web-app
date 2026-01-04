# Book Management Web App (Dockerized)

This project is a simple **static web application** (HTML, CSS, JavaScript) containerized using **Docker** and served with **Nginx**.

The goal of this setup is to demonstrate:
- Dockerfile fundamentals
- Containerizing a static web app
- Serving content with Nginx
- Port mapping and image building

---

## Project Structure


├── Dockerfile
├── README.md
├── index.html
├── login.html
├── register.html
├── style.css
├── script.js
├── login.js
├── register.js

## Requirements

- Docker installed  
  Verify with:
  ```bash
   docker --version

## Dockerfile Overview

The Dockerfile:

Uses nginx:alpine as a lightweight base image

Copies static web files into Nginx’s default web directory

Exposes port 80

Runs Nginx in the foreground


## Build the Docker Image

From the project root directory:

docker build -f web-app.dockerfile -t nginx ~/book_web/Users/<your-user> 
## Run the Container
docker run -d -p 8080:80 nginx 
Then open your browser:

register page: http://localhost:8080/register.html
Login page: http://localhost:8080/login.html
Main page: http://localhost:8080

Stop and Remove the Container
docker stop book-web-app
docker rm book-web-app

## Notes

This is a static frontend-only application

No backend or database is included

Navigation between pages is handled via HTML links

The container can run on any system with Docker installed

if you have the official nginx image, this will overwrite it.
