# iCAPE Consult Official Website

![iCAPE LOGO](icape_Logo.png)

**iCAPE Consult** is a multidisciplinary architecture, planning, and engineering firm. This repository contains the codebase for the official iCAPE Consult website, designed to showcase our projects, services, career opportunities, and client portals.

## Table of Contents

- [About iCAPE Consult](#about-icape-consult)

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Project Routes](#project-routes)
- [Authentication Routes](#authentication-routes)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About iCAPE Consult

iCAPE Consult is a leading firm in architecture, planning, and engineering. We provide comprehensive solutions tailored to meet our clients' diverse needs. Our website serves as a hub for clients, partners, and potential employees to learn more about our work and engage with our team.

## Features

- **Project Portfolio:** Browse through our extensive portfolio of successful projects.
- **Services Overview:** Learn about the wide range of services we offer.
- **Career Opportunities:** Discover current job openings and how to apply.
- **Client Portal:** Secure access for clients to manage their projects.
- **Contact Information:** Easy access to our contact details for inquiries.
- **User Authentication** User can register and login to access secure part of the platform.

## Technologies Used

- **Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt, Bcryptjs
- Cors
- dotenv
- nodemon
- **Frontend:** (Not detailed in current context, but implied)
- React (likely, based on MERN stack)
- Tailwind CSS (indicated in the description)
- other front end dependancies.

## Getting Started

Follow these instructions to set up and run the iCAPE Consult website locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository:**

2. **Install backend dependencies:**

3. **Create a `.env` file** in the `backend` directory and add the following:
    - The following are the essential enviorment variables:

4. **Start the backend server:**

5. **For front-end**, You will need to follow similar step after you `cd` to `frontend` directory.

## API Endpoints

### **Project Routes**

| Method | Endpoint             | Description          |
| :----- | :------------------- | :------------------- |
| POST   | `/api/projects`      | Create a new project |
| GET    | `/api/projects`      | Get all projects     |
| GET    | `/api/projects/:id`  | Get project by ID    |
| PUT    | `/api/projects/:id`  | Update a project     |
| DELETE | `/api/projects/:id` | Delete a project     |

### **Authentication Routes**

| Method | Endpoint              | Description           |
| :----- | :-------------------- | :-------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | User login            |

## Deployment

- **Backend:** Hosted on Heroku, DigitalOcean, or any cloud service.
- **Frontend:** Deployed via Netlify or Vercel.

## Contributing

Feel free to contribute by submitting a pull request. Ensure you follow best practices and coding standards.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact:

- **Email**: [contact@icape.com](mailto:contact@icape.com)
- **Website**: [ICAPE](https://icape.com)

---

Developed by **Habtamu Zenebe** & Team 🚀
