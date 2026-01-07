# Book Management Web Application

A simple web application for managing a book collection with user authentication, built with vanilla JavaScript and deployed using Docker.

## 🚀 Features

* User registration and login system
* Add, list, edit, and delete books from your collection
* Responsive design for desktop and mobile
* Client-side data storage using localStorage
* Dockerized deployment with Nginx web server

## 🛠️ Technologies

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Storage:** localStorage (client-side)
* **Web Server:** Nginx
* **Containerization:** Docker
* **Version Control:** Git

## 📦 Quick Start with Docker

### Prerequisites
- Docker installed on your system
- Basic knowledge of containers

### Installation & Deployment

1. Clone the repository:
```bash
git clone https://github.com/ouheniamassyl9-maker/book-management-web-app.git
cd book-management-web-app
```

2. Build the Docker image:
```bash
docker build -t book-webapp .
```

3. Run the container:
```bash
docker run -d -p 8080:80 --name book-app book-webapp
```

4. Access the application:
```
http://localhost:8080
```

### Docker Commands

**Stop the container:**
```bash
docker stop book-app
```

**Remove the container:**
```bash
docker rm book-app
```

**View logs:**
```bash
docker logs book-app
```

## 🐳 Docker Configuration

The Dockerfile configures:
- Alpine Linux base image for minimal footprint
- Nginx web server for serving static files
- Port 80 exposed (mapped to host port 8080)
- Optimized multi-stage build for production

## 📁 Project Structure
```
.
├── Dockerfile          # Docker container configuration
├── index.html         # Main application page
├── login.html         # User login interface
├── register.html      # User registration interface
├── login.js           # Login authentication logic
├── register.js        # Registration handler
├── script.js          # Core application logic
├── style.css          # Application styling
└── README.md          # Project documentation
```

## ⚙️ How It Works

This application uses **localStorage** for both authentication and data persistence. While suitable for educational purposes and demonstrations, this approach is not production-ready for real-world applications.

**Authentication Flow:**
1. User registers with credentials stored in localStorage
2. Login validates against stored credentials
3. Session maintained via localStorage

**Data Management:**
- Books stored as JSON in localStorage
- CRUD operations performed client-side
- Data persists across browser sessions

## ⚠️ Current Status

**Educational project** demonstrating front-end fundamentals and Docker deployment. Uses localStorage for authentication and data storage (demonstration purposes only).

**Security Notice:** This implementation is not production-ready. In a real application, authentication and data storage should be handled server-side with proper security measures.

## 🚧 Future Enhancements

* [ ] Integration with actual PDF book links/storage
* [ ] Backend API implementation (Node.js/Express or Python/Flask)
* [ ] Database integration (MongoDB/PostgreSQL)
* [ ] JWT-based authentication system
* [ ] Server-side session management
* [ ] Book cover image upload functionality
* [ ] Search and filter capabilities
* [ ] Export book list to CSV/PDF
* [ ] Docker Compose for multi-container setup
* [ ] CI/CD pipeline with GitHub Actions

## 🎓 Learning Objectives

This project demonstrates:
- Vanilla JavaScript DOM manipulation
- Client-side routing and state management
- Local storage API usage
- Responsive CSS design
- Docker containerization basics
- Nginx web server configuration

## 👨‍💻 Author

**Massyl Ouhenia**  
Systems Administrator / DevOps Engineer  
Currently pursuing: RHCSA Certification, BTS in Informatics and Network

**Technical Focus:** Linux Administration, Docker, Ansible, Infrastructure Automation

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

- Email: ouheniamassyl9@gmail.com
- GitHub: [@ouheniamassyl9-maker](https://github.com/ouheniamassyl9-maker)

---

*Built as a learning project to demonstrate front-end development and DevOps deployment practices* 🚀
